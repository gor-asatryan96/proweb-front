import React from 'react';
import { REGISTER_TABS_IDS } from '../../constants/register.constants';

const { STEP_2, CONFIRM } = REGISTER_TABS_IDS;

const RegisterSkip = ({ changeTab }) => (
  <>
    <div class="popup-skip__caption">
      Skip page
    </div>
    <div class="popup-skip__info">
      Lorem Ipsum is simply dummy text of the
      <br />
      printing and typesetting industry.
    </div>
    <div class="popup-skip__accept">
      <button onClick={() => changeTab(CONFIRM)} class="popup-skip__accept__btn popup__btn">
        Skip and Registration
      </button>
    </div>
    <div class="popup-skip__full">
      <div onClick={() => changeTab(STEP_2)} class="popup-skip__full__btn">
        Go to Full Registration
      </div>
    </div>
  </>
);

export default RegisterSkip;
