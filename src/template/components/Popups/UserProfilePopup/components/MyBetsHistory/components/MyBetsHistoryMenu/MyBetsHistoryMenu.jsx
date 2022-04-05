import { useState } from 'react';
import GoBackHeader from '../../../../../components/GoBackHeader/GoBackHeader';
import MyBetsHistoryHeaderDesktop from './components/MyBetsHistoryHeaderDesktop/MyBetsHistoryHeaderDesktop';
import MyBetsHistoryHeaderMobile from './components/MyBetsHistoryHeaderMobile/MyBetsHistoryHeaderMobile';
import BetHistoryList from '../BetHistoryList/BetHistoryList';

const items = [
  {
    id: '123', type: 'Single', amount: '5000', status: 'Lost', odd: '1.5', winAmount: '0', date: new Date(),
  },
  {
    id: '124', type: 'Single', amount: '5000', status: 'Won', odd: '1.5', winAmount: '1500', date: new Date(),
  },
  {
    id: '125', type: 'Single', amount: '5000', status: 'Lost', odd: '1.5', winAmount: '0', date: new Date(),
  },
  {
    id: '126', type: 'Single', amount: '5000', status: 'Lost', odd: '1.5', winAmount: '0', date: new Date(),
  },
  {
    id: '127', type: 'Single', amount: '5000', status: 'Win', odd: '1.5', winAmount: '4800', date: new Date(),
  },
  {
    id: '128', type: 'Single', amount: '5000', status: 'Win', odd: '1.5', winAmount: '11500', date: new Date(),
  },
];

const MyBetsHistoryMenu = ({
  goBack, configs, setActiveHistory,
}) => {
  const [ isFiltersActive, setIsFiltersActive ] = useState(false);

  return (
    <>
      {
        !configs.isDesktop && <>
          <GoBackHeader
            title={configs.name}
            goBack={goBack}
            icon={configs.icon} />
        </>
      }
      <div className="menu-inner">
        {
          !configs.isDesktop && <MyBetsHistoryHeaderMobile isFiltersActive={isFiltersActive} setIsFiltersActive={setIsFiltersActive} />
        }
        {
          configs.isDesktop && <MyBetsHistoryHeaderDesktop />
        }
        {
        items.length
          ? <BetHistoryList bets={items} setActiveHistory={setActiveHistory} />
          : <div className="transaction__none">
            <span className="transaction__none-text">No bets to show</span>
          </div>
      }

      </div>
    </>
  );
};

export default MyBetsHistoryMenu;
