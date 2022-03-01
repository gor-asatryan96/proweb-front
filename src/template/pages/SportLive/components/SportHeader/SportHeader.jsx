import classNames from 'classnames';
import React from 'react';
import { SPORT_TABS } from '../../constants/sport.constants';

const SportHeader = ({
  isFilterOpen, setIsFilterOpen, filterSelected, activeTab, setActiveTab,
}) => <div className="bet-filter">
  <ul className="bet-filter__list">
    {Object.keys(SPORT_TABS).map(tab => (
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
      <div className={
        classNames('bet-filter__btn bet-filter__btn--filter',
          { active: isFilterOpen, 'bet-filter__btn--selected': filterSelected })
        } >
        <span className="img-container">
          <span className="bet-filter__icon">
            <svg width="21.46" height="22">
              <use xlinkHref="#filter" />
            </svg>
          </span>
        </span>
      </div>
    </li>
    <li className="bet-filter__item bet-filter__item--search">
      <div className="bet-filter__btn bet-filter__btn--search">
        <span className="img-container">
          <svg width="26.2" height="26.2">
            <use xlinkHref="#search" />
          </svg>
        </span>
      </div>
    </li>
  </ul>
</div>;

export default SportHeader;
