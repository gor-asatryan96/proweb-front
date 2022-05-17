import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { MEDIA_QUERIES } from '../../../../../../../../constants/mediaQuery.constants';
import { selectServerImageUrl } from '../../../../../../../../redux/reducers/serverConfigs/serverConfigs.slice';
import { setPrematchActiveSport } from '../../../../../../../../redux/reducers/prematch/prematch.slice';
import BallSkeleton from './BallSkeleton';
import { replaceSpaces } from '../../../../../../../../helpers/utils';

const PrematchMenuItem = ({ data, isActive }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const serverImageUrl = useSelector(selectServerImageUrl);
  const [ isImageLoaded, setIsImageLoaded ] = useState(false);

  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  const onSportClick = () => {
    if (isActive) return;
    navigate(`/sport/${replaceSpaces(data.sportName)}/${replaceSpaces(data.countries[0].name)}/${
      replaceSpaces(data.countries[0].leagues[0].competitionName)}`);
    dispatch(setPrematchActiveSport(data.sportId));
  };

  const sportIcon = serverImageUrl && `${serverImageUrl}/sports/${data.sportId}.svg`;

  return (
    <li
      onClick={onSportClick}
      className={classNames('sidebar__item', { 'sidebar__item--active': isActive })}>
      <button className="sidebar__btn">
        <span className="sidebar__icon">
          {!isImageLoaded && <div className='sidebar__icon_skeleton'><BallSkeleton /></div>}
          <span className="img-container">
            <img src={sportIcon} alt='' onLoad={() => setIsImageLoaded(true)} />
          </span>
        </span>
        <span className="sidebar__name">
          {data.sportName}
        </span>
        {isDesktop && (
          <span className="sidebar__quantity">
            {data.eventsCount}
          </span>
        )}
      </button>
    </li>
  );
};

export default PrematchMenuItem;
