import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import WithdrawDepositMenu from './components/WithdrawDepositMenu/WithdrawDepositMenu';
import { WITHDRAW_COMPONENTS, WITHDRAW_DEPOSIT_ITEMS } from './configs/withdrawDeposit.configs';

const withdrawDepositKeys = Object.keys(WITHDRAW_DEPOSIT_ITEMS);

const Withdraw = ({ goBack, configs }) => {
  const [ activeItem, setActiveItem ] = useState(null);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  const ActiveComponent = WITHDRAW_COMPONENTS[activeItem?.type];

  const removeActiveItem = () => setActiveItem(null);

  return (
    <>
      {isDesktop && <div className="withdraw__deposit-body">
        <WithdrawDepositMenu isDesktop />
        <div className="withdraw__deposit-list">
          {withdrawDepositKeys.map((item) => {
            const config = WITHDRAW_DEPOSIT_ITEMS[item];
            const Component = WITHDRAW_COMPONENTS[config.type];
            return <Component key={item} data={config} isDesktop />;
          })}
        </div>
      </div>}
      {!isDesktop && (
        !activeItem
          ? <WithdrawDepositMenu setActiveItem={setActiveItem} goBack={goBack} configs={configs} />
          : <ActiveComponent data={activeItem} goBack={removeActiveItem} />
      )
      }
    </>
  );
};

export default Withdraw;
