import { useMediaQuery } from 'react-responsive';
import PrematchEvents from './components/PrematchEvents/PrematchEvents';
import SinglePrematch from './components/SinglePrematch/SinglePrematch';
import { MEDIA_QUERIES } from '../../../../../../constants/mediaQuery.constants';
import { usePrematchSideEffects } from './hooks/prematch.hooks';
import { useSportParams } from '../../hooks/sport.hooks';
import PrematchMenuCountries from '../../components/SportMenu/components/PrematchMenuCountries/PrematchMenuCountries';

const Prematch = () => {
  const sportParams = useSportParams();

  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);
  usePrematchSideEffects();

  const isCountriesVisible = !isDesktop && !sportParams.country;
  const isEventsVisible = isDesktop || ((sportParams.country || sportParams.league) && !sportParams.event);
  const isSingleVisible = isDesktop || sportParams.event;

  return (
    <>
      {isCountriesVisible && <PrematchMenuCountries />}
      {isEventsVisible && <PrematchEvents />}
      {isSingleVisible && <div className="bet__column"><SinglePrematch /></div>}
    </>
  );
};

export default Prematch;
