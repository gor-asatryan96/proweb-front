import classNames from 'classnames';
import React from 'react';

const BurgerNavRightItem = ({
  title, icon, onClick, active,
}) => (
  <li
    onClick={onClick}
    className={classNames('gameTypes__item', { gameTypes__item_active: active })}>
    <div className="gameTypes__container">
      <span className="gameTypes__icon">
        <img src={icon} alt={title} />
      </span>
      <span className="gameTypes__title">{title}</span>
    </div>
  </li>
);

export default BurgerNavRightItem;
