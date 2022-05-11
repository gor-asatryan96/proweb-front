import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

const BurgerRouteItem = ({ data }) => (
  <NavLink to={data.to} className={({ isActive }) => classNames('gameTypes__item', { gameTypes__container_active: isActive })}>
    <div className="gameTypes__container">
      <span className="gameTypes__icon">
        <span className="img-container">
          <svg>
            <use xlinkHref={`#${data.icon}`} />
          </svg>
        </span>
      </span>
      <span className="gameTypes__title">{data.name}</span>
      <span className="gameTypes__arrowRight">
        <svg className="gameTypes__arrowRightSvg" viewBox="0 0 6.958 11.97">
          <use xlinkHref="#arrow-right" />
        </svg>
      </span>
    </div>
  </NavLink>
);

export default BurgerRouteItem;
