import { DESTINATION_NAMES } from '../constants/destination.constants';
import { POPUPS_IDS } from '../constants/popups.constants';
import { RECOVERY_TABS_IDS } from '../RecoveryPopup/constants/recovery.constants';

const { RECOVERY_DESTINATION } = DESTINATION_NAMES;
const { RECOVERY } = POPUPS_IDS;

export const DESTINATION_CONFIGS = {
  [RECOVERY_DESTINATION]: { id: RECOVERY, tab: RECOVERY_TABS_IDS.NEW_PASSWORD },
};
