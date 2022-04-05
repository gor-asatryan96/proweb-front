import RecoveryPhoneCode from '../../RecoveryPopup/components/RecoveryPhoneCode/RecoveryPhoneCode';
import RegisterSkip from '../components/RegisterSkip/RegisterSkip';
import RegisterStep1 from '../components/RegisterStep1/RegisterStep1';
import RegisterStep2 from '../components/RegisterStep2/RegisterStep2';
import RegisterStep3 from '../components/RegisterStep3/RegisterStep3';
import RegisterSuccessful from '../components/RegisterSuccessful/RegisterSuccessful';
import { REGISTER_TABS_IDS } from '../constants/register.constants';

const {
  STEP_1, STEP_2, STEP_3, SKIP, CONFIRM, SUCCESSFUL,
} = REGISTER_TABS_IDS;

export const REGISTER_TABS_CONFIGS = {
  [STEP_1]: {
    Component: RegisterStep1,
    class: 'popup-create',
    title: 'CREATE YOUR ACCOUNT',
    step: '1',
  },
  [STEP_2]: {
    Component: RegisterStep2,
    class: 'popup-personal',
    title: 'FULL REGISTRATION',
    step: '2',
  },
  [STEP_3]: {
    Component: RegisterStep3,
    class: 'popup-document',
    title: 'FULL REGISTRATION',
    step: '3',
  },
  [SKIP]: {
    Component: RegisterSkip,
    class: 'popup-skip',
    title: '',
  },
  [CONFIRM]: {
    Component: RecoveryPhoneCode,
    class: 'popup-confirm',
    title: '',
  },
  [SUCCESSFUL]: {
    Component: RegisterSuccessful,
    class: 'popup-reset',
    title: '',
  },
};
