import React from 'react';
import { useDispatch } from 'react-redux';
import { closePopup, openPopup } from '../../../../../../redux/slices/popups.slice';
import { Button } from '../../../../UI';
import { POPUPS_IDS } from '../../../constants/popups.constants';

const { REGISTER, LOGIN } = POPUPS_IDS;

const RegisterSuccessful = () => {
  const dispatch = useDispatch();

  const onContinueClick = () => {
    dispatch(openPopup({ id: LOGIN }));
    dispatch(closePopup(REGISTER));
  };

  return (
    <>
      <div className="popup-reset__caption">
        Register successful
      </div>
      <div className="popup-reset__info">
        You have successful Register
      </div>
      <div className="popup-forgot__submit">
        <Button onClick={onContinueClick}>
          Continue
        </Button>
      </div>
    </>
  );
};

export default RegisterSuccessful;
