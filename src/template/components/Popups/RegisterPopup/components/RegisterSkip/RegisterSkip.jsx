import React from 'react';
import { Button } from '../../../../UI';
import { REGISTER_TABS_IDS } from '../../constants/register.constants';

const { STEP_2, CONFIRM } = REGISTER_TABS_IDS;

const RegisterSkip = ({ changeTab }) => (
  <>
    <div className="popup-skip__caption">
      Skip page
    </div>
    <div className="popup-skip__info">
      Lorem Ipsum is simply dummy text of the
      <br />
      printing and typesetting industry.
    </div>
    <div className="popup-skip__accept">
      <Button onClick={() => changeTab(CONFIRM)} className='popup-skip__accept__btn'>
        Skip and Registration
      </Button>
    </div>
    <div className="popup-skip__full">
      <div onClick={() => changeTab(STEP_2)} className="popup-skip__full__btn">
        Go to Full Registration
      </div>
    </div>
  </>
);

export default RegisterSkip;
