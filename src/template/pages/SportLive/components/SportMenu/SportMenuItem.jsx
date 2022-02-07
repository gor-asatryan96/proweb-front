import classNames from 'classnames';
import { SPORTS_ICONS } from '../../../../assets/images/sport-kind';
import { SPORTS_NAMES } from '../../constants/sport.constants';

const SportMenuItem = ({ id, active, onSportClick }) => (
  <li
    onClick={onSportClick}
    className={classNames('sidebar__item', { 'sidebar__item--active': active })}>
    <button className="sidebar__btn">
      <span className="sidebar__icon">
        <span className="img-container">
          <img src={SPORTS_ICONS[id]} alt={SPORTS_NAMES[id]} />
        </span>
      </span>
      <span className="sidebar__name">
        {SPORTS_NAMES[id]}
      </span>
    </button>
  </li>
);

export default SportMenuItem;
