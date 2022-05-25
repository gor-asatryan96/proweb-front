import classNames from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import SinglePrematchBets from './components/SinglePrematchBets/SinglePrematchBets';
import FilterButton from '../PrematchFilters/components/FilterButton/FilterButton';
import { MEDIA_QUERIES } from '../../../../../../../../constants/mediaQuery.constants';
import { selectIsSingleEventLoading, selectPrematchActiveEvent } from '../../../../../../../../redux/reducers/sport/sport.slice';
import Flag from '../../../../../../../../components/Flag/Flag';
import { useSportParams } from '../../../../hooks/sport.hooks';
import { SPORT_TABS_URLS } from '../../../../constants/sport.constants';
import SingleSportSkeleton from '../../../../../components/SingleSportSkeleton/SingleSportSkeleton';

const typeFilters = [ 'All', 'Match Result', 'Handicap', 'Total', 'Over/Under', 'Goals', 'Double Bets', 'Half', 'Minutes', 'Specials' ];
const { PRE_MATCH } = SPORT_TABS_URLS;

const SinglePrematch = () => {
  const navigate = useNavigate();
  const urlPaths = useSportParams();
  const event = useSelector(selectPrematchActiveEvent);
  const isSingleEventLoading = useSelector(selectIsSingleEventLoading);

  const [ activeFilter, setActiveFilter ] = useState(typeFilters[0]);

  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  console.log('isSingleEventLoading', isSingleEventLoading);
  console.log('event', event);

  if (isSingleEventLoading || !event) return <SingleSportSkeleton />;

  const {
    competitionName, eventStartTime, eventName, country, collections,
  } = event;
  const teams = eventName.split(' V ');

  const onBack = () => navigate(`/Sport/${PRE_MATCH}/${urlPaths.sportName}/${urlPaths.country}/${urlPaths.league}`);

  return (
    <section className="bet bet-game">
      <div className="container bet__container">
        <div className="bet-match">
          <ul className={classNames('bet-match__list', { 'bet-match__item--panel': true })}>
            {/* <!-- TODO: add className .bet-match__item--panel when panel show--> */}
            <li className="bet-match__item bet-match__item--football">
              <div className={classNames('bet-match__bg')} >
                <div className="bet-match__header">
                  {!isDesktop && (
                  <button onClick={onBack} className="bet-match__back">
                    <span className="img-container">
                      <svg>
                        <use xlinkHref="#arrow-left" />
                      </svg>
                    </span>
                  </button>
                  )}
                  <div className="bet-match__country">
                    <div className="bet-match__flag">
                      <div className="img-container">
                        <Flag country={country} />
                      </div>
                    </div>
                    <div className="bet-match__name">
                      {competitionName}
                    </div>
                  </div>
                  {isDesktop && (
                  <div className="bet-match__date">
                    <span className="bet-match__month">
                      {dayjs(eventStartTime).format('DD MMM')}
                    </span>
                    <span className="bet-match__time">
                      {dayjs(eventStartTime).format('HH:mm')}
                    </span>
                  </div>
                  )}
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
                      <a className="bet-rate__nav__link bet-rate__nav__link--favorite" href="/">
                        <div className="img-container">
                          <svg className="star-transparent">
                            <use xlinkHref="#star" />
                          </svg>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="bet-match__result">
                  <div className="bet-match__team">
                    {teams[0]}
                  </div>
                  <div className="bet-match__score">
                    <span className="bet-match__score__value">
                      0
                    </span>
                    <span className="bet-match__score__separate">
                      :
                    </span>
                    <span className="bet-match__score__value">
                      0
                    </span>
                  </div>
                  <div className="bet-match__team">
                    {teams[1]}
                  </div>
                </div>

              </div>
            </li>
          </ul>
        </div>
        <div className="bet-filter__block">
          <div className="bet-filter__upcoming active">
            <div className="bet-filter__config__line bet-filter__config__line--type">
              <ul className="bet-type__list">
                {typeFilters.map(type => (
                  <FilterButton
                    key={type}
                    title={type}
                    active={activeFilter === type}
                    onClick={() => setActiveFilter(type)}
          />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <SinglePrematchBets collections={collections} />
      </div>
    </section>
  );
};

export default SinglePrematch;
