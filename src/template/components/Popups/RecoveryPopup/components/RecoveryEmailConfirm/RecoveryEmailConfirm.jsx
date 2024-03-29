import { useDispatch } from 'react-redux';
import { closePopup, openPopup } from '../../../../../../redux/reducers/popups/popups.slice';
import { Button } from '../../../../UI';
import { POPUPS_IDS } from '../../../constants/popups.constants';

const { RECOVERY, LOGIN } = POPUPS_IDS;

const RecoveryEmailConfirm = ({ userInfo }) => {
  const dispatch = useDispatch();

  const onContinueClick = () => {
    dispatch(closePopup(RECOVERY));
    dispatch(openPopup({ id: LOGIN }));
  };

  return (
    <div>
      <div className="popup-sent__caption">
        Please, go to the link
      </div>
      <div className="popup-sent__info">
        The link was sent to your
        <br />
        Emsil address.
        <br />
        <span>
          {userInfo}
        </span>
      </div>
      <div className="popup-forgot__submit">
        <Button onClick={onContinueClick}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default RecoveryEmailConfirm;
