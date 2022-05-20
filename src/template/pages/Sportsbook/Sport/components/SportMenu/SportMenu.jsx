import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { selectIsPrematchSportsLoading } from '../../../../../../redux/reducers/sport/sport.slice';
import { MEDIA_QUERIES } from '../../../../../../constants/mediaQuery.constants';
import PrematchMenuSports from './components/PrematchMenuSports/PrematchMenuSports';

const PrematchMenu = () => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

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
            {isDesktop && <div className="sidebar__betTypeTime">
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
                <button type="button" className="sidebar__betTypeTimeButton">12 hrs</button>
              </div>
              <div className="sidebar__betTypeHour">
                <button type="button" className="sidebar__betTypeTimeButton">24 hrs</button>
              </div>
            </div>}
          </li>
        </ul>
        {!isDesktop && <div className="sidebar__betTypeTime">
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
            <button type="button" className="sidebar__betTypeTimeButton">12 hrs</button>
          </div>
          <div className="sidebar__betTypeHour">
            <button type="button" className="sidebar__betTypeTimeButton">24 hrs</button>
          </div>
        </div>}
      </div>
      <PrematchMenuSports />
    </section>
  );
};

export default PrematchMenu;
