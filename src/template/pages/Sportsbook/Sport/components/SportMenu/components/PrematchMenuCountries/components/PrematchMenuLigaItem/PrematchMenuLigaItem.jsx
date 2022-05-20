import classNames from 'classnames';

const PrematchMenuLigaItem = ({ active }) => (
  <li className={classNames('sidebar__ligueItem', { active })}>
    <div className="sidebar__ligueName">Premier League</div>
    <div className="sidebar__ligueQuantity">200</div>
  </li>
);

export default PrematchMenuLigaItem;
