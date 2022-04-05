import { useDispatch } from 'react-redux';
import { closePopup, openPopup } from '../../../../../../redux/slices/popups.slice';
import { POPUPS_IDS } from '../../../constants/popups.constants';

const { RECOVERY, LOGIN } = POPUPS_IDS;

const RecoverySuccessful = () => {
  const dispatch = useDispatch();

  const onContinueClick = () => {
    dispatch(openPopup({ id: LOGIN }));
    dispatch(closePopup(RECOVERY));
  };

  return (
    <form action="">
      <div className="popup-reset__caption">
        Password reset successful
      </div>
      <div className="popup-reset__info">
        You have successful reset
        <br />
        your password.
        <br />
        Please use your new password when
        <br />
        logging in
      </div>
      <div className="popup-forgot__submit">
        <button onClick={onContinueClick} className="popup__btn">
          Continue
        </button>
      </div>
    </form>
  );
};

export default RecoverySuccessful;
