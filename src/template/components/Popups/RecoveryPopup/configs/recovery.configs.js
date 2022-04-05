import RecoveryStart from '../components/RecoveryStart/RecoveryStart';
import RecoveryNewPassword from '../components/RecoveryNewPassword/RecoveryNewPassword';
import RecoverySuccessful from '../components/RecoverySuccessful/RecoverySuccessful';
import RecoveryPhoneCode from '../components/RecoveryPhoneCode/RecoveryPhoneCode';
import RecoveryEmailConfirm from '../components/RecoveryEmailConfirm/RecoveryEmailConfirm';
import { RECOVERY_TABS_IDS } from '../constants/recovery.constants';

const {
  START, NEW_PASSWORD, EMAIL, PHONE, SUCCESSFUL,
} = RECOVERY_TABS_IDS;

export const RECOVERY_TABS_CONFIGS = {
  [START]: {
    Component: RecoveryStart,
    class: 'popup-recovery',
  },
  [NEW_PASSWORD]: {
    Component: RecoveryNewPassword,
    class: 'popup-forgot',
  },
  [EMAIL]: {
    Component: RecoveryEmailConfirm,
    class: 'popup-sent',
  },
  [PHONE]: {
    Component: RecoveryPhoneCode,
    class: 'popup-confirm',
  },
  [SUCCESSFUL]: {
    Component: RecoverySuccessful,
    class: 'popup-reset',
  },
};
