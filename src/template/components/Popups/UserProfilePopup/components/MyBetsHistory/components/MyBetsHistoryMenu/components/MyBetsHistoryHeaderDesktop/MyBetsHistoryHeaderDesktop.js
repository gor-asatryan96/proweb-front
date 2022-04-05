import { useForm } from 'react-hook-form';
import React from 'react';
import { BET_TYPE, PERIOD, STATUS } from '../../constants/myBetsHistoryMenu.constants';

const MyBetsHistoryHeaderDesktop = () => {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('MyProfileInfo', data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="popup-profile__filter">
          <div className="popup-profile__filter-row">
            <div className="popup-profile__filter-column popup-profile__filter-column--id">
              <label className="popup-profile__filter-label">
                <span className="popup-profile__filter-name">
                  Bet ID
                </span>
                <input className="popup-profile__filter-input" type="text" />
              </label>
            </div>
            <div className="popup-profile__filter-column">
              <label className="popup-profile__filter-label">
                <span className="popup-profile__filter-name">
                  Bet type
                </span>
                <select className="popup-profile__filter-select" name="">
                  <option className="popup-profile__filter-option" value="">
                    All
                  </option>
                  <option className="popup-profile__filter-option" value="">
                    Single
                  </option>
                  <option className="popup-profile__filter-option" value="">
                    Multiple
                  </option>
                  <option className="popup-profile__filter-option" value="">
                    System
                  </option>
                </select>
              </label>
            </div>
            <div className="popup-profile__filter-column">
              <label className="popup-profile__filter-label">
                <span className="popup-profile__filter-name">
                  Status
                </span>
                <select className="popup-profile__filter-select" name="">
                  <option className="popup-profile__filter-option" value="">
                    Bet history
                  </option>
                  <option className="popup-profile__filter-option" value="">
                    Open bets
                  </option>
                  <option className="popup-profile__filter-option" value="">
                    Cashed out
                  </option>
                  <option className="popup-profile__filter-option" value="">
                    Won
                  </option>
                  <option className="popup-profile__filter-option" value="">
                    Last
                  </option>
                  <option className="popup-profile__filter-option" value="">
                    Returned
                  </option>
                  <option className="popup-profile__filter-option" value="">
                    Gifted bets
                  </option>
                  <option className="popup-profile__filter-option" value="">
                    Received gifts
                  </option>
                </select>
              </label>
            </div>
            <div className="popup-profile__filter-column">
              <label className="popup-profile__filter-label">
                <span className="popup-profile__filter-name">
                  Period
                </span>
                <select className="popup-profile__filter-select" name="">
                  <option className="popup-profile__filter-option" value="">
                    All
                  </option>
                  <option className="popup-profile__filter-option" value="">
                    1 hrs
                  </option>
                  <option className="popup-profile__filter-option" value="">
                    3 hrs
                  </option>
                  <option className="popup-profile__filter-option" value="">
                    5 hrs
                  </option>
                  <option className="popup-profile__filter-option" value="">
                    8 hrs
                  </option>
                  <option className="popup-profile__filter-option" value="">
                    12 hrs
                  </option>
                  <option className="popup-profile__filter-option" value="">
                    24 hrs
                  </option>
                  <option className="popup-profile__filter-option" value="">
                    48 hrs
                  </option>
                </select>
              </label>
            </div>
            <div className="popup-profile__filter-column">
              <label className="popup-profile__filter-label">
                <span className="popup-profile__filter-name">
                  From
                </span>
                <input className="popup-profile__filter-input" type="date" />
              </label>
            </div>
            <div className="popup-profile__filter-column">
              <label className="popup-profile__filter-label">
                <span className="popup-profile__filter-name">
                  To
                </span>
                <input className="popup-profile__filter-input" type="date" />
              </label>
            </div>
            <div className="popup-profile__filter-column popup-profile__filter-column--accept">
              <button className="popup-profile__filter-btn popup-profile__filter-btn--ok">
                ok
              </button>
              <button className="popup-profile__filter-btn popup-profile__filter-btn--reset">
                RESET
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default MyBetsHistoryHeaderDesktop;
