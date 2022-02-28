import BetslipNav from './components/BetslipNav/BetslipNav';
import BetslipBonusHint from './components/BetslipBonusHint/BetslipBonusHint';
import BetslipBets from './components/BetslipBets/BetslipBets';
import BetslipFooter from './components/BetslipFooter/BetslipFooter';

const BetslipOpenedBlock = ({
  closeBetslip,
  isBetslipOpen,
}) => (
  <div className="bet-item__block">
    <BetslipNav isBetslipOpen={isBetslipOpen} closeBetslip={closeBetslip} />
    <div className="bet-item__column">
      <BetslipBonusHint />
      <BetslipBets />
      <BetslipFooter />
    </div>
  </div>
);

export default BetslipOpenedBlock;
