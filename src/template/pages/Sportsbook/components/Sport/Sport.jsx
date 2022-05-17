import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { FAKE_SPORT_ITEMS } from '../../../../../fakeData';
import { selectFavorites } from '../../../../../redux/reducers/favorites/favorites.slice';
import { FAVORITES_TYPES, SPORT_TABS } from '../../constants/sport.constants';

import SportCard from '../SportCard/SportCard';
import SportFilters from '../SportFilters/SportFilters';
import SportHeader from '../SportHeader/SportHeader';

const Sport = () => {
  const favoriteItems = useSelector(selectFavorites);

  const [ isFilterOpen, setIsFilterOpen ] = useState(false);
  const [ activeTab, setActiveTab ] = useState(SPORT_TABS.TOPS);

  const keys = Object.keys(favoriteItems);

  return (
    <div className="bet__column">
      <div className={classNames('bet-filter__block', { active: isFilterOpen })}>
        <SportHeader
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab} />
        {isFilterOpen && <SportFilters />}
      </div>
      <div className="bet-rate">
        <ul className="bet-rate__list">
          {FAKE_SPORT_ITEMS.map((sport) => {
            const isFavorite = keys.map((item) => {
              const payloadIndex = favoriteItems[item]
                .findIndex(({ type, id }) => type === FAVORITES_TYPES.GAME && id === sport.id);
              return payloadIndex > -1;
            });
            return <SportCard
              key={sport.id}
              isFavorite={!!isFavorite.some(item => item)}
              data={sport} />;
          })}
        </ul>
      </div>
      <div className="bet-search">
        <div className="bet-search__value">
          <label className="bet-search__label">
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
        {/* <!-- TODO: add className active when show result--> */}
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
    </div>
  );
};

export default Sport;
