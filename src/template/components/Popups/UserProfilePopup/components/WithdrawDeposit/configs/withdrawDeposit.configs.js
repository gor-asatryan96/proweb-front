import { COMPANY_LOGOS } from '../../../../../../assets/images/company-logo';
import { OPERATORS_LOGOS } from '../../../../../../assets/images/operators';
import { COMPANIES_NAMES } from '../../../../../../constants/companies.constants';
import { OPERATORS_NAMES } from '../../../../../../constants/operators.constants';
import { WITHDRAW_DEPOSIT_TYPES } from '../constants/withdrawDepostir.constants';

const {
  AIRTEL, HALOPESA, TIGOPESA, VODAFONE,
} = OPERATORS_NAMES;
const { PM_BET, VISA_MASTER } = COMPANIES_NAMES;

const { OPERATOR_TYPE, PMBET_TYPE, BANKS_TYPE } = WITHDRAW_DEPOSIT_TYPES;

export const WITHDRAW_DEPOSIT_ITEMS = {
  [VODAFONE]: {
    name: VODAFONE, image: OPERATORS_LOGOS[VODAFONE], class: 'withdraw__img_voda', type: OPERATOR_TYPE,
  },
  [HALOPESA]: {
    name: HALOPESA, image: OPERATORS_LOGOS[HALOPESA], class: 'withdraw__img_hola', type: OPERATOR_TYPE,
  },
  [AIRTEL]: {
    name: AIRTEL, image: OPERATORS_LOGOS[AIRTEL], class: 'withdraw__img_air', type: OPERATOR_TYPE,
  },
  [TIGOPESA]: {
    name: TIGOPESA, image: OPERATORS_LOGOS[TIGOPESA], class: 'withdraw__img_tigo', type: OPERATOR_TYPE,
  },
  [PM_BET]: {
    name: PM_BET, image: COMPANY_LOGOS[PM_BET], class: 'withdraw__img_pm', type: PMBET_TYPE,
  },
  banks: {
    name: 'My banks accounts', image: COMPANY_LOGOS[VISA_MASTER], class: 'withdraw__img_visa', type: BANKS_TYPE,
  },
};
