import BetslipNav from './components/BetslipNav/BetslipNav';
import BetslipBonusHint from './components/BetslipBonusHint/BetslipBonusHint';
import BetslipBets from './components/BetslipBets/BetslipBets';
import BetslipFooter from './components/BetslipFooter/BetslipFooter';

const BetslipMain = ({
  closeBetslip,
  isBetslipOpen,
}) => (
  <>
    <BetslipNav isBetslipOpen={isBetslipOpen} closeBetslip={closeBetslip} />
    <div className="bet-item__column">
      <BetslipBonusHint />
      <BetslipBets />
      <BetslipFooter />
    </div>
  </>
);

export default BetslipMain;
