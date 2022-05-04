import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { betslipTab, removeBet } from '../../../../../../../../redux/slices/betslip.slice';
import { BET_SLIP_HEADER_NAV } from '../../../../constants/betslip.constants';
import { MEDIA_QUERIES } from '../../../../../../../../constants/mediaQuery.constants';

const BetslipFooter = () => {
  const [ betAmount, setBetAmount ] = useState('');

  const dispatch = useDispatch();
  const currentTab = useSelector(betslipTab);

  const onDeleteClick = (id) => {
    dispatch(removeBet(id));
  };

  const changeBetAmount = (e) => {
    setBetAmount(e.target.value);
  };

  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return (
    <div className="bet-item__panel">
      <div className="bet-item__panel__total">
        <div className="bet-item__panel__column">
          <label className="bet-item__panel__label">
            <span className="bet-item__panel__title">
              Bet with
            </span>
            <select className="bet-item__panel__select" name="">
              <option className="bet-item__panel__option" value="">
                Units (12828)
              </option>
            </select>
          </label>
        </div>
        <div className="bet-item__panel__column">
          <input
            type={'number'}
            placeholder={'Amount'}
            className="bet-item__panel__amount"
            value={betAmount}
            onChange={changeBetAmount} />
        </div>
      </div>
      <div className="bet-item__panel__total">
        {
          currentTab === BET_SLIP_HEADER_NAV[2]
          && <div className="bet-item__panel__row">
            <div className="bet-item__panel__row bet-item__panel__row--combination">
              <label className="bet-item__panel__number">
                <span className="bet-item__panel__title">
                  Combination amount
                </span>
                <input className="bet-item__panel__number__value" type="number" value="0" />
                <span className="bet-item__panel__title">
                  of 5
                </span>
              </label>
            </div>
          </div>
        }
        {
          currentTab === BET_SLIP_HEADER_NAV[2]
          && <div className="bet-item__panel__column">
            <div className="bet-item__panel__info">
              <div className="bet-item__panel__name">
                Possible Combos
              </div>
              <div className="bet-item__panel__value">
                10
              </div>
            </div>
          </div>
        }
        {
          (currentTab === BET_SLIP_HEADER_NAV[0] || currentTab === BET_SLIP_HEADER_NAV[2])
          && <div className="bet-item__panel__column">
            <div className="bet-item__panel__info">
              <div className="bet-item__panel__name">
                Totals odds
              </div>
              <div className="bet-item__panel__value">
                125.47
              </div>
            </div>
          </div>
        }
        <div className="bet-item__panel__column">
          <div className="bet-item__panel__info">
            <div className="bet-item__panel__name">
              Possible tax
            </div>
            <div className="bet-item__panel__value">
              0
            </div>
          </div>
        </div>
        {
          currentTab === BET_SLIP_HEADER_NAV[0]
          && <div className="bet-item__panel__column">
            <div className="bet-item__panel__info">
              <div className="bet-item__panel__name">
                Possible bonus
              </div>
              <div className="bet-item__panel__value">
                0
              </div>
            </div>
          </div>
        }
        {
          currentTab === BET_SLIP_HEADER_NAV[2]
          && <>
            <div className="bet-item__panel__column">
              <div className="bet-item__panel__info bet-item__panel__info--amount">
                <div className="bet-item__panel__name">
                  Min. bet amount must be
                </div>
                <div className="bet-item__panel__value">
                  500
                </div>
              </div>
            </div>
            <div className="bet-item__panel__column" />
          </>
        }
        <div className="bet-item__panel__column">
          <div className="bet-item__panel__info bet-item__panel__info--win">
            <div className="bet-item__panel__name">
              Possible Win
            </div>
            <div className="bet-item__panel__value">
              140.550
            </div>
          </div>
        </div>
      </div>
      <div className="bet-item__panel__row bet-item__panel__accept">
        <div className="bet-item__panel__column">
          <button onClick={() => onDeleteClick('all')} className="bet-item__panel__trash" />
          {isDesktop && (
          <button className="bet-item__panel__btn bet-item__panel__btn--fast">
            FAST BET
          </button>
          )}
        </div>
        <div className="bet-item__panel__column">
          <button className="bet-item__panel__btn bet-item__panel__btn--place">
            PLACE BET
          </button>
        </div>
      </div>
    </div>
  );
};

export default BetslipFooter;
