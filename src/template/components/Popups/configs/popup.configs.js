import CongratulationsPopup from '../CongratulationsPopup/CongratulationsPopup';
import { POPUPS_IDS } from '../constants/popups.constants';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import FavouritesPopup from '../FavouritesPopup/FavouritesPopup';
import GiftsPopup from '../GiftsPopup/GiftsPopup';
import InfoRulesPopup from '../InfoRulesPopup/InfoRulesPopup';
import LoginPopup from '../LoginPopup/LoginPopup';
import RecoveryPopup from '../RecoveryPopup/RecoveryPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import UserProfilePopup from '../UserProfilePopup/UserProfilePopup';

const {
  LOGIN, RECOVERY, REGISTER, FAVOURITES, USER_PROFILE, CONGRATULATIONS, ERROR, GIFTS, INFO_RULES,
} = POPUPS_IDS;

export const POPUPS_CONFIGS = {
  [LOGIN]: LoginPopup,
  [RECOVERY]: RecoveryPopup,
  [REGISTER]: RegisterPopup,
  [FAVOURITES]: FavouritesPopup,
  [USER_PROFILE]: UserProfilePopup,
  [CONGRATULATIONS]: CongratulationsPopup,
  [ERROR]: ErrorPopup,
  [GIFTS]: GiftsPopup,
  [INFO_RULES]: InfoRulesPopup,
};
