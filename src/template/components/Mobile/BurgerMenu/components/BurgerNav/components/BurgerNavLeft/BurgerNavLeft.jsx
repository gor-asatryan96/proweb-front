import React from 'react';
import { useLocation } from 'react-router-dom';
import { PANEL_ROUTES, PLUS_7_ROUTES } from '../../../../../../../configs/routes.configs';
import { INFO_RULES_CONFIGS } from '../../../../../../Common/InfoRules/configs/infoRules.configs';
import BurgerRouteItem from './components/BurgerRouteItem/BurgerRouteItem';

const routes = [ ...PANEL_ROUTES, ...PLUS_7_ROUTES ];
const infoRulesTabs = Object.keys(INFO_RULES_CONFIGS);

const BurgerNavLeft = ({ setActiveTab }) => {
  const { pathname } = useLocation();

  return (<div className="menu__contentContainers menu__contentContainers_left">
    <ul className="resetList menu__gameTypes gameTypes">
      {routes.map(item => (
        <BurgerRouteItem key={item.path} data={item} active={pathname.includes(item.path)} />
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
      <ul className="resetList menu__socialLinks socialList">
        <li className="socialList__item">
          <a href="/" className="socialList__itemLink socialList__itemLink_facebook" aria-label="Facebook">
            <svg className="socialList__itemLinkSvg" viewBox="0 0 26 25">
              <use xlinkHref="#facebook" />
            </svg>
          </a>
        </li>
        <li className="socialList__item">
          <a href="/" className="socialList__itemLink socialList__itemLink_instagram" aria-label="Instagram">
            <svg className="socialList__itemLinkSvg" viewBox="0 0 25 25">
              <use xlinkHref="#instagram" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>);
};

export default BurgerNavLeft;
