import dayjs from 'dayjs';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bet from './components/Bet/Bet';

const SportItem = ({ data, live }) => {
  const navigate = useNavigate();

  const onItemClick = () => {
    navigate(String(data.id));
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
            <Bet key={bet.id} data={bet} />
          ))}
        </div>
      </div>
    </li>
  );
};

export default SportItem;
