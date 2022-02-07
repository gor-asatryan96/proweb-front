import classNames from 'classnames';
import React from 'react';

const SportGroup = ({
  country, count, league, children, icon, open,
}) => <li class="bet-live__item">
  <button class={classNames('bet-live__btn', { active: open })}>
    <span class="bet-live__flag">
      <span class="img-container">
        <img src={icon} alt="England" />
      </span>
    </span>
    <span class="bet-live__country">
      {country}
    </span>
    <span class="bet-live__num">
      {count}
    </span>
    <span class="bet-live__dropdown arrow-bottom">
      <span class="img-container">
        <svg width="12px" height="7px">
          <use xlinkHref="#arrow-bottom" />
        </svg>
      </span>
    </span>
  </button>
  <div class={classNames('bet-live__block', { active: open })}>
    <div class="bet-live__team">
      <span>
        {league}
      </span>
    </div>
    <div class="bet-rate">
      <ul class="bet-rate__list">
        {children}
      </ul>
    </div>
  </div>
</li>;

export default SportGroup;
