import React from 'react';
import s from './SportSelect.module.scss';

const SportSelect = () => (
  <label className={s.SportSelect__label}>
    <select className={s.SportSelect}>
      <option className={s.SportSelect__option}>Match result</option>
      <option className={s.SportSelect__option}>Match result2</option>
      <option className={s.SportSelect__option}>Match result3</option>
    </select>
    <span className={s.SportSelect__arrow}>
      <svg className={s.SportSelect__arrowSvg}>
        <use xlinkHref={'#arrow-bottom'} />
      </svg>
    </span>
  </label>
);

export default SportSelect;
