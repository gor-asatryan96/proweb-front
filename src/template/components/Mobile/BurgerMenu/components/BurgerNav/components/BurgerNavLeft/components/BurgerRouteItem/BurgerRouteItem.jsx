import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

const BurgerRouteItem = ({ active, data }) => {
  const label = data.path.slice(1);

  return (
    <NavLink to={data.path} className={classNames('gameTypes__item', { gameTypes__container_active: active })}>
      <div className="gameTypes__container">
        <span className="gameTypes__icon">
          <span className="img-container">
            <svg>
              <use xlinkHref={`#${label}`} />
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
};

export default BurgerRouteItem;