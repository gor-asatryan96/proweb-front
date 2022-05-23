import classNames from 'classnames';

const PrematchTimeFilterItem = ({ active, onClick, name }) => (
  <div className="sidebar__betTypeHour">
    <button
      onClick={onClick}
      type="button"
      className={classNames('sidebar__betTypeTimeButton', { active })}>
      {name}
    </button>
  </div>
);

export default PrematchTimeFilterItem;
