import React from 'react';

const BetCell = ({ isDouble, name, coefficient }) => (
  <button className={isDouble ? 'bet-ratio__extra__btn' : 'bet-ratio__match__btn'}>
    <span className="bet-ratio__extra__name">{name}</span>
    <span className="bet-ratio__extra__value">{coefficient}</span>
  </button>
);

export default BetCell;
