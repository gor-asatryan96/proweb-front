import { useSelector } from 'react-redux';
import { LOADING_ITEMS, replaceUnderscores } from '../../../../../../../../helpers/utils';
import { selectIsPrematchSportsLoading, selectPrematchSportsList } from '../../../../../../../../redux/reducers/sport/sport.slice';
import { useSportParams } from '../../../../hooks/sport.hooks';
import PrematchMenuSportItem from './components/PrematchMenuSportItem/PrematchMenuSportItem';
import PrematchMenuSportItemSkeleton from './components/PrematchMenuSportItem/PrematchMenuSportItemSkeleton';

const PrematchMenuSports = () => {
  const sportName = replaceUnderscores(useSportParams().sportName);
  const sportsList = useSelector(selectPrematchSportsList);
  const isSportsLoading = useSelector(selectIsPrematchSportsLoading);

  return (
    <div className="sidebar__content">
      <ul className="sidebar__list">
        {isSportsLoading
          ? LOADING_ITEMS.map((_, i) => (
            <PrematchMenuSportItemSkeleton key={i} />
          ))
          : sportsList.map(sport => (
            <PrematchMenuSportItem
              key={sport.id}
              sport={sport}
              isActive={sportName === sport.sportName}
                    />
          ))
            }
      </ul>
    </div>
  );
};

export default PrematchMenuSports;
