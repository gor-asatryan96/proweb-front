import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { addBet, removeBet, selectBetsIds } from '../../../../../redux/slices/betslip.slice';
import SportCardBet from './components/SportCardBet/SportCardBet';
import { toggleFavoriteItem } from '../../../../../redux/slices/favorites.slice';
import { FAVORITES_TYPES } from '../../constants/sport.constants';

const SportCard = ({
  data, live,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const betsIds = useSelector(selectBetsIds);

  const addToFavorites = (e, id) => {
    e.stopPropagation();
    dispatch(toggleFavoriteItem({ id, type: FAVORITES_TYPES.GAME }));
  };

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

  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  return (
    <li onClick={onItemClick} className="bet-rate__item">
      {/* <!-- TODO: add className bet-rate__item--marked for show yellow line--> */}
      {isDesktop && (
        <div className="bet-rate__nav">
          {live
            ? <div className="bet-rate__nav__time__live">
              1st Half 25m
            </div>
            : <div className="bet-rate__nav__time">
              Europe / UEFA Euro CUP Cualification / 08 Oct 22:00
            </div>}
          <ul className="bet-rate__nav__list">
            <li className="bet-rate__nav__item">
              <a className="bet-rate__nav__link bet-rate__nav__link--statistic" href="/">
                <div className="img-container">
                  <svg>
                    <use xlinkHref="#statistic" />
                  </svg>
                </div>
              </a>
            </li>
            <li className="bet-rate__nav__item">
              <a className="bet-rate__nav__link bet-rate__nav__link--favorite active" href="/">
                <div className="img-container">
                  <svg>
                    <use xlinkHref="#star" />
                  </svg>
                </div>
              </a>
            </li>
            <li className="bet-rate__nav__item">
              <a className="bet-rate__nav__link bet-rate__nav__link--quantity active" href="/">
                <div className="img-container">
                  <svg preserveAspectRatio="none">
                    <use xlinkHref="#mark" />
                  </svg>
                </div>
                <div className="bet-rate__nav__quantity">
                  +367
                </div>
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="bet-rate__set">
        <div className="bet-rate__set__info">
          {!isDesktop && !live && <div className="bet-rate__set__time">
              {data.league}
            </div>}
          <div className="bet-rate__set__team__block">
            <div className="bet-rate__set__team">
              {data.firstTeam}
            </div>
            <div className="bet-rate__set__team">
              {data.secondTeam}
            </div>
          </div>
          {!isDesktop && (
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
          )}
        </div>
        <div className="bet-rate__set__nav">
          {data.bets?.map(bet => (
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
