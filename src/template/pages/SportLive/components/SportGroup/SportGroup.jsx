import classNames from 'classNamenames';
import React from 'react';

const SportGroup = ({
  country, count, league, children, icon, open,
}) => <li className="bet-live__item">
  <button className={classNames('bet-live__btn', { active: open })}>
    <span className="bet-live__flag">
      <span className="img-container">
        <img src={icon} alt="England" />
      </span>
    </span>
    <span className="bet-live__country">
      {country}
    </span>
    <span className="bet-live__num">
      {count}
    </span>
    <span className="bet-live__dropdown arrow-bottom">
      <span className="img-container">
        <svg width="12px" height="7px">
          <use xlinkHref="#arrow-bottom" />
        </svg>
      </span>
    </span>
  </button>
  <div className={classNames('bet-live__block', { active: open })}>
    <div className="bet-live__team">
      <span>
        {league}
      </span>
    </div>
    <div className="bet-rate">
      <ul className="bet-rate__list">
        {children}
      </ul>
    </div>
  </div>
</li>;

export default SportGroup;
