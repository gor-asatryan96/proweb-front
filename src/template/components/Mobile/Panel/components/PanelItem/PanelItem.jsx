import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

const PanelItem = ({ data, active }) => {
  const label = data.path.slice(1);
  return (
    <li className={classNames('panel__item', { 'panel__item--active': active })}>
      <NavLink to={data.path} className="panel__link panel__link--sport" aria-label={label}>
        <div className="panel__icon">
          <div className="img-container">
            <svg>
              <use xlinkHref={`#${label}`} />
            </svg>
          </div>
        </div>
        <div className="panel__name">
          {data.name}
        </div>
      </NavLink>
    </li>
  );
};

export default PanelItem;
