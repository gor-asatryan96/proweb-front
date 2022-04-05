import classNames from 'classnames';

const FilterButton = ({ active, title, ...props }) => (
  <li className={classNames('bet-type__item', { 'bet-type__item--active': active })}>
    <button {...props} className="bet-type__link">
      {title}
    </button>
  </li>
);

export default FilterButton;
