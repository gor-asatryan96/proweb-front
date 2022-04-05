import BetslipMyBets from '../components/BetslipMyBets/BetslipMyBets';
import BetslipMain from '../components/BetslipMain/BetslipMain';
import { BETSLIP_TABS } from '../constants/betslip.constants';

const { MY_BETS, BETSLIP } = BETSLIP_TABS;

export const BETSLIP_CONFIGS = {
  [BETSLIP]: {
    Component: BetslipMain,
  },
  [MY_BETS]: {
    Component: BetslipMyBets,
  },
};
