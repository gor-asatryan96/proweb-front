import React from 'react';
import { SPORTS_ICONS } from '../../../../../../../assets/images/sport-kind';
import { SPORTS_NAMES } from '../../../../../../../pages/Sportsbook/constants/sport.constants';
import BurgerNavRightItem from './components/BurgerNavRightItem/BurgerNavRightItem';

const actualSports = Object.keys(SPORTS_NAMES);

const BurgerNavRight = () => (
  <div className="menu__contentContainers menu__contentContainers_right">
    <ul className="resetList menu__gameTypes gameTypes gameTypes_inner">
      {actualSports.map(id => (
        <BurgerNavRightItem
          key={id}
          icon={SPORTS_ICONS[id]}
          title={SPORTS_NAMES[id]}
            // active={+activeSport === +id}
             />
      ))}
    </ul>
  </div>);

export default BurgerNavRight;
