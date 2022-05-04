import classNames from 'classnames';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import LivePanelItem from './components/LivePanelItem/LivePanelItem';
import SingleSportBets from './components/SingleSportBets/SingleSportBets';
import { LIVE_PANEL_TABS_CONFIGS } from './configs/singleSport.configs';
import SpainIcon from '../../../../assets/images/flag/spain.svg';
import FilterButton from '../SportFilters/components/FilterButton/FilterButton';
import { MEDIA_QUERIES } from '../../../../../constants/mediaQuery.constants';

const livePanelTabs = Object.keys(LIVE_PANEL_TABS_CONFIGS);
const typeFilters = [ 'All', 'Match Result', 'Handicap', 'Total', 'Over/Under', 'Goals', 'Double Bets', 'Half', 'Minutes', 'Specials' ];

const SingleSport = ({ live }) => {
  const navigate = useNavigate();
  const [ activePanelTab, setActivePanelTab ] = useState(null);
  const [ activeFilter, setActiveFilter ] = useState(typeFilters[0]);

  const onPanelItemClick = (tab) => {
    setActivePanelTab(activePanelTab === tab ? null : tab);
  };

  const activePanelTabConfigs = LIVE_PANEL_TABS_CONFIGS[activePanelTab];
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return (
    <section className="bet bet-game">
      <div className="container bet__container">
        <div className="bet-match">
          <ul className={classNames('bet-match__list', { 'bet-match__item--panel': true })}>
            {/* <!-- TODO: add className .bet-match__item--panel when panel show--> */}
            <li className="bet-match__item bet-match__item--football">
              <div className={classNames('bet-match__bg', { ' bet-match__bg--live': live })} >
                <div className="bet-match__header">
                  {!isDesktop && (
                  <button onClick={() => navigate(-1)} className="bet-match__back">
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
                        <img src={SpainIcon} alt="Spain" />
                      </div>
                    </div>
                    <div className="bet-match__name">
                      Spain - LA liga
                    </div>
                  </div>
                  {isDesktop && !live && (
                  <div className="bet-match__date">
                    <span className="bet-match__month">
                      11 May
                    </span>
                    <span className="bet-match__time">
                      18:45
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
                    Valencia
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
                    Osasuna
                  </div>
                </div>
                {live && <div className="bet-match__current">
                  47min.2nd Half
                </div>}
              </div>
              {live && <div className="bet-match__row">
                {activePanelTabConfigs && <activePanelTabConfigs.Component />}
              </div>}
              {live && <div className="bet-match__panel">
                <ul className="bet-match__panel__list">
                  {livePanelTabs.map(tab => (
                    <LivePanelItem
                      key={tab}
                      onClick={() => onPanelItemClick(tab)}
                      active={activePanelTab === tab}
                      icon={LIVE_PANEL_TABS_CONFIGS[tab].icon}
                      title={tab} />
                  ))}
                </ul>
              </div>}
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
        <SingleSportBets />
      </div>
    </section>
  );
};

export default SingleSport;
