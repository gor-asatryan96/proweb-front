import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Popup } from '../../UI';
import logo from '../../../assets/images/logo.svg';
import RecoveryEnterNumber from './components/RecoveryEnterNumber';
import RecoveryNewPassword from './components/RecoveryNewPassword';
import RecoverySuccessful from './components/RecoverySuccessful';
import RecoveryEmailConfirm from './components/RecoveryEmailConfirm';
import RecoveryPhoneCode from './components/RecoveryPhoneCode';
import RecoverySkip from './components/RecoverySkip';
import { closePopup } from '../../../../redux/slices/popups.slice';
import { POPUPS_IDS } from '../constants/popups.constants';

const recoveryStepsComponents = [
  RecoveryEnterNumber, RecoveryNewPassword, RecoverySuccessful, RecoveryEmailConfirm, RecoveryPhoneCode, RecoverySkip,
];
const recoveryClassnames = [ 'popup-recovery', 'popup-forgot', 'popup-reset', 'popup-sent', 'popup-confirm', 'popup-skip' ];

const RecoveryPopup = () => {
  const dispatch = useDispatch();

  const [ activeStep, setActiveStep ] = useState(0);

  const CurrentStepComponent = recoveryStepsComponents[activeStep];

  const onClose = () => {
    dispatch(closePopup(POPUPS_IDS.RECOVERY));
  };

  return (
    <Popup onClose={onClose} className={`${recoveryClassnames[activeStep]} active`}>
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
          <CurrentStepComponent setNextPage={() => setActiveStep(prev => prev + 1)} />
        </div>
        <div className="popup__footer">
          <div className="popup__info">
            <div className="popup__licence">
              licensed by:
            </div>
            <div className="popup__country">
              gaming board of tanzania
            </div>
          </div>
          <div className="popup__rule">
            <div className="popup__security">
              Security &
              <br />
              Responsibility
            </div>
            <div className="popup__rise">
              <div className="img-container">
                <svg width="29" height="29">
                  <use xlinkHref="#18-plus" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default RecoveryPopup;
