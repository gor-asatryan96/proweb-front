import classNames from 'classnames';
import React from 'react';
import Flag from '../../../../../components/Flag/Flag';

const SportGroup = ({
  country, count, children, toggle, open,
}) => <li className="bet-live__item">
  <button onClick={toggle} className={classNames('bet-live__btn', { active: open })}>
    <span className="bet-live__flag">
      <span className="img-container">
        <Flag size='lg' country={country} />
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
    {children}
  </div>
</li>;

export default SportGroup;
