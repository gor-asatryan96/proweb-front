import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate, Outlet, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import Advertising from '../../components/Common/Advertising/Advertising';
import SportMenu from './components/SportMenu/SportMenu';
import Sport from './components/Sport/Sport';
import Live from './components/Live/Live';
import { selectBetsIds } from '../../../redux/slices/betslip.slice';
import { MEDIA_QUERIES } from '../../../constants/mediaQuery.constants';

const Sportsbook = ({ live }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const betsIds = useSelector(selectBetsIds);

  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  useEffect(() => {
    if (isDesktop && !id) {
      navigate(`/${live ? 'live' : 'sport'}/1`);
    }
  }, [ isDesktop, live ]);

  return (
    <div className="content">
      <SportMenu />
      <section className={classNames('bet', 'bet__fullWidth', { bet__openedBetSlip: (betsIds.length && !isDesktop) })}>
        <div className="container bet__container">
          <div className="bet__row">
            {(isDesktop || !id) && live ? <Live /> : <Sport />}
            <div className="bet__column">
              {id && <Outlet />}
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

export default Sportsbook;
