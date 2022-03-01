import React from 'react';
import LanguageSwitcher from '../../../../../../Common/LanguageSwitcher/LanguageSwitcher';

const BurgerMenuFooter = () => (
  <div className="menu__footer">
    <LanguageSwitcher />
    <div className="menu__chat">
      <span className="menu__chat__icon">
        <span className="img-container">
          <svg width="27" height="25">
            <use xlinkHref="#chat" />
          </svg>
        </span>
      </span>
      <span className="menu__chat__name">
        LIVE CHAT
      </span>
    </div>
  </div>
);

export default BurgerMenuFooter;
