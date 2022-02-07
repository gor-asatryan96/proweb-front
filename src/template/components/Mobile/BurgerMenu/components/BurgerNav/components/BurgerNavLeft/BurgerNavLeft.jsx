import React from 'react';
import { INFO_RULES_CONFIGS } from '../../../../../../Common/InfoRules/configs/infoRules.configs';

const infoRulesTabs = Object.keys(INFO_RULES_CONFIGS);

const BurgerNavLeft = ({ setActiveTab }) => <div className="menu__contentContainers menu__contentContainers_left">
  <ul className="resetList menu__gameTypes gameTypes">
    <li className="gameTypes__item gameTypes__container_active">
      <div className="gameTypes__container">
        <span className="gameTypes__icon">
          <span className="img-container">
            <svg>
              <use xlinkHref="#menu-sport" />
            </svg>
          </span>
        </span>
        <span className="gameTypes__title">Sports</span>
        <span className="gameTypes__arrowRight">
          <svg className="gameTypes__arrowRightSvg" viewBox="0 0 6.958 11.97">
            <use xlinkHref="#arrow-right" />
          </svg>
        </span>
      </div>
    </li>
    <li className="gameTypes__item">
      <div className="gameTypes__container">
        <span className="gameTypes__icon">
          <span className="img-container">
            <svg>
              <use xlinkHref="#menu-live" />
            </svg>
          </span>
        </span>
        <span className="gameTypes__title">Live</span>

        <span className="gameTypes__arrowRight">
          <svg className="gameTypes__arrowRightSvg" viewBox="0 0 6.958 11.97">
            <use xlinkHref="#arrow-right" />
          </svg>
        </span>
      </div>
    </li>
    <li className="gameTypes__item">
      <div className="gameTypes__container">
        <span className="gameTypes__icon">
          <span className="img-container">
            <svg>
              <use xlinkHref="#menu-casino" />
            </svg>
          </span>
        </span>
        <span className="gameTypes__title">Casino</span>

        <span className="gameTypes__arrowRight">
          <svg className="gameTypes__arrowRightSvg" viewBox="0 0 6.958 11.97">
            <use xlinkHref="#arrow-right" />
          </svg>
        </span>
      </div>
    </li>
    <li className="gameTypes__item">
      <div className="gameTypes__container">
        <span className="gameTypes__icon">
          <span className="img-container">
            <svg>
              <use xlinkHref="#menu-pm-league" />
            </svg>
          </span>
        </span>
        <span className="gameTypes__title">Pm league</span>

        <span className="gameTypes__arrowRight">
          <svg className="gameTypes__arrowRightSvg" viewBox="0 0 6.958 11.97">
            <use xlinkHref="#arrow-right" />
          </svg>
        </span>
      </div>
    </li>
    <li className="gameTypes__item">
      <div className="gameTypes__container">
        <span className="gameTypes__icon">
          <span className="img-container">
            <svg>
              <use xlinkHref="#menu-e-sports" />
            </svg>
          </span>
        </span>
        <span className="gameTypes__title">E sports</span>

        <span className="gameTypes__arrowRight">
          <svg className="gameTypes__arrowRightSvg" viewBox="0 0 6.958 11.97">
            <use xlinkHref="#arrow-right" />
          </svg>
        </span>
      </div>
    </li>
    <li className="gameTypes__item">
      <div className="gameTypes__container">
        <span className="gameTypes__icon">
          <span className="img-container">
            <svg>
              <use xlinkHref="#menu-virtual-sport" />
            </svg>
          </span>
        </span>
        <span className="gameTypes__title">Virtual sport</span>

        <span className="gameTypes__arrowRight">
          <svg className="gameTypes__arrowRightSvg" viewBox="0 0 6.958 11.97">
            <use xlinkHref="#arrow-right" />
          </svg>
        </span>
      </div>
    </li>
    <li className="gameTypes__item">
      <div className="gameTypes__container">
        <span className="gameTypes__icon">
          <span className="img-container">
            <svg>
              <use xlinkHref="#menu-live-casino" />
            </svg>
          </span>
        </span>
        <span className="gameTypes__title">Live casino</span>

        <span className="gameTypes__arrowRight">
          <svg className="gameTypes__arrowRightSvg" viewBox="0 0 6.958 11.97">
            <use xlinkHref="#arrow-right" />
          </svg>
        </span>
      </div>
    </li>
    <li className="gameTypes__item">
      <div className="gameTypes__container">
        <span className="gameTypes__icon">
          <span className="img-container">
            <svg>
              <use xlinkHref="#menu-games" />
            </svg>
          </span>
        </span>
        <span className="gameTypes__title">Games</span>

        <span className="gameTypes__arrowRight">
          <svg className="gameTypes__arrowRightSvg" viewBox="0 0 6.958 11.97">
            <use xlinkHref="#arrow-right" />
          </svg>
        </span>
      </div>
    </li>
    <li className="gameTypes__item">
      <div className="gameTypes__container">
        <span className="gameTypes__icon">
          <span className="img-container">
            <svg>
              <use xlinkHref="#menu-live-games" />
            </svg>
          </span>
        </span>
        <span className="gameTypes__title">Live games</span>

        <span className="gameTypes__arrowRight">
          <svg className="gameTypes__arrowRightSvg" viewBox="0 0 6.958 11.97">
            <use xlinkHref="#arrow-right" />
          </svg>
        </span>
      </div>
    </li>
    <li className="gameTypes__item">
      <div className="gameTypes__container">
        <span className="gameTypes__icon">
          <span className="img-container">
            <svg>
              <use xlinkHref="#menu-jackpot" />
            </svg>
          </span>
        </span>
        <span className="gameTypes__title">Jackpot</span>

        <span className="gameTypes__arrowRight">
          <svg className="gameTypes__arrowRightSvg" viewBox="0 0 6.958 11.97">
            <use xlinkHref="#arrow-right" />
          </svg>
        </span>
      </div>
    </li>
    <li className="gameTypes__item">
      <div className="gameTypes__container">
        <span className="gameTypes__icon">
          <span className="img-container">
            <svg>
              <use xlinkHref="#menu-fixtures" />
            </svg>
          </span>
        </span>
        <span className="gameTypes__title">Fixtures</span>

        <span className="gameTypes__arrowRight">
          <svg className="gameTypes__arrowRightSvg" viewBox="0 0 6.958 11.97">
            <use xlinkHref="#arrow-right" />
          </svg>
        </span>
      </div>
    </li>
    <li className="gameTypes__item">
      <div className="gameTypes__container">
        <span className="gameTypes__icon">
          <span className="img-container">
            <svg>
              <use xlinkHref="#menu-results" />
            </svg>
          </span>
        </span>
        <span className="gameTypes__title">Promotions</span>

        <span className="gameTypes__arrowRight">
          <svg className="gameTypes__arrowRightSvg" viewBox="0 0 6.958 11.97">
            <use xlinkHref="#arrow-right" />
          </svg>
        </span>
      </div>
    </li>
    <li className="gameTypes__item">
      <div className="gameTypes__container">
        <span className="gameTypes__icon">
          <span className="img-container">
            <svg>
              <use xlinkHref="#menu-statistics" />
            </svg>
          </span>
        </span>
        <span className="gameTypes__title">Statistic</span>

        <span className="gameTypes__arrowRight">
          <svg className="gameTypes__arrowRightSvg" viewBox="0 0 6.958 11.97">
            <use xlinkHref="#arrow-right" />
          </svg>
        </span>
      </div>
    </li>
    <li className="gameTypes__item">
      <div className="gameTypes__container">
        <span className="gameTypes__icon">
          <span className="img-container">
            <svg>
              <use xlinkHref="#menu-promotion" />
            </svg>
          </span>
        </span>
        <span className="gameTypes__title">Results</span>

        <span className="gameTypes__arrowRight">
          <svg className="gameTypes__arrowRightSvg" viewBox="0 0 6.958 11.97">
            <use xlinkHref="#arrow-right" />
          </svg>
        </span>
      </div>
    </li>
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
</div>;

export default BurgerNavLeft;
