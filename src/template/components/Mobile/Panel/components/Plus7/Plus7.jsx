import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SocialMedia from '../../../../Common/SocialMedia/SocialMedia';
import { PLUS_7_ROUTES } from '../../../../../configs/routes.configs';
import { openPopup } from '../../../../../../redux/slices/popups.slice';
import { POPUPS_IDS } from '../../../../Popups/constants/popups.constants';
import { INFO_RULES_TAB_NAMES } from '../../../../Common/InfoRules/constants/infoRules.constants';
import { useOutsideClick } from '../../../../../../hooks/useOutsideClick';

const Plus7 = () => {
  const dispatch = useDispatch();
  const [ isOpen, setIsOpen ] = useState(false);

  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const popupHandler = (tab) => {
    dispatch(openPopup({ id: POPUPS_IDS.INFO_RULES, tab }));
    closeDropdown();
  };

  useOutsideClick(dropdownRef, closeDropdown);

  return (
    <div ref={dropdownRef} className="panel__item panel__item--more">
      <div
        className={classNames('panel__link', 'panel__link--more', { 'panel__link--active': isOpen })}
        aria-label="more"
        onClick={() => setIsOpen(prev => !prev)} >
        <div className="panel__icon">
          <div className="img-container">
            <svg preserveAspectRatio="none" viewBox="0 0 100 100">
              <use xlinkHref="#more" />
            </svg>
          </div>
          <div className="panel__quantity">
            +7
          </div>
        </div>
        <div className="panel__name">
          MORE
        </div>
      </div>
      {isOpen && (
      <div className="panel-more">
        <ul className="panel-more__list">
          {PLUS_7_ROUTES.map(route => (
            <li key={route.name} onClick={closeDropdown} className="panel-more__item">
              <NavLink to={route.to} className="panel-more__link panel-more__link--main">
                {route.name}
              </NavLink>
            </li>
          ))}
          {Object.values(INFO_RULES_TAB_NAMES).map(tabName => (
            <li
              key={tabName}
              onClick={() => popupHandler(tabName)}
              className="panel-more__item">
              <div className="panel-more__link">
                {tabName}
              </div>
            </li>
          ))}
        </ul>
        {/* <div className="panel-more__nav">
          <div className="panel-more__social">
            <div className="img-container">
              <svg width="18" height="18">
                <use xlinkHref="#facebook" />
              </svg>
            </div>
          </div>
          <div className="panel-more__social">
            <div className="img-container">
              <svg width="18" height="18">
                <use xlinkHref="#instagram" />
              </svg>
            </div>
          </div>
        </div> */}
        <SocialMedia />
        <div className="popup__rule">
          <div className="popup__rise">
            <div className="img-container">
              <svg width="29" height="29">
                <use xlinkHref="#18-plus" />
              </svg>
            </div>
          </div>
          <div className="popup__security">
            Security
            <br />
            Responsibility
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Plus7;
