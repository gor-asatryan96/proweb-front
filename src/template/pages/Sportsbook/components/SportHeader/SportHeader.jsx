import classNames from 'classnames';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { SPORT_TABS, LIVE_TABS } from '../../constants/sport.constants';

const SportHeader = ({
  isFilterOpen, setIsFilterOpen, filterSelected, activeTab, setActiveTab, live,
}) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });
  return (
    <div className="bet-filter">
      <ul className="bet-filter__list">
        {Object.values(live ? LIVE_TABS : SPORT_TABS).map(tab => (
          <li
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="bet-filter__tab">
            <div className={classNames('bet-filter__btn', { active: activeTab === tab })}>
              {tab}
            </div>
          </li>
        ))}
        <li onClick={() => setIsFilterOpen(prev => !prev)} className="bet-filter__item bet-filter__item--filter">
          <div className="bet-filter__item-content">
            <div className={
              classNames('bet-filter__btn bet-filter__btn--filter',
                { active: isFilterOpen, 'bet-filter__btn--selected': filterSelected })
            }>
              <span className="img-container">
                <span className="bet-filter__icon">
                  <svg width="21.46" height="22">
                    <use xlinkHref="#filter" />
                  </svg>
                </span>
              </span>
            </div>
            {
              isDesktop && (
                <span className="bet-filter__item-content__filter">  Filter</span>
              )
            }
          </div>

        </li>
        {!isDesktop && (
          <li className="bet-filter__item bet-filter__item--search">
            <div className="bet-filter__btn bet-filter__btn--search">
              <span className="img-container">
                <svg width="26.2" height="26.2">
                  <use xlinkHref="#search" />
                </svg>
              </span>
            </div>
          </li>
        )
        }
      </ul>
    </div>
  );
};

export default SportHeader;
