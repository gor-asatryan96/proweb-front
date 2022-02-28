import { useState } from 'react';
import { BET_SLIP_HEADER_NAV } from '../../constants/betslip.constants';

const BetslipItem = ({ data: { event, bet }, onDeleteClick, currentTab }) => {
  const [ betAmount, setBetAmount ] = useState(320);

  const changeBetAmount = (e) => {
    setBetAmount(e.target.value);
  };

  return (
    <li className="bet-item__team__item">
      <div className="bet-item__team__info">
        <div className="bet-item__team__title">
          <div className="bet-item__team__name">
            {event.firstTeam}
          </div>
          <div className="bet-item__team__separator">
            vs
          </div>
          <div className="bet-item__team__name">
            {event.secondTeam}
          </div>
          <div className="bet-item__team__total">
            <div className="bet-item__team__result">
              {bet.name}: <span>{bet.coefficient}</span>
            </div>
          </div>
          {
            currentTab === BET_SLIP_HEADER_NAV[1]
            && <label className="bet-item__team__amount">
              <span className="bet-item__team__amount__name">
                Amount
              </span>
              <input
                className="bet-item__team__amount__number"
                type="number"
                onChange={changeBetAmount}
                value={betAmount} />
            </label>
          }
        </div>
        <div className="bet-item__team__ratio">
          2.53
        </div>
      </div>
      <button onClick={onDeleteClick} className="bet-item__team__delete" />
    </li>
  );
};

export default BetslipItem;
