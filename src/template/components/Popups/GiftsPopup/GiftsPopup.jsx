import React from 'react';
import { useDispatch } from 'react-redux';
import { closePopup, openPopup } from '../../../../redux/slices/popups.slice';
import { GIFTS_ICONS } from '../../../assets/images/gift';
import { Popup } from '../../UI';
import { POPUPS_IDS } from '../constants/popups.constants';
import { USER_PROFILE_TABS_NAMES } from '../UserProfilePopup/constants/userProfile.constants';

const giftsIcons = Object.values(GIFTS_ICONS).slice(0, 6);

const { GIFTS, USER_PROFILE } = POPUPS_IDS;

const GiftsPopup = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(closePopup(GIFTS));
  };

  const onTakeClick = () => {
    onClose();
    dispatch(openPopup({ id: USER_PROFILE, tab: USER_PROFILE_TABS_NAMES.GIFTS }));
  };

  return <Popup onClose={onClose} className='gift__popup active'>
    <div className="gift__popup-out">
      <button onClick={onClose} type="button" className="gift__popup-close-btn">
        <span className="img-container">
          <svg className="icon">
            <use xlinkHref="#menu-close" />
          </svg>
        </span>
      </button>
      <div className="gift__popup-inner">
        <div className="gift__popup-header">
          <div className="gift__popup-title">Congratulations!</div>
          <div className="gift__popup-sub">Lorem Ipsum Is Simply Dummy Text Of The
            Printing And Typese When An </div>
          <div className="gift__popup-icon-out">
            {giftsIcons.map(item => (
              <div className="gift__popup-icon-in">
                <div className="img-container">
                  <img src={item} alt="" />
                </div>
              </div>
            ))}
          </div>
          <div onClick={onTakeClick} className="gift__popup-btn">Take gifts</div>
        </div>
      </div>
      <div className="gift__popup-bg-block" />
    </div>
  </Popup>;
};

export default GiftsPopup;
