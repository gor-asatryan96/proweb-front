import { useDispatch } from 'react-redux';
import { Popup } from '../../UI';
import casinoImage from '../../../assets/images/casinoGames/casino2.png';
import { closePopup } from '../../../../redux/slices/popups.slice';
import { POPUPS_IDS } from '../constants/popups.constants';
import FavouritsGroup from './components/FavouritsGroup/FavouritsGroup';
import FavouritsCasinoItem from './components/FavouritsCasinoItem/FavouritsCasinoItem';
import SportCard from '../../../pages/SportLive/components/SportCard/SportCard';
import FavouritsFilterItem from './components/FavouritsFilterItem/FavouritsFilterItem';

const favoritesList = {
  '10.11.2020': [{
    id: 1,
    type: 'sport',
    leauge: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 1, name: 'Match Result', type: '1', coefficient: '1.2',
      },
      {
        id: 2, name: 'Match Result', type: 'x', coefficient: '4.2',
      },
      {
        id: 3, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
  {
    id: 2,
    type: 'sport',
    leauge: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 4, name: 'Match Result', type: '1', coefficient: '1.2', burn: true,
      },
      {
        id: 5, name: 'Match Result', type: 'x', coefficient: '4.2',
      },
      {
        id: 6, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
  {
    id: 3,
    type: 'sport',
    leauge: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 7, name: 'Match Result', type: '1', coefficient: '1.2',
      },
      {
        id: 8, name: 'Match Result', type: 'x', coefficient: '4.2',
      },
      {
        id: 9, name: 'Match Result', type: '2', coefficient: '8',
      },
    ],
  },
  {
    id: 4,
    type: 'sport',
    leauge: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 10, name: 'Match Result', type: '1', coefficient: '1.2',
      },
      {
        id: 11, name: 'Match Result', type: 'x', coefficient: '4.2',
      },
      {
        id: 12, name: 'Match Result', type: '2', coefficient: '8', burn: true,
      },
    ],
  },
  ],
  '08.11.2020': [
    {
      id: 10,
      type: 'sport',
      leauge: 'Europe / UEFA Euro CUP Cualification',
      firstTeam: 'Napoli',
      secondTeam: 'Atalanta',
      oddsCount: '+367',
      date: new Date(),
      bets: [
        {
          id: 28, name: 'Match Result', type: '1', coefficient: '1.2',
        },
        {
          id: 29, name: 'Match Result', type: 'x', coefficient: '4.2', burn: true,
        },
        {
          id: 30, name: 'Match Result', type: '2', coefficient: '8',
        },
      ],
    },
    {
      id: 48,
      type: 'casino',
      name: 'Dragon Throne',
      image: casinoImage,
    },
    {
      id: 11,
      type: 'sport',
      leauge: 'Europe / UEFA Euro CUP Cualification',
      firstTeam: 'Napoli',
      secondTeam: 'Atalanta',
      oddsCount: '+367',
      date: new Date(),
      bets: [
        {
          id: 31, name: 'Match Result', type: '1', coefficient: '1.2',
        },
        {
          id: 32, name: 'Match Result', type: 'x', coefficient: '4.2',
        },
        {
          id: 33, name: 'Match Result', type: '2', coefficient: '8',
        },
      ],
    },
    {
      id: 49,
      type: 'casino',
      name: 'Dragon Throne',
      image: casinoImage,
    },
  ],
};

const FavouritesPopup = () => {
  const dispatch = useDispatch();

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
          {Object.keys(favoritesList).length ? Object.keys(favoritesList).map(list => (
            <FavouritsGroup key={list} date={list}>
              {favoritesList[list].map((item) => {
                const CurrentComponent = item.type === 'casino' ? FavouritsCasinoItem : SportCard;
                return <CurrentComponent key={item.id} data={item} />;
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
        {/* <!-- TODO if the container is empty use this 'favourite__empty' -->
        <!--        <div className="favourite__empty">-->
        <!--          You have no filter saved-->
        <!--        </div> --> */}
      </div>
    </Popup>
  );
};

export default FavouritesPopup;
