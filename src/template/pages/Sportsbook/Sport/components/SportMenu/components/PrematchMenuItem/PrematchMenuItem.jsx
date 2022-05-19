import classNames from 'classnames';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { MEDIA_QUERIES } from '../../../../../../../../constants/mediaQuery.constants';
import { selectServerImageUrl } from '../../../../../../../../redux/reducers/serverConfigs/serverConfigs.slice';
import BallSkeleton from './BallSkeleton';
import { replaceSpaces } from '../../../../../../../../helpers/utils';
import { SPORT_TABS_URLS } from '../../../../constants/sport.constants';
import Flag from '../../../../../../../../components/Flag/Flag';

const { PRE_MATCH } = SPORT_TABS_URLS;

const PrematchMenuItem = ({ data, isActive }) => {
  const navigate = useNavigate();
  const serverImageUrl = useSelector(selectServerImageUrl);
  const [ isImageLoaded, setIsImageLoaded ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ isSelected, setIsSelected ] = useState(false);

  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  const onSportClick = () => {
    // if (isActive) return;
    // navigate(`/Sport/${PRE_MATCH}/${replaceSpaces(data.sportName)}/${replaceSpaces(data.countries[0].name)}/${
    //   replaceSpaces(data.countries[0].leagues[0].competitionName)}`);
    setIsOpen(prevState => !prevState);
  };
  const onCountryClick = () => {
    // if (isActive) return;
    // navigate(`/Sport/${PRE_MATCH}/${replaceSpaces(data.sportName)}/${replaceSpaces(data.countries[0].name)}/${
    //   replaceSpaces(data.countries[0].leagues[0].competitionName)}`);
    setIsSelected(prevState => !prevState);
  };

  const sportIcon = serverImageUrl && `${serverImageUrl}/sports/${data.sportId}.svg`;

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
            {data.sportName}
          </span>
          {isDesktop && (
          <span className="sidebar__info">
            <span className="sidebar__quantity">
              {data.eventsCount}
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
      {isOpen && <div className="sidebar__country">
        <ul className="sidebar__countryList">
          <li className="sidebar__countryItem">
            <button onClick={onCountryClick} className={classNames('sidebar__countryButton', { active: isSelected })}>
              <div className="country__title">
                <div className="sidebar__countryFlag">
                  <Flag code={'EN'} />
                </div>
                <div className="sidebar__countryName">England</div>
              </div>
              <span className="sidebar__countryInfo">
                <div className="sidebar__countryQuantity">200</div>
                <span className="sidebar__countryMore">
                  <svg className="sidebar__countrySvg">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {isSelected && (
            <div className="sidebar__ligue">
              <ul className="sidebar__ligueList">
                <li className="sidebar__ligueItem active">
                  <div className="sidebar__ligueName">Premier League</div>
                  <div className="sidebar__ligueQuantity">200</div>
                </li>
                <li className="sidebar__ligueItem">
                  <div className="sidebar__ligueName">Premier League</div>
                  <div className="sidebar__ligueQuantity">200</div>
                </li>
                <li className="sidebar__ligueItem">
                  <div className="sidebar__ligueName">Premier League</div>
                  <div className="sidebar__ligueQuantity">200</div>
                </li>
              </ul>
            </div>
            )}
          </li>
        </ul>
      </div>}
    </li>
  );
};

export default PrematchMenuItem;
