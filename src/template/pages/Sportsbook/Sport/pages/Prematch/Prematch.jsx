import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import PrematchEvents from './components/PrematchEvents/PrematchEvents';
import SinglePrematch from './components/SinglePrematch/SinglePrematch';
import { MEDIA_QUERIES } from '../../../../../../constants/mediaQuery.constants';
import { selectPrematchActiveEvent } from '../../../../../../redux/reducers/sport/sport.slice';
import { usePrematchSideEffects } from './hooks/prematch.hooks';

const Prematch = () => {
  const activeEvent = useSelector(selectPrematchActiveEvent);

  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);
  usePrematchSideEffects();

  return (
    <>
      {(isDesktop || !activeEvent) && <PrematchEvents />}
      <div className="bet__column">
        {activeEvent && <SinglePrematch />}
      </div>
    </>
  );
};

export default Prematch;
