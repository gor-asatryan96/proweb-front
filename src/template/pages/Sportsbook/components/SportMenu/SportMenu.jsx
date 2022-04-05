import { useDispatch, useSelector } from 'react-redux';

import { selectActiveSport, setActiveSport } from '../../../../../redux/slices/sport.slice';
import { SPORTS_NAMES } from '../../constants/sport.constants';
import SportMenuItem from './SportMenuItem';

const actualSports = Object.keys(SPORTS_NAMES);

const SportMenu = () => {
  const dispatch = useDispatch();
  const activeSport = useSelector(selectActiveSport);
  return (
    <section className="sidebar">
      <ul className="sidebar__list">
        {actualSports.map(id => (
          <SportMenuItem
            key={id}
            id={id}
            active={+activeSport === +id}
            onSportClick={() => dispatch(setActiveSport(+id))} />
        ))}
      </ul>
    </section>
  );
};

export default SportMenu;
