import { useDispatch, useSelector } from 'react-redux';
import BetslipItem from '../../../BetslipItem/BetslipItem';
import { betslipTab, removeBet, selectBets } from '../../../../../../../../redux/reducers/betslip/betslip.slice';

const BetslipBets = () => {
  const dispatch = useDispatch();

  const currentTab = useSelector(betslipTab);
  const bets = useSelector(selectBets);

  const onDeleteClick = (id) => {
    dispatch(removeBet(id));
  };

  const betsIds = Object.keys(bets);

  return (
    (
      <div className="bet-item__team">
        <ul className="bet-item__team__list">
          {betsIds.map(id => (
            <BetslipItem currentTab={currentTab} key={id} data={bets[id]} onDeleteClick={() => onDeleteClick(id)} />
          ))}
        </ul>
      </div>
    )
  );
};

export default BetslipBets;
