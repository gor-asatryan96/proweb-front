import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import { toggleBurger } from '../../../../redux/reducers/appConfigs/appConfigs.slice';

import { openPopup } from '../../../../redux/reducers/popups/popups.slice';
import {
  selectIsAuth, selectIsConnected, selectUserBalance, selectUserCurrency, selectUserId,
} from '../../../../redux/reducers/user/user.slice';
import { POPUPS_IDS } from '../../Popups/constants/popups.constants';
import RowSkeleton from '../../Skeletons/RowSkeleton/RowSkeleton';
import SearchPanel from '../SearchPanel/SearchPanel';
import { selectFavorites } from '../../../../redux/reducers/favorites/favorites.slice';
import { selectGifts } from '../../../../redux/reducers/gifts/gifts.slice';
import { MEDIA_QUERIES } from '../../../../constants/mediaQuery.constants';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const {
  LOGIN, REGISTER, USER_PROFILE, FAVOURITES, GIFTS,
} = POPUPS_IDS;

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isConnected = useSelector(selectIsConnected);
  const userId = useSelector(selectUserId);
  const balance = useSelector(selectUserBalance);
  const currency = useSelector(selectUserCurrency);
  const favoriteItems = useSelector(selectFavorites);
  const gifts = useSelector(selectGifts);

  const togglePopup = (id) => {
    dispatch(openPopup({ id }));
  };
  const openBurger = () => dispatch(toggleBurger(true));
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__item">
          {!isDesktop && (
          <div onClick={openBurger} className="burger header__burger">
            <span className="img-container">
              <svg className="burger-icon" width="28" height="24">
                <use xlinkHref="#burger" />
              </svg>
            </span>
          </div>
          )}
          <div className="logo header__logo">
            <div className="img-container">
              <svg className="logo__img" width="80.83" height="28.12">
                <use xlinkHref="#logo" />
              </svg>
            </div>
          </div>
          {isDesktop && (
          <SearchPanel />
          )}
          {!isDesktop && <div className="config header__config">
            <ul className="config__list">
              <li className="config__item">
                <div className="config__link">
                  <div className="img-container">
                    <div className="config__content">
                      <svg className="headerMobileSearch__svg">
                        <use xlinkHref="#searchMobile" />
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
              {isDesktop && (
              <li className="config__item">
                <a className="config__link" href="#">
                  <div className="img-container">
                    <div className="config__content">
                      <svg className="config__img config__img--comment" width="1.625rem" height="1.5rem" fill="#5f6c79" stroke="#5f6c79">
                        <use xlinkHref="#chat-2" />
                      </svg>
                    </div>
                  </div>
                </a>
              </li>
              )}
            </ul>
          </div>}
          {/* {!isConnected
        && <div className='headerSkeletons'>
          <div><RowSkeleton /></div>
          <div><RowSkeleton /></div>
          </div>} */}
        </div>
        <div className="header__item">
          {!isConnected
              && <div className="header__user userInfo">
                <div className="userInfo__container">
                  <div className="userInfo__amount">
                    <div className='balanceSkeleton'><RowSkeleton radius='0.2rem' /></div>
                    <div className='currencySkeleton'><RowSkeleton radius='0.2rem' /></div>
                  </div>
                  <div className="userInfo__idConfigLink">
                    <span className="userInfo__idConfigLinkIcon">
                      <svg className="userInfo__idConfigLinkIconSvg" viewBox="0 0 20.46 21">
                        <use xlinkHref="#userIconInfo" />
                      </svg>
                    </span>
                    <span className="userSkeleton"><RowSkeleton radius='0.15rem' /></span>
                  </div>
                </div>
              </div>
          }
          {isConnected
              && (isAuth
                ? <div className="header__user userInfo">
                  <div className="userInfo__container">
                    <div className="userInfo__amount">
                      <div className="userInfo__amountSize">{balance}</div>
                      <div className="userInfo__amountType">{currency}</div>
                    </div>
                    <div className="userInfo__deposit">
                      <button className="userInfoDeposit__button">Deposit</button>
                    </div>
                    <div onClick={() => togglePopup(gifts.length ? GIFTS : USER_PROFILE)} className="userInfo__idConfigLink">
                      {
                          gifts.length ? (<>
                            <span className="userInfo__idConfigLinkIcon">
                              <svg className="userInfo__idConfigLinkIconSvg gift" viewBox="0 0 20.46 21">
                                <use xlinkHref="#gift" />
                              </svg>
                              {gifts.length}
                            </span>
                          </>
                          ) : (<>
                            <span className="userInfo__idConfigLinkIcon">
                              <svg className="userInfo__idConfigLinkIconSvg" viewBox="0 0 20.46 21">
                                <use xlinkHref="#userIconInfo" />
                              </svg>
                            </span>
                          </>
                          )
                        }
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
                </nav>)
          }
          {isDesktop && <LanguageSwitcher />}
        </div>
      </div>
    </header>
  );
};

export default Header;
