import React from 'react';
import { useDispatch } from 'react-redux';
import { closePopup } from '../../../../redux/reducers/popups/popups.slice';
import { Popup } from '../../UI';
import { POPUPS_IDS } from '../constants/popups.constants';

const ErrorPopup = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(closePopup(POPUPS_IDS.ERROR));
  };

  return <Popup onClose={onClose} className=' popup-gray popup-error active'>
    <div className="popup-gray__wrapper">
      <div className="popup-gray__inner">
        <button onClick={onClose} type="button" className="popup-gray__close-btn">
          <span className="img-container">
            <svg>
              <use xlinkHref="#menu-close" />
            </svg>
          </span>
        </button>
        <div className="popup-error__title">Error!</div>
        <div className="popup-error__desc">
          <div className="popup-error-alert-img-container">
            <div className="img-container ">
              <svg>
                <use xlinkHref="#error-red-x" />
              </svg>
            </div>
          </div>
          Lorem Ipsum Dolor Sit Amet, Consectetur
        </div>
        <div className="popup-gray__btn-container">
          <div onClick={onClose} className="popup-gray__btn popup-gray__btn-white">Ok</div>
        </div>
      </div>
    </div>
  </Popup>;
};

export default ErrorPopup;
