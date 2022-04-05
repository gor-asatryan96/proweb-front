import React from 'react';
import { PANEL_ROUTES, PLUS_7_ROUTES } from '../../../../../../../configs/routes.configs';
import { INFO_RULES_CONFIGS } from '../../../../../../Common/InfoRules/configs/infoRules.configs';
import SocialMedia from '../../../../../../Common/SocialMedia/SocialMedia';
import BurgerRouteItem from './components/BurgerRouteItem/BurgerRouteItem';

const routes = [ ...PANEL_ROUTES, ...PLUS_7_ROUTES ];
const infoRulesTabs = Object.keys(INFO_RULES_CONFIGS);

const BurgerNavLeft = ({ setActiveTab }) => (<div className="menu__contentContainers menu__contentContainers_left">
  <ul className="resetList menu__gameTypes gameTypes">
    {routes.map(item => (
      <BurgerRouteItem key={item.path} data={item} />
    ))}
  </ul>
  <div className="gameTypes__additionalLinks">
    <ul className="resetList menu__navList">
      {infoRulesTabs.map(item => (
        <li key={item} onClick={() => setActiveTab(item)} className="menu__navItem">
          <div className="menu__navItemLink">{item}</div>
        </li>
      ))}
      <li className="menu__navItem">
        <div className="menu__navItemLink">Licensed by: <span className="littleSpace">Gaming board</span> <span
          className="littleSpace">of Tanzania</span></div>
      </li>
      <li className="menu__navItem">
        <div className="menu__navItemLink">Security <span className="littleSpace">& responsibility</span></div>
      </li>
    </ul>
    <div className="menu__responsibility responsibility">
      <div className="responsibility__circle">
        <div className="responsibility__age">
          18
        </div>
      </div>
    </div>
    <SocialMedia />
  </div>
</div>);

export default BurgerNavLeft;
