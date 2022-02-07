import React from 'react';

const BurgerNavFooter = () => <div className="menu__footer">
  <div className="menu__language">

    <button className="menu__language__btn">
      <span className="menu__language__current">
        <span className="menu__language__flag">
          <span className="img-container">
            <img src="img/flag/england.png" alt="England" />
          </span>
        </span>
        <span className="menu__language__name">
          EN
        </span>
        <span className="menu__language__arrow">
          <svg width="17" height="10">
            <use xlinkHref="#arrow-top" />
          </svg>
        </span>
      </span>
    </button>
    <ul className="menu__language__list">
      <li className="menu__language__item">
        <button className="menu__language__btn">
          <span className="menu__language__current">
            <span className="menu__language__flag">
              <span className="img-container">
                <img src="img/flag/tanzania.png" alt="England" />
              </span>
            </span>
            <span className="menu__language__name">
              SW
            </span>
          </span>
        </button>
      </li>
      <li className="menu__language__item">
        <button className="menu__language__btn">
          <span className="menu__language__current">
            <span className="menu__language__flag">
              <span className="img-container">
                <img src="img/flag/france.png" alt="England" />
              </span>
            </span>
            <span className="menu__language__name">
              FR
            </span>
          </span>
        </button>
      </li>
      <li className="menu__language__item">
        <button className="menu__language__btn">
          <span className="menu__language__current">
            <span className="menu__language__flag">
              <span className="img-container">
                <img src="img/flag/china.png" alt="England" />
              </span>
            </span>
            <span className="menu__language__name">
              CN
            </span>
          </span>
        </button>
      </li>
    </ul>
  </div>
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
</div>;

export default BurgerNavFooter;
