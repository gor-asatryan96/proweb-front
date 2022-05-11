import { useDispatch, useSelector } from 'react-redux';

import { selectPrematchActiveSport, setPrematchActiveSport } from '../../../../../redux/slices/prematch.slice';
import { SPORTS_NAMES } from '../../constants/sport.constants';
import SportMenuItem from './components/SportMenuItem/SportMenuItem';

const actualSports = Object.keys(SPORTS_NAMES);

const SportMenu = () => {
  const dispatch = useDispatch();
  const activeSport = useSelector(selectPrematchActiveSport);
  return (
    <section className="sidebar">
      <ul className="sidebar__list">
        {actualSports.map(id => (
          <SportMenuItem
            key={id}
            id={id}
            active={+activeSport === +id}
            onSportClick={() => dispatch(setPrematchActiveSport(+id))} />
        ))}
      </ul>
    </section>
  );
};

export default SportMenu;
