import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { LOADING_ITEMS, replaceUnderscores } from '../../../../../../helpers/utils';
import { selectIsPrematchSportsLoading, selectPrematchSportsList } from '../../../../../../redux/reducers/sport/sport.slice';
import { useSportParams } from '../../hooks/sport.hooks';
import PrematchMenuItem from './components/PrematchMenuItem/PrematchMenuItem';
import PrematchMenuItemSkeleton from './components/PrematchMenuItem/PrematchMenuItemSkeleton';

const PrematchMenu = () => {
  const sportName = replaceUnderscores(useSportParams().sportName);
  const sportsList = useSelector(selectPrematchSportsList);
  const isSportsLoading = useSelector(selectIsPrematchSportsLoading);

  return (
    <section className={classNames('sidebar', { sidebar__loading: isSportsLoading })}>
      <div className="sidebar__betType">
        <ul className="sidebar__betTypeList">
          <li className="sidebar__betTypeItem active">
            <div className="sidebar__betTypeInner">
              <button type="button" className="sidebar__betTypeButton">
                <div className="sidebar__betTypeIcon">
                  <svg className="sidebar__betTypeSvg">
                    <use xlinkHref="#hotsTops" />
                  </svg>
                </div>
                <div className="sidebar__betTypeName">HOTS & TOPS</div>
              </button>
            </div>
          </li>
          <li className="sidebar__betTypeItem">
            <div className="sidebar__betTypeInner">
              <button type="button" className="sidebar__betTypeButton">
                <div className="sidebar__betTypeIcon">
                  <svg className="sidebar__betTypeSvg">
                    <use xlinkHref="#expressBet" />
                  </svg>
                </div>
                <div className="sidebar__betTypeName">Express Bet</div>
              </button>
            </div>
          </li>
          <li className="sidebar__betTypeItem">
            <div className="sidebar__betTypeInner">
              <button type="button" className="sidebar__betTypeButton">
                <div className="sidebar__betTypeIcon">
                  <svg className="sidebar__betTypeSvg">
                    <use xlinkHref="#boostedOdds" />
                  </svg>
                </div>
                <div className="sidebar__betTypeName">boosted Odds</div>
              </button>
            </div>
          </li>
          <li className="sidebar__betTypeItem active">
            <div className="sidebar__betTypeInner">
              <button type="button" className="sidebar__betTypeButton">
                <div className="sidebar__betTypeIcon">
                  <svg className="sidebar__betTypeSvg">
                    <use xlinkHref="#pre-match" />
                  </svg>
                </div>
                <div className="sidebar__betTypeName">pre-match</div>
              </button>
            </div>
            <div className="sidebar__betTypeTime">
              <div className="sidebar__betTypeHour">
                <button type="button" className="sidebar__betTypeTimeButton active">All</button>
              </div>
              <div className="sidebar__betTypeHour">
                <button type="button" className="sidebar__betTypeTimeButton">3 hrs</button>
              </div>
              <div className="sidebar__betTypeHour">
                <button type="button" className="sidebar__betTypeTimeButton">6 hrs</button>
              </div>
              <div className="sidebar__betTypeHour">
                <button type="button" className="sidebar__betTypeTimeButton">9 hrs</button>
              </div>
              <div className="sidebar__betTypeHour">
                <button type="button" className="sidebar__betTypeTimeButton">12 hrs</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="sidebar__content">
        <ul className="sidebar__list">
          {isSportsLoading
            ? LOADING_ITEMS.map((_, i) => (
              <PrematchMenuItemSkeleton key={i} />
            ))
            : sportsList.map(sport => (
              <PrematchMenuItem
                key={sport.id}
                data={sport}
                isActive={sportName === sport.sportName}
                        />
            ))
                }
        </ul>
      </div>
    </section>
  );
};

export default PrematchMenu;
