import React from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import SportMenu from './components/SportMenu/SportMenu';
import { MEDIA_QUERIES } from '../../../../constants/mediaQuery.constants';
import { selectIsBetExist } from '../../../../redux/reducers/betslip/betslip.slice';
import Advertising from '../../../components/Common/Advertising/Advertising';
import { useSportSideEffects } from './hooks/sport.hooks';

const Sport = () => {
  const isBetExist = useSelector(selectIsBetExist);
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);
  useSportSideEffects();

  return (
    <div className="content">
      <SportMenu />
      <section className={classNames('bet', 'bet__fullWidth', { bet__openedBetSlip: (isBetExist && !isDesktop) })}>
        <div className="container bet__container">
          <div className="bet__row">
            <Outlet />
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

export default Sport;
