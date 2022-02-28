import GoBackHeader from '../../../../../components/GoBackHeader/GoBackHeader';
import { WITHDRAW_DEPOSIT_ITEMS } from '../../configs/withdrawDeposit.configs';
import WithdrawDepositMenuItem from '../WithdrawDepositMenuItem/WithdrawDepositMenuItem';

const tabs = Object.keys(WITHDRAW_DEPOSIT_ITEMS);

const WithdrawDepositMenu = ({ goBack, configs, setActiveItem }) => (
  <>
    <GoBackHeader
      title={configs.name}
      goBack={goBack}
      icon={configs.icon} />
    <div className="menu-inner">
      <ul className="withdraw__list">
        {tabs.map(tab => (
          <WithdrawDepositMenuItem setActiveItem={setActiveItem} key={tab} data={WITHDRAW_DEPOSIT_ITEMS[tab]} />
        ))}
      </ul>
    </div>
  </>
);

export default WithdrawDepositMenu;
