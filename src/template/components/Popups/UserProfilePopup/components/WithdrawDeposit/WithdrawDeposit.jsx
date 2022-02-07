import { useState } from 'react';
import { USER_PROFILE_TABS_NAMES } from '../../constants/userProfile.constants';
import DepositPopup from './components/DepositPopup/DepositPopup';
import WithdrawDepositBanks from './components/WithdrawDepositBanks/WithdrawDepositBanks';
import WithdrawDepositMenu from './components/WithdrawDepositMenu/WithdrawDepositMenu';
import WithdrawOperator from './components/WithdrawOperator/WithdrawOperator';
import { WITHDRAW_DEPOSIT_TYPES } from './constants/withdrawDepostir.constants';

const { DEPOSIT } = USER_PROFILE_TABS_NAMES;
const { OPERATOR_TYPE, PMBET_TYPE, BANKS_TYPE } = WITHDRAW_DEPOSIT_TYPES;

const WithdrawDeposit = ({ goBack, configs }) => {
  const isDeposit = configs.name === DEPOSIT;
  const [ activeItem, setActiveItem ] = useState(null);

  const removeActiveItem = () => setActiveItem(null);

  return (
    <>
      {!activeItem
        ? <WithdrawDepositMenu setActiveItem={setActiveItem} goBack={goBack} configs={configs} />
        : <>
          {!isDeposit && activeItem.type === OPERATOR_TYPE && <WithdrawOperator data={activeItem} goBack={removeActiveItem} />}
          {isDeposit && [ OPERATOR_TYPE, PMBET_TYPE ].includes(activeItem.type)
          && <DepositPopup onClose={removeActiveItem} data={activeItem} />}
          {!isDeposit && activeItem.type === PMBET_TYPE && <WithdrawOperator data={activeItem} goBack={removeActiveItem} />}
          {activeItem.type === BANKS_TYPE && <WithdrawDepositBanks data={activeItem} goBack={removeActiveItem} isDeposit={isDeposit} />}
          {}
        </>
      }
    </>
  );
};

export default WithdrawDeposit;
