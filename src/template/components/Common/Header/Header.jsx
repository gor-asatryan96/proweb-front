import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBurger } from '../../../../redux/slices/configs.slice';

import { openPopup } from '../../../../redux/slices/popups.slice';
import { selectIsAuth } from '../../../../redux/slices/userInfo.slice';
import { POPUPS_IDS } from '../../Popups/constants/popups.constants';

const { LOGIN, REGISTER, USER_PROFILE } = POPUPS_IDS;

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const togglePopup = (id) => {
    dispatch(openPopup({ id }));
  };

  const openBurger = () => dispatch(toggleBurger(true));

  return (
    <header className="header">
      <div className="container header__container">
        <div onClick={openBurger} className="burger header__burger">
          <span className="img-container">
            <svg className="burger-icon" width="28" height="24">
              <use xlinkHref="#burger" />
            </svg>
          </span>
        </div>
        <div className="logo header__logo" href="">
          <div className="img-container">
            <svg className="logo__img" width="80.83" height="28.12">
              <use xlinkHref="#logo" />
            </svg>
          </div>
        </div>
        <div className="config header__config">
          <ul className="config__list">
            <li className="config__item">
              <div className="config__link">
                <div className="img-container">
                  <div className="config__content">
                    <div className="config__notification">
                      4
                    </div>
                    <svg className="config__img" width="20" height="19" fill="#5f6c79" stroke="#5f6c79">
                      <use xlinkHref="#star" />
                    </svg>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {
          isAuth
            ? <div className="header__user userInfo">
              <div className="userInfo__container">
                <div className="userInfo__amount">
                  <div className="userInfo__amountSize">123456</div>
                  <div className="userInfo__amountType">TZS</div>
                </div>
                <div onClick={() => togglePopup(USER_PROFILE)} className="userInfo__idConfigLink">
                  <span className="userInfo__idConfigLinkIcon">
                    <svg className="userInfo__idConfigLinkIconSvg" viewBox="0 0 20.46 21">
                      <use xlinkHref="#userIconInfo" />
                    </svg>
                  </span>
                  <span className="userInfo__idConfigLinkIdWithText">ID: 12345</span>
                </div>
              </div>
            </div>
            : <nav className="nav header__nav">
              <ul className="nav__list">
                <li className="nav__item" onClick={() => togglePopup(LOGIN)}>
                  <div className="nav__link nav__link--login">
                    log in
                  </div>
                </li>
                <li className="nav__item" onClick={() => togglePopup(REGISTER)}>
                  <div className="nav__link nav__link--register">
                    register
                  </div>
                </li>
              </ul>
            </nav>
        }

      </div>
    </header>
  );
};

export default Header;
