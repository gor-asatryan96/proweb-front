import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Popup } from '../../UI';
import logo from '../../../assets/images/logo.svg';
import { closePopup } from '../../../../redux/reducers/popups/popups.slice';
import { POPUPS_IDS } from '../constants/popups.constants';
import { RECOVERY_TABS_CONFIGS } from './configs/recovery.configs';
import { RECOVERY_TABS_IDS } from './constants/recovery.constants';
import LicenceFooter from '../components/LicenceFooter/LicenceFooter';

const { RECOVERY } = POPUPS_IDS;
const { START } = RECOVERY_TABS_IDS;

const RecoveryPopup = () => {
  const dispatch = useDispatch();
  const popupProps = useSelector(state => state.popups.popupsProps[RECOVERY]);

  const [ activeTabId, setActiveTabId ] = useState(popupProps?.tab || START);
  const [ userInfo, setUserInfo ] = useState('');

  const currentStepConfigs = RECOVERY_TABS_CONFIGS[activeTabId];

  const onClose = () => {
    dispatch(closePopup(RECOVERY));
  };

  const changeTab = (nextTab) => {
    setActiveTabId(nextTab);
  };

  return (
    <Popup onClose={onClose} className={`${currentStepConfigs.class} active`}>
      <div className="popup__container">
        <div className="popup__header">
          <div className="popup__logo">
            <div className="img-container">
              <img className="popup__logo__img" src={logo} alt="logo" />
            </div>
          </div>
          <div className="popup__title">
            FORGOT YOUR PASSWORD
          </div>
          <button onClick={onClose} className="popup__close">
            <span className="img-container">
              <svg width="14" height="14">
                <use xlinkHref="#close-green" />
              </svg>
            </span>
          </button>
        </div>
        <div className="popup__block">
          <currentStepConfigs.Component
            changeTab={changeTab}
            userInfo={userInfo}
            setUserInfo={setUserInfo} />
        </div>
        <LicenceFooter />
      </div>
    </Popup>
  );
};

export default RecoveryPopup;
