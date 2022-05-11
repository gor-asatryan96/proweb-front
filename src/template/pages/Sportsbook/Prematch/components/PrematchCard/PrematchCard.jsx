import dayjs from 'dayjs';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { addBet, removeBet, selectBetsIds } from '../../../../../../redux/slices/betslip.slice';
import PrematchCardBet from './components/PrematchCardBet/PrematchCardBet';
import { usePrematchParams } from '../../hooks/prematch.hooks';
import { MEDIA_QUERIES } from '../../../../../../constants/mediaQuery.constants';
import { selectPrematchActiveLeague } from '../../../../../../redux/slices/prematch.slice';
import { replaceSpaces } from '../../../../../../helpers/utils';

const PrematchCard = ({
  event,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const betsIds = useSelector(selectBetsIds);
  const activeLeague = useSelector(selectPrematchActiveLeague);

  const {
    sportName, country, league,
  } = usePrematchParams();

  const teams = event.eventName.split(' V ');
  const prices = event.collections[0]?.markets[0]?.prices || [];

  const onItemClick = () => {
    navigate(`/sport/${sportName}/${country}/${league}/${replaceSpaces(event.eventName)}_${event.eventId}`);
  };

  const onBetClick = (e, bet, isActive) => {
    e.stopPropagation();
    if (isActive) {
      dispatch(removeBet(bet.id));
    } else {
      dispatch(addBet({ bet, event }));
    }
  };

  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return (
    <li onClick={onItemClick} className="bet-rate__item">
      {/* <!-- TODO: add className bet-rate__item--marked for show yellow line--> */}
      {isDesktop && (
        <div className="bet-rate__nav">
          <div className="bet-rate__nav__time">
            {activeLeague.country} / {activeLeague.competitionName} / {dayjs(event.eventStartTime).format('DD MMM HH:mm')}
          </div>
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
                  +{event.pricesCount}
                </div>
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="bet-rate__set">
        <div className="bet-rate__set__info">
          {!isDesktop && <div className="bet-rate__set__time">
            {activeLeague.country} / {activeLeague.competitionName}
            </div>}
          <div className="bet-rate__set__team__block">
            <div className="bet-rate__set__team">
              {teams[0]}
            </div>
            <div className="bet-rate__set__team">
              {teams[1]}
            </div>
          </div>
          {!isDesktop && (
            <div className="bet-rate__set__desc">
              {/* <!-- TODO: add className active --> */}
              <div className="bet-rate__set__quantity active">
                {event.oddsCount}
              </div>
              <div className="bet-rate__set__date">

                <span className="bet-rate__set__date__month">
                  {dayjs(event.eventStartTime).format('DD MMM')}
                </span>
                <span className="bet-rate__set__date__time">
                  {dayjs(event.eventStartTime).format('HH:mm')}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="bet-rate__set__nav">
          {prices.map((bet) => {
            const isActive = betsIds.includes(String(bet.referenceId));
            return (
              <PrematchCardBet
                key={bet.referenceId}
                bet={bet}
                active={isActive}
                onBetClick={e => onBetClick(e, bet, isActive)} />
            );
          })}
        </div>
      </div>
    </li>
  );
};

export default PrematchCard;
