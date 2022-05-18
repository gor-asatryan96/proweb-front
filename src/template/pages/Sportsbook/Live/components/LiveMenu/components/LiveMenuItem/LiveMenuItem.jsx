import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { MEDIA_QUERIES } from '../../../../../../../../constants/mediaQuery.constants';
import { SPORTS_ICONS } from '../../../../../../../assets/images/sport-kind';
import { SPORTS_NAMES } from '../../../../../constants/sport.constants';

const SportMenuItem = ({ id, active, onSportClick }) => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return (
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
        {isDesktop && (
          <span className="sidebar__quantity">
            18
          </span>
        )}
      </button>
    </li>
  );
};

export default SportMenuItem;
