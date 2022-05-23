import classNames from 'classnames';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { MEDIA_QUERIES } from '../../../../../../../../../../constants/mediaQuery.constants';
import { selectServerImageUrl } from '../../../../../../../../../../redux/reducers/serverConfigs/serverConfigs.slice';
import PrematchMenuCountries from '../../../PrematchMenuCountries/PrematchMenuCountries';
import BallSkeleton from '../BallSkeleton/BallSkeleton';

const PrematchMenuSportItem = ({ sport, isActive }) => {
  const serverImageUrl = useSelector(selectServerImageUrl);
  const [ isImageLoaded, setIsImageLoaded ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);

  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  const onSportClick = () => {
    setIsOpen(prev => !prev);
  };

  const sportIcon = serverImageUrl && `${serverImageUrl}/sports/${sport.sportId}.svg`;

  return (
    <li
      className={classNames('sidebar__item', { 'sidebar__item--active': isActive })}>
      <div className="sidebar__sport">
        <button onClick={onSportClick} className={classNames('sidebar__btn', { open: isOpen })}>
          <span className="sidebar__icon">
            {!isImageLoaded && <div className='sidebar__icon_skeleton'><BallSkeleton /></div>}
            <span className="img-container">
              <img src={sportIcon} alt='' onLoad={() => setIsImageLoaded(true)} />
            </span>
          </span>
          <span className="sidebar__name">
            {sport.sportName}
          </span>
          {isDesktop && (
          <span className="sidebar__info">
            <span className="sidebar__quantity">
              {sport.eventsCount}
            </span>
            <span className="sidebar__more">
              <svg className="sidebar__svg">
                <use xlinkHref="#arrow-bottom" />
              </svg>
            </span>
          </span>
          )}
        </button>
      </div>
      {(isOpen && isDesktop) && <PrematchMenuCountries countries={sport.countries} />}
    </li>
  );
};

export default PrematchMenuSportItem;
