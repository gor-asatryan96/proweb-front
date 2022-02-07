import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../../configs/routes.configs';
import PanelItem from './components/PanelItem/PanelItem';

const panelItems = ROUTES.filter(route => route.name);

const Panel = () => {
  const { pathname } = useLocation();
  return (
    <section className="panel">
      <ul className="panel__list">
        {/* <!-- TODO: add className panel__item--active --> */}
        {panelItems.map(item => (
          <PanelItem key={item.path} data={item} active={pathname.includes(item.path)} />
        ))}
        {/* <li className="panel__item panel__item--active">
        <NavLink to='/sport' className="panel__link panel__link--sport" aria-label="sport">
          <div className="panel__icon">
            <div className="img-container">
              <svg>
                <use xlinkHref="#sport" />
              </svg>
            </div>
          </div>
          <div className="panel__name">
            Sports
          </div>
        </NavLink>
      </li>
      <li className="panel__item">
        <NavLink to='/live' className="panel__link panel__link--live" aria-label="live">
          <div className="panel__icon">
            <div className="img-container">
              <svg>
                <use xlinkHref="#live" />
              </svg>
            </div>
          </div>
          <div className="panel__name">
            Live
          </div>
        </NavLink>
      </li>
      <li className="panel__item">
        <NavLink to='/sport' className="panel__link panel__link--casino" aria-label="casino">
          <div className="panel__icon">
            <div className="img-container">
              <svg>
                <use xlinkHref="#casino" />
              </svg>
            </div>
          </div>
          <div className="panel__name">
            Casino
          </div>
        </NavLink>
      </li>
      <li className="panel__item">
        <NavLink to='/games' className="panel__link panel__link--games" aria-label="Games">
          <div className="panel__icon">
            <div className="img-container">
              <svg>
                <use xlinkHref="#games" />
              </svg>
            </div>
          </div>
          <div className="panel__name">
            Games
          </div>
        </NavLink>
      </li>
      <li className="panel__item">
        <NavLink to='/sport' className="panel__link panel__link--live-casino" aria-label="Live Casino">
          <div className="panel__icon">
            <div className="img-container">
              <svg>
                <use xlinkHref="#live-casino" />
              </svg>
            </div>
          </div>
          <div className="panel__name">
            Live Casino
          </div>
        </NavLink>
      </li>
      <li className="panel__item">
        <NavLink to='/sport' className="panel__link panel__link--chukua" aria-label="chukua">
          <div className="panel__icon">
            <div className="img-container">
              <svg>
                <use xlinkHref="#chukua" />
              </svg>
            </div>
          </div>
          <div className="panel__name">
            Chukua tano
          </div>
        </NavLink>
      </li>
      <li className="panel__item">
        <NavLink to='/sport' className="panel__link panel__link--virtual" aria-label="virtual">
          <div className="panel__icon">
            <div className="img-container">
              <svg>
                <use xlinkHref="#virtual-sport" />
              </svg>
            </div>
          </div>
          <div className="panel__name">
            Virtual sport
          </div>
        </NavLink>
      </li>
      <li className="panel__item">
        <NavLink to='/sport' className="panel__link panel__link--live-games" aria-label="Live Games">
          <div className="panel__icon">
            <div className="img-container">
              <svg>
                <use xlinkHref="#live-games" />
              </svg>
            </div>
          </div>
          <div className="panel__name">
            Live Games
          </div>
        </NavLink>
      </li>
      <li className="panel__item">
        <NavLink to='/sport' className="panel__link panel__link--e-sports" aria-label="E SPORTS">
          <div className="panel__icon">
            <div className="img-container">
              <svg>
                <use xlinkHref="#e-sport" />
              </svg>
            </div>
          </div>
          <div className="panel__name">
            E SPORTS
          </div>
        </NavLink>
      </li>
      <li className="panel__item">
        <NavLink to='/sport' className="panel__link panel__link--league" aria-label="PM LEAGUE">
          <div className="panel__icon">
            <div className="img-container">
              <svg>
                <use xlinkHref="#league" />
              </svg>
            </div>
          </div>
          <div className="panel__name">
            PM LEAGUE
          </div>
        </NavLink>
      </li>
      <li className="panel__item">
        <NavLink to='/sport' className="panel__link panel__link--jackpot" aria-label="jackpot">
          <div className="panel__icon">
            <div className="img-container">
              <svg>
                <use xlinkHref="#jackpot" />
              </svg>
            </div>
          </div>
          <div className="panel__name">
            JACKPOT
          </div>
        </NavLink>
      </li> */}
      </ul>
    </section>
  );
};

export default Panel;
