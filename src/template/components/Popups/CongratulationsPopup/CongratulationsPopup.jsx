import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closePopup } from '../../../../redux/slices/popups.slice';
import { Popup } from '../../UI';
import { POPUPS_IDS } from '../constants/popups.constants';
import CongratulationTakeStep from './components/CongratulationTakeStep/CongratulationTakeStep';
import CongratulationUseStep from './components/CongratulationUseStep/CongratulationUseStep';

const stepComponents = [ CongratulationTakeStep, CongratulationUseStep ];

const CongratulationsPopup = () => {
  const dispatch = useDispatch();
  const [ step, setStep ] = useState(0);

  const StepComponent = stepComponents[step];

  const onClose = () => {
    dispatch(closePopup(POPUPS_IDS.CONGRATULATIONS));
  };

  return <Popup onClose={onClose} className='popup-gray popup-winner active'>
    <div className="popup-gray__wrapper">
      <div className="popup-gray__inner popup-winner__inner">
        <button onClick={onClose} type="button" className="popup-gray__close-btn">
          <span className="img-container">
            <svg>
              <use xlinkHref="#menu-close" />
            </svg>
          </span>
        </button>
        <div className="popup-winner__title">Congratulations!</div>
        {<StepComponent nextStep={() => setStep(prev => prev + 1)} onClose={onClose} />}
      </div>
    </div>
  </Popup>;
};

export default CongratulationsPopup;
