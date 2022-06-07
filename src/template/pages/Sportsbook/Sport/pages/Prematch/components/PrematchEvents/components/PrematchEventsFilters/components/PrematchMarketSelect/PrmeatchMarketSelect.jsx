import s from './PrematchMarketSelect.module.scss';

const PrematchMarketSelect = () => (
  <label className={s.PrematchSelect__label}>
    <select className={s.PrematchSelect}>
      <option className={s.PrematchSelect__option}>Match result</option>
      <option className={s.PrematchSelect__option}>Match result2</option>
      <option className={s.PrematchSelect__option}>Match result3</option>
    </select>
    <span className={s.PrematchSelect__arrow}>
      <svg className={s.PrematchSelect__arrowSvg}>
        <use xlinkHref={'#arrow-bottom'} />
      </svg>
    </span>
  </label>
);

export default PrematchMarketSelect;
