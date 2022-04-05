import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup } from '../../../../redux/slices/popups.slice';
import { INFO_RULES_CONFIGS } from '../../Common/InfoRules/configs/infoRules.configs';
import { INFO_RULES_TAB_NAMES } from '../../Common/InfoRules/constants/infoRules.constants';
import { Popup } from '../../UI';
import { POPUPS_IDS } from '../constants/popups.constants';

const { INFO_RULES } = POPUPS_IDS;

const InfoRulesPopup = () => {
  const dispatch = useDispatch();
  const popupProps = useSelector(state => state.popups.popupsProps[INFO_RULES]);
  const [ activeTab, setActiveTab ] = useState(popupProps?.tab || INFO_RULES_TAB_NAMES.ABOUT_US);

  const activeTabConfigs = useMemo(() => (
    activeTab ? INFO_RULES_CONFIGS[activeTab] : null
  ), [ activeTab ]);

  const onClose = () => {
    dispatch(closePopup(INFO_RULES));
  };

  return (
    <Popup onClose={onClose} className='popup-footer active'>
      <div className="popup-profile__container">
        <div className="popup-profile__header">
          <nav className="popup-profile__nav">
            <ul className="popup-profile__list">
              {Object.values(INFO_RULES_TAB_NAMES).map(tabName => (
                <li onClick={() => setActiveTab(tabName)} key={tabName} className="popup-profile__item">
                  <div className={classNames('popup-profile__link', { 'popup-profile__link--active': tabName === activeTab })}>
                    {tabName}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
          <button onClick={onClose} className="popup-profile__close">
            <span className="img-container">
              <svg width="14" height="14">
                <use xlinkHref="#close" />
              </svg>
            </span>
          </button>
        </div>
        <div className="popup-profile__row">
          <div className="popup-profile__column popup-profile__column--about popup-profile__column--active">
            <div className="popup-footer__about">
              <h2 className="popup-footer__about-caption">
                {activeTab}
              </h2>
              <div className="popup-footer__about-info">
                <activeTabConfigs.Component />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default InfoRulesPopup;
