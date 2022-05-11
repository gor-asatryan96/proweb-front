import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { LOADING_ITEMS } from '../../../../../../helpers/utils';
import {
  selectPrematchActiveSport, selectIsPrematchSportsLoading, selectPrematchSportsList,
} from '../../../../../../redux/slices/prematch.slice';
import PrematchMenuItem from './components/PrematchMenuItem/PrematchMenuItem';
import PrematchMenuItemSkeleton from './components/PrematchMenuItem/PrematchMenuItemSkeleton';

const PrematchMenu = () => {
  const activeSport = useSelector(selectPrematchActiveSport);
  const sportsList = useSelector(selectPrematchSportsList);
  const isSportsLoading = useSelector(selectIsPrematchSportsLoading);

  return (
    <section className={classNames('sidebar', { sidebar__loading: isSportsLoading })}>
      <ul className="sidebar__list">
        {isSportsLoading
          ? LOADING_ITEMS.map((_, i) => (
            <PrematchMenuItemSkeleton key={i} />
          ))
          : sportsList.map(sport => (
            <PrematchMenuItem
              key={sport.id}
              data={sport}
              isActive={+activeSport === sport.sportId}
            />
          ))
        }
      </ul>
    </section>
  );
};

export default PrematchMenu;
