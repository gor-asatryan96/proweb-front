import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import PrematchCard from '../PrematchCard/PrematchCard';
import { selectIsPrematchEventsLoading, selectPrematchEvents } from '../../../../../../../../redux/reducers/sport/sport.slice';
import PrematchCardSkeleton from '../PrematchCard/PrematchCardSkeleton';
import { LOADING_ITEMS } from '../../../../../../../../helpers/utils';
import { MEDIA_QUERIES } from '../../../../../../../../constants/mediaQuery.constants';
import PrematchEventsHeader from './components/PrematchEventsHeader/PrematchEventsHeader';
// import PrematchFilters from '../PrematchFilters/PrematchFilters';

const PrematchEvents = () => {
  const sportEvents = useSelector(selectPrematchEvents);
  const isEventsLoading = useSelector(selectIsPrematchEventsLoading);
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);
  // const [ isFilterOpen, setIsFilterOpen ] = useState(false);

  return (
    <div className={classNames('bet__column', { bet__column_loading: isEventsLoading })}>
      <PrematchEventsHeader />
      <div className="bet-rate">
        <ul className="bet-rate__list">
          {/* <PrematchCardSkeleton /> */}
          {isEventsLoading
            ? LOADING_ITEMS.map((_, i) => <PrematchCardSkeleton key={i} />)
            : sportEvents.map(event => <PrematchCard
                key={event.eventId}
                event={event} />)}
        </ul>
      </div>
      {/* <div className="bet-search">
        <div className="bet-search__value">
          <label className="bet-search__label">
            <input className="bet-search__input" type="text" placeholder="Search" />
            <button className="bet-search__del">
              <span className="img-container">
                <svg width="18.63px" height="18.63">
                  <use xlinkHref="#close-icon-2" />
                </svg>
              </span>
            </button>
          </label>
        </div> */}
      {/* <!-- TODO: add className active when show result--> */}
      {/* <div className="bet-search__result active">
          <div className="bet-search__quantity">
            Search results 1
          </div>
          <ul className="bet-search__list">
            <li className="bet-search__item">
              <div className="bet-search__title">
                Europe / UEFA Euro CUP Cualification
              </div>
              <div className="bet-search__team">
                <span className="bet-search__club">
                  Napoli
                  <span className="bet-search__separate">
                    vs
                  </span>
                  Atalanta
                </span>
                <span className="bet-search__time">
                  08 Oct   22:00
                </span>
              </div>
            </li>
          </ul>
        </div> */}
      {/* <div className="bet-search__empty">
          <div className="img-container">
            <svg>
              <use xlinkHref="#empty" />
            </svg>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PrematchEvents;
