import React from 'react';

const FilterCheckbox = ({ title, ...props }) => (
  <li className="bet-filter__config__item">
    <label className="bet-filter__config__label">
      <span className="checkbox-2 bet-filter__config__checkbox">
        <input {...props} className="checkbox-2__btn" type="checkbox" />
        <span className="checkbox-2__icon" />
        <span className="bet-filter__config__name">
          {title}
        </span>
      </span>
    </label>
  </li>
);

export default FilterCheckbox;
