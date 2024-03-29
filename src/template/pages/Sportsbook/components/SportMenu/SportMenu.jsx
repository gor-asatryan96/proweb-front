import { SPORTS_NAMES } from '../../constants/sport.constants';
import SportMenuItem from './components/SportMenuItem/SportMenuItem';

const actualSports = Object.keys(SPORTS_NAMES);

const SportMenu = () => (
  <section className="sidebar">
    <ul className="sidebar__list">
      {actualSports.map(id => (
        <SportMenuItem
          key={id}
          id={id}
            // active={+activeSport === +id}
             />
      ))}
    </ul>
  </section>
);

export default SportMenu;
