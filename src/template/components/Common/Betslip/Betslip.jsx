import classNames from 'classnames';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectBets } from '../../../../redux/slices/betslip.slice';
import BetslipOpenedBlock from './components/BetslipOpenedBlock/BetslipOpenedBlock';
import { BET_SLIP_TYPES } from './constants/betslip.constants';
import BetslipArrow from './components/BetslipArrow';

const Betslip = () => {
  const bets = useSelector(selectBets);
  const [ isBetslipOpen, setIsBetslipOpen ] = useState(false);

  const betsIds = Object.keys(bets);
  const slip = { type: 1 }; // temp

  return (
    <div className={classNames('bet-item', { active: isBetslipOpen })}>
      {!!betsIds.length
      && <button onClick={() => setIsBetslipOpen(true)} className="bet-item__btn active">
        <span className="bet-item__info">
          <span className="bet-item__quantity">
            <span>{betsIds.length}&nbsp;</span>
            {/* <span>{slip?.bets.length}&nbsp;</span> */}
            {BET_SLIP_TYPES[Number(slip?.type)]}
          </span>
          <span className="bet-item__price">
            3.10
          </span>
        </span>
        <BetslipArrow isBetslipOpen={isBetslipOpen} />
      </button>}
      <BetslipOpenedBlock
        isBetslipOpen={isBetslipOpen}
        closeBetslip={setIsBetslipOpen.bind(this, false)}
      />
    </div>
  );
};

export default Betslip;
