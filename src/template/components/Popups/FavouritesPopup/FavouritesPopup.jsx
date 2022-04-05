import { useDispatch, useSelector } from 'react-redux';
import { Popup } from '../../UI';
import { closePopup } from '../../../../redux/slices/popups.slice';
import { POPUPS_IDS } from '../constants/popups.constants';
import FavouritsGroup from './components/FavouritsGroup/FavouritsGroup';
import FavouritsCasinoItem from './components/FavouritsCasinoItem/FavouritsCasinoItem';
import SportCard from '../../../pages/Sportsbook/components/SportCard/SportCard';
import FavouritsFilterItem from './components/FavouritsFilterItem/FavouritsFilterItem';
import { selectFavorites } from '../../../../redux/slices/favorites.slice';
import { FAVORITES_TYPES } from '../../../pages/Sportsbook/constants/sport.constants';

const FavouritesPopup = () => {
  const dispatch = useDispatch();

  const favoriteItems = useSelector(selectFavorites);

  const onClose = () => {
    dispatch(closePopup(POPUPS_IDS.FAVOURITES));
  };

  return (
    <Popup onClose={onClose} className='popup_favourite favourite active'>
      <div className="favourite__header">
        <div className="favourite__title">
          Favourites
          &nbsp;
          <span className="favourites__count">10</span>
        </div>
        <button onClick={onClose} className="favourite__closeButton" aria-label="close favourite popup">
          <span className="favourite__closeButtonContainer">
            <svg className="favourite__closeButtonSvg" viewBox="0 0 16.275 16.275">
              <use xlinkHref="#close-icon" />
            </svg>
          </span>
        </button>
      </div>
      <div className="favourite__container">
        <ul className="resetList favourite__list">
          {Object.keys(favoriteItems).length ? Object.keys(favoriteItems).map(list => (
            <FavouritsGroup key={list} date={list}>
              {favoriteItems[list].map((item) => {
                const CurrentComponent = item.type === FAVORITES_TYPES.CASINO ? FavouritsCasinoItem : SportCard;
                return <CurrentComponent key={item.id} data={item} fromFavorite />;
              })}
            </FavouritsGroup>
          ))
            : <div className="favourite__emptyContainer">
              Favorites is empty
            </div>
            }
        </ul>
      </div>
      <div className="favourite__filters">
        <div className="favourite__filtersTitle">
          <svg className="favourite__filterSvg" viewBox="0 0 12.84 13.16">
            <use xlinkHref="#filterIcon" />
          </svg>
          My filters
        </div>
        <ul className="resetList favourite__listFilter">
          {Array(5).fill(null).map((_, i) => (
            <FavouritsFilterItem key={i} />
          ))}
        </ul>
        {/* <!-- TODO if the container is empty use this 'favourite__empty' --> */}
        {/* <div className="favourite__empty"> */}
        {/*  You have no filter saved */}
        {/* </div> */}
      </div>
    </Popup>
  );
};

export default FavouritesPopup;
