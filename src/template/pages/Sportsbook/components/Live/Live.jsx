import React, { useState } from 'react';
import classNames from 'classnames';
import { FAKE_SPORT_GROUPS } from '../../../../../fakeData';
import SportGroup from '../../../Sportsbook/components/SportGroup/SportGroup';
import { SPORT_TABS } from '../../constants/sport.constants';
import SportCard from '../SportCard/SportCard';
import SportFilters from '../SportFilters/SportFilters';
import SportHeader from '../SportHeader/SportHeader';

const Live = () => {
  const [ isFilterOpen, setIsFilterOpen ] = useState(false);
  const [ activeTab, setActiveTab ] = useState(SPORT_TABS.TOPS);
  const [ openCountries, setOpenCountries ] = useState(Object.keys(FAKE_SPORT_GROUPS));

  const toggleOpenCountries = (country) => {
    setOpenCountries(prev => (prev.includes(country)
      ? prev.filter(item => item !== country)
      : [ ...prev, country ]));
  };

  return (
    <div className="bet__column">
      <div
        className={classNames('bet-filter__block', { active: isFilterOpen })}
      >
        <SportHeader
          live
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab} />
        {/* <div className="bet-filter__upcoming active">
    <div className="bet-filter__config__line bet-filter__config__line--type">
      <ul className="bet-type__list">
        <li className="bet-type__item bet-type__item--active">
          <button className="bet-type__link">
            All
          </button>
        </li>
        <li className="bet-type__item">
          <button className="bet-type__link">
            Match Result
          </button>
        </li>
        <li className="bet-type__item">
          <button className="bet-type__link">
            Handicap
          </button>
        </li>
        <li className="bet-type__item">
          <button className="bet-type__link">
            Total
          </button>
        </li>
        <li className="bet-type__item">
          <button className="bet-type__link">
            Over/Under
          </button>
        </li>
        <li className="bet-type__item">
          <button className="bet-type__link">
            Goals
          </button>
        </li>
        <li className="bet-type__item">
          <button className="bet-type__link">
            Double Bets
          </button>
        </li>
        <li className="bet-type__item">
          <button className="bet-type__link">
            Half
          </button>
        </li>
        <li className="bet-type__item">
          <button className="bet-type__link">
            Minutes
          </button>
        </li>
        <li className="bet-type__item">
          <button className="bet-type__link">
            Specials
          </button>
        </li>
      </ul>
    </div>
  </div> */}
        {isFilterOpen && <SportFilters />}
      </div>
      <div className="bet-search">
        <div className="bet-search__value">
          <label className="bet-search__label" htmlFor="">
            <input className="bet-search__input" type="text" placeholder="Search" />
            <button className="bet-search__del">
              <span className="img-container">
                <svg width="18.63px" height="18.63">
                  <use xlinkHref="#close-icon-2" />
                </svg>
              </span>
            </button>
          </label>
        </div>
        {/* <!--          TODO: add className active when show result--> */}
        <div className="bet-search__result active">
          <div className="bet-search__quantity">
            Search results 1
          </div>
          <ul className="bet-search__list">
            <li className="bet-search__item">
              <div className="bet-search__title">
                Europe / UEFA Euro CUP Cualification
              </div>
              <div className="bet-search__team">
                <span className="bet-search__club">
                  Napoli
                  <span className="bet-search__separate">
                    vs
                  </span>
                  Atalanta
                </span>
                <span className="bet-search__time">
                  08 Oct   22:00
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="bet-search__empty">
          <div className="img-container">
            <svg>
              <use xlinkHref="#empty" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bet-live">
        <ul className="bet-live__list">
          {Object.keys(FAKE_SPORT_GROUPS).map((country) => {
            const group = FAKE_SPORT_GROUPS[country];
            const { length, ...subGroups } = group;
            const leagues = Object.keys(subGroups);
            return (
              <SportGroup
                key={country}
                country={country}
                count={length}
                toggle={() => toggleOpenCountries(country)}
                open={openCountries.includes(country)}>
                {leagues.map(league => (
                  <React.Fragment key={league}>
                    <div className="bet-live__team">
                      <span>
                        {league}
                      </span>
                    </div>
                    <ul className="bet-rate__list">
                      {subGroups[league].map(game => (
                        <SportCard key={game.id} data={game} live />
                      ))}
                    </ul>
                  </React.Fragment>
                ))}
              </SportGroup>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Live;
