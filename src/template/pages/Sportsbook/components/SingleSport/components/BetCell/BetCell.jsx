import React from 'react';

const BetCell = ({ isDouble, title, coefficient }) => (
  <button className={isDouble ? 'bet-ratio__extra__btn' : 'bet-ratio__match__btn'}>
    <span className="bet-ratio__extra__name">{title}</span>
    <span className="bet-ratio__extra__value">{coefficient}</span>
  </button>
);

export default BetCell;
