import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import PrematchEvents from './components/PrematchEvents/PrematchEvents';
import SinglePrematch from './components/SinglePrematch/SinglePrematch';
import { MEDIA_QUERIES } from '../../../../../../constants/mediaQuery.constants';
import { selectPrematchSportsList } from '../../../../../../redux/reducers/sport/sport.slice';
import { usePrematchSideEffects } from './hooks/prematch.hooks';
import { useSportParams } from '../../hooks/sport.hooks';
import { replaceUnderscores } from '../../../../../../helpers/utils';
import PrematchMenuCountries from '../../components/SportMenu/components/PrematchMenuCountries/PrematchMenuCountries';

const Prematch = () => {
  const sportList = useSelector(selectPrematchSportsList);
  const sportParams = useSportParams();

  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);
  usePrematchSideEffects();

  const currentSportCountries = useMemo(() => {
    if (!sportParams.sportName) return;
    return sportList.find(sport => sport.sportName === replaceUnderscores(sportParams.sportName))?.countries;
  }, [ sportList, sportParams.sportName ]);

  const isCountriesVisible = !isDesktop && currentSportCountries && !sportParams.country;
  const isEventsVisible = isDesktop || (sportParams.league && !sportParams.event);
  const isSingleVisible = isDesktop || sportParams.event;

  return (
    <>
      {isCountriesVisible && <PrematchMenuCountries countries={currentSportCountries} />}
      {isEventsVisible && <PrematchEvents />}
      {isSingleVisible && <div className="bet__column"><SinglePrematch /></div>}
    </>
  );
};

export default Prematch;
