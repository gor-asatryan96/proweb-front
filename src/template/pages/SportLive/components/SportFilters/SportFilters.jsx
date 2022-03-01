import React, { useState } from 'react';

import FilterButton from './components/FilterButton/FilterButton';
import FilterCheckbox from './components/FilterCheckbox/FilterCheckbox';

const timesFilters = [ 'All', '1 hrs', '3 hrs', '5 hrs', '8 hrs', '12 hrs', '24 hrs', '48 hrs' ];
const typeFilters = [ 'All', 'Match Result', 'Handicap', 'Total', 'Over/Under', 'Goals', 'Double Bets', 'Half', 'Minutes', 'Specials' ];
const leaugeFilters = [ 'All', 'UEFA Scepials', 'Bundesliga', 'La Liga', 'Seria A', 'Ligue 1' ];

const SportFilters = () => {
  const [ activeTime, setActiveTime ] = useState(timesFilters[0]);
  const [ activeType, setActiveType ] = useState(typeFilters[0]);
  const [ activeLeagues, setActiveLeagues ] = useState([]);

  const leagueToggle = (league) => {
    if (activeLeagues.includes(league)) {
      setActiveLeagues(prev => prev.filter(name => name !== league));
    } else {
      setActiveLeagues(prev => [ ...prev, league ]);
    }
  };

  return (
    <>
      {/* <!--TODO: add className active when open upcoming filter --> */}
      {/* <div className="bet-filter__upcoming">
        <div className="bet-filter__config__line bet-filter__config__line--hours">
          <ul className="bet-type__list">
            {timesFilters.map(filter => (
              <FilterButton
                key={filter}
                title={filter}
                active={activeTime === filter}
                onClick={() => setActiveTime(filter)}
          />
            ))}
          </ul>
        </div>
      </div> */}
      {/* <!--TODO: add className active when open filter--> */}
      <div className={'bet-filter__config active'}>
        <div className="bet-filter__config__line bet-filter__config__line--hours">
          <ul className="bet-type__list">
            {timesFilters.map(time => (
              <FilterButton
                key={time}
                title={time}
                active={activeTime === time}
                onClick={() => setActiveTime(time)}
          />
            ))}
          </ul>
        </div>
        <div className="bet-filter__config__line bet-filter__config__line--type">
          <ul className="bet-type__list">
            {typeFilters.map(type => (
              <FilterButton
                key={type}
                title={type}
                active={activeType === type}
                onClick={() => setActiveType(type)}
          />
            ))}
          </ul>
        </div>
        <div className="bet-filter__config__line bet-filter__config__line--match">
          <ul className="bet-filter__config__list">
            {leaugeFilters.map(league => (
              <FilterCheckbox
                key={league}
                title={league}
                checked={activeLeagues.includes(league)}
                onChange={() => leagueToggle(league)}
               />
            ))}
          </ul>
        </div>
        <div className="bet-filter__config__line bet-filter__config__line--event">
          <div className="bet-filter__config__event">
            112 Events
          </div>
          <div className="bet-filter__config__nav">
            <ul className="bet-filter__config__nav__list">
              <li className="bet-filter__config__nav__item bet-filter__config__nav__item--reset">
                <button className="bet-filter__config__nav__btn">
                  <span className="bet-filter__config__nav__icon">
                    <span className="img-container">
                      <svg width="15" height="15.25">
                        <use xlinkHref="#update" />
                      </svg>
                    </span>
                  </span>
                  <span className="bet-filter__config__nav__name">
                    Reset
                  </span>
                </button>
              </li>
              <li className="bet-filter__config__nav__item bet-filter__config__nav__item--save">
                {/* <!-- TODO: add className active --> */}
                <button className="bet-filter__config__nav__btn">
                  <span className="bet-filter__config__nav__icon">
                    <span className="img-container">
                      <svg width="18" height="16.94">
                        <use xlinkHref="#star" />
                      </svg>
                    </span>
                  </span>
                  <span className="bet-filter__config__nav__name">
                    Save my filters
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportFilters;
