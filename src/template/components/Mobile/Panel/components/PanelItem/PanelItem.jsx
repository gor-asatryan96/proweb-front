import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

const PanelItem = ({ data }) => {
  const label = data.path.slice(1);
  return (
    <NavLink
      to={data.path}
      aria-label={label}
      className={({ isActive }) => classNames('panel__item', { 'panel__item--active': isActive })}>
      <div className='panel__link panel__link--sport'>
        <div className="panel__icon">
          <div className="img-container">
            <svg>
              <use xlinkHref={`#${data.icon}`} />
            </svg>
          </div>
        </div>
        <div className="panel__name">
          {data.name}
        </div>
      </div>
    </NavLink>
  );
};

export default PanelItem;
