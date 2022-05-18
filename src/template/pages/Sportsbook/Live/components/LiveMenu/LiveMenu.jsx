import { SPORTS_NAMES } from '../../constants/sport.constants';
import LiveMenuItem from './components/LiveMenuItem/LiveMenuItem';

const actualSports = Object.keys(SPORTS_NAMES);

const LiveMenu = () => (
  <section className="sidebar">
    <ul className="sidebar__list">
      {actualSports.map(id => (
        <LiveMenuItem
          key={id}
          id={id}
            // active={+activeSport === +id}
             />
      ))}
    </ul>
  </section>
);

export default LiveMenu;
