import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { LOADING_ITEMS, replaceUnderscores } from '../../../../../../../../helpers/utils';
import { selectIsPrematchSportsLoading, selectPrematchSportsList } from '../../../../../../../../redux/reducers/sport/sport.slice';
import { useSportParams } from '../../../../hooks/sport.hooks';
import PrematchMenuCountryItem from './components/PrematchMenuCountryItem/PrematchMenuCountryItem';
import PrematchMenuCountryItemSkeleton from './components/PrematchMenuCountryItem/PrematchMenuCountryItemSkeleton';

const PrematchMenuCountries = ({ countries }) => {
  const sportParams = useSportParams();
  const sportList = useSelector(selectPrematchSportsList);
  const isSportsLoading = useSelector(selectIsPrematchSportsLoading);

  const currentSportCountries = useMemo(() => {
    if (countries) return countries;
    if (!sportParams.sportName) return [];
    return sportList.find(sport => sport.sportName === replaceUnderscores(sportParams.sportName))?.countries;
  }, [ sportList, sportParams.sportName ]);

  return (
    <div className="sidebar__country">
      <ul className="sidebar__countryList">
        {isSportsLoading
          ? LOADING_ITEMS.map((_, i) => (
            <PrematchMenuCountryItemSkeleton key={i} />
          ))
          : currentSportCountries.map(country => (
            <PrematchMenuCountryItem key={country.name} country={country} />
          ))
      }
      </ul>
    </div>
  );
};

export default PrematchMenuCountries;
