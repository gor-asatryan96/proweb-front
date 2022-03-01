import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { BET_SLIP_HEADER_NAV } from '../../../../constants/betslip.constants';
import BetslipArrow from '../../../BetslipArrow';
import { betslipTab, changeBetslipNav } from '../../../../../../../../redux/slices/betslip.slice';

const BetslipNav = ({ closeBetslip, isBetslipOpen }) => {
  const currentTab = useSelector(betslipTab);
  const dispatch = useDispatch();

  return (
    (
      <div className="bet-item__nav">
        <ul className="bet-item__nav__list">
          {
            BET_SLIP_HEADER_NAV.map(item => (
              <li
                onClick={() => dispatch(changeBetslipNav(item))}
                key={item}
                className="bet-item__nav__item">
                <div className={cn('bet-item__nav__btn', { active: item === currentTab })}>
                  {item}
                </div>
              </li>
            ))
          }
        </ul>
        <BetslipArrow clickHandler={closeBetslip} isBetslipOpen={isBetslipOpen} />
      </div>
    )
  );
};

export default BetslipNav;
