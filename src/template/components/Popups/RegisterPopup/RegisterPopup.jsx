import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Popup } from '../../UI';
import RegistersStepNumber from './components/RegistersStepNumber';
import RegisterStep1 from './components/RegisterStep1';
import logo from '../../../assets/images/logo.svg';
import RegisterStep2 from './components/RegisterStep2';
import RegisterStep3 from './components/RegisterStep3';
import { closePopup } from '../../../../redux/slices/popups.slice';
import { POPUPS_IDS } from '../constants/popups.constants';

const registerStepsComponents = [ RegisterStep1, RegisterStep2, RegisterStep3 ];
const registerClassnames = [ 'popup-create', 'popup-personal', 'popup-document' ];

const RegisterPopup = () => {
  const dispatch = useDispatch();

  const [ activeStep, setActiveStep ] = useState(0);

  const CurrentStepComponent = registerStepsComponents[activeStep];

  const toNextStep = (e) => {
    e.preventDefault();
    activeStep < 2 && setActiveStep(prev => prev + 1);
  };

  const onClose = () => {
    dispatch(closePopup(POPUPS_IDS.REGISTER));
  };

  return (
    <Popup onClose={onClose} className={`${registerClassnames[activeStep]} active`}>
      <div className="popup__container">
        <div className="popup__header">
          <div className="popup__logo">
            <div className="img-container">
              <img className="popup__logo__img" src={logo} alt="logo" />
            </div>
          </div>
          <div className="popup__title">
            CREATE YOUR ACCOUNT
          </div>
          <button onClick={onClose} className="popup__close">
            <span className="img-container">
              <svg width="14" height="14">
                <use xlinkHref="#close-green" />
              </svg>
            </span>
          </button>
          <div className="popup__step">
            <ol className="popup__step__list">
              {registerStepsComponents.map((_, i) => (
                <RegistersStepNumber active={i === activeStep} number={i + 1} />
              ))}
            </ol>
          </div>
        </div>
        <div className="popup__block">
          <form>
            <CurrentStepComponent setNextPage={() => setActiveStep(prev => prev + 1)} />
            <div className="popup__term">
              <div className="popup__term__info">
                by clicking button bellow, you agree to our
                <a className="popup__term__link" href="/">
                  termS & conditions
                </a>
                <a className="popup__term__link" href="/">
                  privacy policy
                </a>
                and
                <a className="popup__term__link" href="/">
                  cookies policy
                </a>
              </div>
              <div className="checkbox">
                <input className="checkbox__btn" type="checkbox" />
                <span className="checkbox__bg" />
                <span className="checkbox__round" />
              </div>
            </div>
            <div className="popup-create__accept">
              <button onClick={toNextStep} className="popup__btn">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </Popup>
  );
};

export default RegisterPopup;
