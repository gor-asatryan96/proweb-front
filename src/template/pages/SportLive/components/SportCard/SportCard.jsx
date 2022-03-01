import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { addBet, removeBet, selectBetsIds } from '../../../../../redux/slices/betslip.slice';
import SportCardBet from './components/SportCardBet/SportCardBet';

const SportCard = ({ data, live }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const betsIds = useSelector(selectBetsIds);

  const onItemClick = () => {
    navigate(String(data.id));
  };

  const onBetClick = (e, bet, isActive) => {
    e.stopPropagation();
    if (isActive) {
      dispatch(removeBet(bet.id));
    } else {
      const { bets, ...event } = data;
      dispatch(addBet({ bet, event }));
    }
  };

  return (
    <li onClick={onItemClick} className="bet-rate__item">
      {/* <!-- TODO: add className bet-rate__item--marked for show yellow line--> */}
      <div className="bet-rate__set">
        <div className="bet-rate__set__info">
          {!live && <div className="bet-rate__set__time">
            {data.leauge}
          </div>}
          <div className="bet-rate__set__team__block">
            <div className="bet-rate__set__team">
              {data.firstTeam}
            </div>
            <div className="bet-rate__set__team">
              {data.secondTeam}
            </div>
          </div>
          <div className="bet-rate__set__desc">
            {/* <!-- TODO: add className active --> */}
            <div className="bet-rate__set__quantity active">
              {data.oddsCount}
            </div>
            <div className="bet-rate__set__date">
              {live
                ? data.time
                : <>
                  <span className="bet-rate__set__date__month">
                    {dayjs(data.date).format('DD MMM')}
                  </span>
                  <span className="bet-rate__set__date__time">
                    {dayjs(data.date).format('HH:mm')}
                  </span>
                </>
          }
            </div>
          </div>
        </div>
        <div className="bet-rate__set__nav">
          {data.bets.map(bet => (
            <SportCardBet
              key={bet.id}
              data={bet}
              active={betsIds.includes(String(bet.id))}
              onBetClick={e => onBetClick(e, bet, betsIds.includes(String(bet.id)))} />
          ))}
        </div>
      </div>
    </li>
  );
};

export default SportCard;
