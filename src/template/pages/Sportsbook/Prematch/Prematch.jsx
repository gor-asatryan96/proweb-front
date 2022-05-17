import React from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import Advertising from '../../../components/Common/Advertising/Advertising';
import { usePrematchSideEffects } from './hooks/prematch.hooks';
import PrematchMenu from './components/PrematchMenu/PrematchMenu';
import { MEDIA_QUERIES } from '../../../../constants/mediaQuery.constants';
import { selectIsBetExist } from '../../../../redux/reducers/betslip/betslip.slice';
import PrematchEvents from './components/PrematchEvents/PrematchEvents';
import SinglePrematch from './components/SinglePrematch/SinglePrematch';
import { selectPrematchActiveEvent } from '../../../../redux/reducers/prematch/prematch.slice';

const Prematch = () => {
  const isBetExist = useSelector(selectIsBetExist);
  const activeEvent = useSelector(selectPrematchActiveEvent);

  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);
  usePrematchSideEffects();

  return (
    <div className="content">
      <PrematchMenu />
      <section className={classNames('bet', 'bet__fullWidth', { bet__openedBetSlip: (isBetExist && !isDesktop) })}>
        <div className="container bet__container">
          <div className="bet__row">
            {(isDesktop || !activeEvent) && <PrematchEvents />}
            <div className="bet__column">
              {activeEvent && <SinglePrematch />}
            </div>
            {isDesktop && <div className="bet__column" >
              <div className="bet-advertising">
                <Advertising />
              </div>
            </div>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prematch;
