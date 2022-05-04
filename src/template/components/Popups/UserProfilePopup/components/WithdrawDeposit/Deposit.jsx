import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MEDIA_QUERIES } from '../../../../../../constants/mediaQuery.constants';
import WithdrawDepositMenu from './components/WithdrawDepositMenu/WithdrawDepositMenu';
import { DEPOSIT_MOBILE_COMPONENTS, DEPOSIT_DESKTOP_COMPONENTS, WITHDRAW_DEPOSIT_ITEMS } from './configs/withdrawDeposit.configs';

const depositKeys = Object.keys(WITHDRAW_DEPOSIT_ITEMS);

const Deposit = ({ goBack, configs }) => {
  const [ activeItem, setActiveItem ] = useState(null);

  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  const ActiveMobileComponent = DEPOSIT_MOBILE_COMPONENTS[activeItem?.type];

  const removeActiveItem = () => setActiveItem(null);

  return (
    <>
      {isDesktop && <div className="withdraw__deposit-body">
        <WithdrawDepositMenu isDesktop />
        <div className="withdraw__deposit-list">
          {depositKeys.map((item) => {
            const config = WITHDRAW_DEPOSIT_ITEMS[item];
            const Component = DEPOSIT_DESKTOP_COMPONENTS[config.type];
            return <Component key={item} data={config} isDesktop />;
          })}
        </div>
      </div>}
      {!isDesktop && (
        !activeItem
          ? <WithdrawDepositMenu setActiveItem={setActiveItem} goBack={goBack} configs={configs} isDesktop={isDesktop} />
          : <ActiveMobileComponent onClose={removeActiveItem} data={activeItem} isDeposit />
      )
      }
    </>
  );
};

export default Deposit;
