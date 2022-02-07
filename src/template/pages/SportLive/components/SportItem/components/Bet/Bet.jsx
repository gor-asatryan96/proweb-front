import classNames from 'classnames';
import React from 'react';

const Bet = ({ data }) => (
  <button className={classNames('bet-rate__set__btn', { hot: data.burn })}>
    <span className="bet-rate__set__number">
      {data.type}
    </span>
    <span className="bet-rate__set__coefficient">
      {data.coefficient}
    </span>
  </button>
);

export default Bet;
