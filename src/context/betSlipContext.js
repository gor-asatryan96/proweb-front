/* eslint-disable no-shadow */
import React, { useContext, useState } from 'react';
import { betslip, calculate } from 'bet-calculation';
import axios from 'axios';
import { whiteLabel } from '../WhiteLabel';
import { actionDispatch } from '../config/store';

export const BetSlipContext = React.createContext(null);

const BetSlipProvider = ({ children }) => {
  const [ betSlipModule ] = useState(betslip());
  const [ headers, setHeaders ] = useState({ label: {}});
  const [ slipData, setSlipData ] = useState();
  const [ bonuses, setBonuses ] = useState();
  const [ slip, setSlip ] = useState({
    bets: [],
    amount: 0,
    type: 0,
    payUnits: false,
    evenValue: 1,
    errors: [],
  });

  async function set(slip) {
    await betCalculate(slip);
    await betSlipModule.set(slip);
    setSlip(betSlipModule.slip);
  }

  async function getInitSettings() {
    const response = await axios.post(`https://${whiteLabel.countryUrl}/api/v2/multi`, [
      {
        module: 'other',
        method: 'settings',
      }])
      .then((res) => {
        const { data } = res.data[0];
        betSlipModule.init({
          label: { ...data.betting },
        }, betSlipModule.storageKinds.VARIABLE);
        setHeaders({ label: data.betting });
        setSlipData(data);

        const MultyBonusRuler = data?.betting?.MultyBonusRuler;
        const array = {};
        MultyBonusRuler && MultyBonusRuler.map((item, index) => {
          if (item > 0) {
            array[index] = `${item}`;
          }
        });
        setBonuses(array);
      })
      .catch((err) => {
        console.log('error from initial settings', err);
      });

    return response.data[0].data;
  }

  async function add(betslipData, isCopyBet = false, lastIndex = false) {
    const betsArr = [];
    const result = slip.bets.findIndex(line => line.reference_id === betslipData.reference_id);
    if (result !== -1 && !isCopyBet) {
      await remove(betslipData.reference_id);
    } else if (!isCopyBet || (isCopyBet && result === -1)) {
      const {
        price_rate, price_name, event_name, market_name, isLive, price_hcap, reference_id,
      } = betslipData;
      const newline = {
        amount: whiteLabel.minBetAmount,
        errors: [],
        price_rate,
        price_name,
        event_name,
        isLive: isLive || false,
        market_name,
        price_hcap: price_hcap || 0,
        reference_id: reference_id || '',
      };
      betsArr.push(...slip.bets, newline);
      if (betsArr.length === 2) {
        slip.amount = whiteLabel.minBetAmount;
      }
    }

    if (result === -1 && !isCopyBet) {
      await saveBet(betsArr);
    } else if (result === -1 && isCopyBet && lastIndex) {
      slip.type = slip.bets.length > 1 ? 1 : 0;
      await save(betsArr);
    }
  }

  async function remove(priceReferenceId) {
    const visible = slip.visible || false;
    const response = await betSlipModule.remove({
      reference_id: priceReferenceId,
      amount: slip.amount,
      type: slip.type,
    });
    await betCalculate({
      ...response,
      visible,
      possible_tax: 0,
      winning_with_tax: 0,
    });
  }

  async function get() {
    const data = await betSlipModule.get();
    data.visible = data.visible ?? false;
    if (data.bets.length === 1) {
      data.type = 0;
    } else if (data.bets.length > 1) {
      data.type = 1;
      data.amount = slipData.betting.amountBetSport.default;
    }
    await betCalculate(data);
  }

  async function save() {
    const data = await betSlipModule.set(slip);
    if (data) {
      setSlip(data);
    }
    await betCalculate(slip);
  }

  async function saveBet(bets) {
    const visible = slip.visible || false;
    const data = await betSlipModule.append({
      bet: bets[bets.length - 1],
      amount: slip.amount,
    });

    const newSlip = { ...data, visible };
    if (newSlip.bets.length === 1) {
      newSlip.type = 0;
    } else if (newSlip.bets.length > 1) {
      newSlip.type = 1;
    }
    await betCalculate(newSlip);
  }

  async function changeType() {
    let slipObj = { ...slip };
    const data = await betSlipModule.switchKind(slip);
    if (data) {
      slipObj = {
        ...data,
        visible: true,
      };
    }
    await betCalculate(slipObj);
  }

  async function closePayUnits() {
    slip.payUnits = false;
    await betCalculate(slip);
  }

  async function reset() {
    setSlip({
      amount: 0,
      bets: [],
      evenValue: 1,
      errors: [],
      payUnits: false,
      type: 0,
      visible: false,
    });
    await betSlipModule.empty();
  }

  async function betCalculate(slip) {
    try {
      if (headers && headers.label) {
        const { betting, label } = slipData;
        setHeaders(() => {
          const headers = {
            label: {
              multyBonusRuler: betting['MultyBonusRuler'],
              betAmountVatTax: betting['betAmountVatTax'],
              maxOddGlobal: betting['maxOddGlobal'],
              bonusType: betting['BonusType'],
              computerBonus: betting['ComputerBonus'],
              tax: betting['Tax'],
              amountBetSport: betting['amountBetSport'],
              compensationDeduction: betting['CompensationDeduction'],
              DefaultAmount: betting['amountBetSport']['default'],
              exchangeRate: betting['ExchangeRate'],
              fixedPercentBonus: betting['fixedPercentBonus'],
              filterBetSlip: betting['filterBetSlip'],
              RateChangeLive: betting['RateChangeLive'],
              RateChange: betting['RateChange'],
              UnitsEnabled: betting['UnitsEnabled'],
              systemBetting: betting['systemBetting'],
              totoSingleBet: betting['totoSingleBet'],
              project: {
                project: label.project,
                version: label.version,
                currency: label.currency,
              },
            },
          };
          betSlipModule.headers = headers;
          if (slip && slip.amount && (!slip.amount.length || slip.amount === '0')) {
            slip.possible_tax = 0;
            slip.winning_with_tax = 0;
          }
          slip.isUnitCalculate = true;
          const newSlip = calculate(headers, slip);
          newSlip['errors'] = [];
          setSlip(newSlip);

          return headers;
        });
      }
    } catch (e) {
      console.log('error from calculations', e);
    }
  }

  const betSlipService = {
    getInitSettings,
    add,
    remove,
    get,
    changeType,
    reset,
    set,
    closePayUnits,
    slip,
    bonuses,
  };

  return (
    <BetSlipContext.Provider value={betSlipService}>
      {children}
    </BetSlipContext.Provider>
  );
};

export const useBetSlipContext = () => useContext(BetSlipContext);

export default BetSlipProvider;
