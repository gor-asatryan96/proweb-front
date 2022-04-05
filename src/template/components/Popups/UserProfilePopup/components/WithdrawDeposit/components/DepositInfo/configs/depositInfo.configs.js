import { WITHDRAW_DEPOSIT_TYPES } from '../../../constants/withdrawDepostir.constants';
import DepositOperator from '../../DepositOperator/DepositOperator';
import DepositPMbet from '../components/DepositPMbet/DepositPMbet';

const { OPERATOR_TYPE, PMBET_TYPE } = WITHDRAW_DEPOSIT_TYPES;

export const DEPOSIT_INFO_COMPONENTS = {
  [OPERATOR_TYPE]: DepositOperator,
  [PMBET_TYPE]: DepositPMbet,
};
