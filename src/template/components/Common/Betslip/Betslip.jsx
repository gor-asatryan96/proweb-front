import classNames from 'classnames';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useMediaQuery } from 'react-responsive';
import { selectBets } from '../../../../redux/slices/betslip.slice';
import { BETSLIP_TABS } from './constants/betslip.constants';
import BetslipArrow from './components/BetslipArrow';
import { BETSLIP_CONFIGS } from './configs/betslip.configs';

const { BETSLIP, MY_BETS } = BETSLIP_TABS;

const Betslip = () => {
  const bets = useSelector(selectBets);
  const [ isBetslipOpen, setIsBetslipOpen ] = useState(false);
  const [ activeTab, setActiveTab ] = useState(BETSLIP);

  const betsIds = Object.keys(bets);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  const ActiveComponent = BETSLIP_CONFIGS[activeTab].Component;

  return (
    <div className={classNames('bet-item', { active: isBetslipOpen })}>
      {(!!betsIds.length || isDesktop) && <button
        className="bet-item__btn active">
          {/* TODO: add bet-item--active to change background color */}
        <span onClick={() => setActiveTab(BETSLIP)} className="bet-item__info">
          <span>Betslip </span>
          <span className="bet-item__quantity">
            {betsIds.length}
          </span>
          <span className="bet-item__price">
            X3.10
          </span>
        </span>
          {/* TODO: add bet-item--active to change background color */}
        <div onClick={() => setActiveTab(MY_BETS)} className="bet-item__name">
          My Bets

          <span className="mybet-item__quantity">1</span>
        </div>
        <BetslipArrow isBetslipOpen={isBetslipOpen} clickHandler={() => setIsBetslipOpen(prev => !prev)} />
      </button>}
      <div className="bet-item__block">
        <ActiveComponent
          isBetslipOpen={isBetslipOpen}
          closeBetslip={setIsBetslipOpen.bind(this, false)}
      />
      </div>
    </div>
  );
};

export default Betslip;
