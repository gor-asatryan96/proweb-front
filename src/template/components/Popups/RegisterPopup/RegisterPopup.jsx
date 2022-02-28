import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Popup } from '../../UI';
import RegistersStepNumber from './components/RegisterStepNumber/RegistersStepNumber';
import logo from '../../../assets/images/logo.svg';
import { closePopup } from '../../../../redux/slices/popups.slice';
import { POPUPS_IDS } from '../constants/popups.constants';
import { REGISTER_TABS_IDS } from './constants/register.constants';
import LicenceFooter from '../components/LicenceFooter/LicenceFooter';
import { REGISTER_TABS_CONFIGS } from './configs/register.configs';

const { STEP_1, SKIP, CONFIRM } = REGISTER_TABS_IDS;

const stepComponentConfigs = Object.values(REGISTER_TABS_CONFIGS).filter(tab => tab.step);

const RegisterPopup = () => {
  const dispatch = useDispatch();

  const [ activeTab, setActiveTab ] = useState(STEP_1);
  const [ isTermsAccepted, setIsTermsAccepted ] = useState(false);
  const [ submitForm, setSubmitForm ] = useState({});

  const currentStepConfigs = REGISTER_TABS_CONFIGS[activeTab];

  const changeTab = (nextTab, formData) => {
    if (formData) {
      setSubmitForm(prev => ({ ...prev, ...formData }));
    }
    setActiveTab(nextTab);
  };

  const onClose = () => {
    dispatch(closePopup(POPUPS_IDS.REGISTER));
  };

  const onRegister = (currentForm) => {
    const fullForm = { ...currentForm, ...submitForm };
    console.log('fullForm', fullForm);
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
            {currentStepConfigs.title}
          </div>
          <button onClick={onClose} className="popup__close">
            <span className="img-container">
              <svg width="14" height="14">
                <use xlinkHref="#close-green" />
              </svg>
            </span>
          </button>
          {REGISTER_TABS_CONFIGS[activeTab].step && <div className="popup__step">
            <ol className="popup__step__list">
              {stepComponentConfigs.map(item => (
                <RegistersStepNumber
                  key={item.step}
                  active={item.step === REGISTER_TABS_CONFIGS[activeTab].step}
                  step={item.step} />
              ))}
            </ol>
          </div>}
        </div>
        <div className="popup__block">
          <currentStepConfigs.Component
            isRegister
            isTermsAccepted={isTermsAccepted}
            setIsTermsAccepted={setIsTermsAccepted}
            setSubmitForm={setSubmitForm}
            onRegister={onRegister}
            changeTab={changeTab} />
        </div>
        {[ SKIP, CONFIRM ].includes(activeTab) && <LicenceFooter />}
      </div>
    </Popup>
  );
};

export default RegisterPopup;
