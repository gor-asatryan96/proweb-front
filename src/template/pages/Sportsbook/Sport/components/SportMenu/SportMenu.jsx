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
    </section>
  );
};

export default PrematchMenu;
