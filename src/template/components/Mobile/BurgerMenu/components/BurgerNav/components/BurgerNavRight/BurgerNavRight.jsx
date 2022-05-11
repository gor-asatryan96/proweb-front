import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectPrematchActiveSport, setPrematchActiveSport } from '../../../../../../../../redux/slices/prematch.slice';
import { SPORTS_ICONS } from '../../../../../../../assets/images/sport-kind';
import { SPORTS_NAMES } from '../../../../../../../pages/Sportsbook/constants/sport.constants';
import BurgerNavRightItem from './components/BurgerNavRightItem/BurgerNavRightItem';

const actualSports = Object.keys(SPORTS_NAMES);

const BurgerNavRight = () => {
  const dispatch = useDispatch();
  const activeSport = useSelector(selectPrematchActiveSport);
  return (
    <div className="menu__contentContainers menu__contentContainers_right">
      <ul className="resetList menu__gameTypes gameTypes gameTypes_inner">
        {actualSports.map(id => (
          <BurgerNavRightItem
            key={id}
            icon={SPORTS_ICONS[id]}
            title={SPORTS_NAMES[id]}
            active={+activeSport === +id}
            onClick={() => dispatch(setPrematchActiveSport(+id))} />
        ))}
      </ul>
    </div>);
};

export default BurgerNavRight;
