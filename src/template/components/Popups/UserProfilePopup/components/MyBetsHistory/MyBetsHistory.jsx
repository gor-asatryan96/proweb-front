import { useState } from 'react';
import MyBetsHistoryItemInfo from './components/MyBetsHistoryItemInfo/MyBetsHistoryItemInfo';
import MyBetsHistoryMenu from './components/MyBetsHistoryMenu/MyBetsHistoryMenu';

const MyBetsHistory = ({ goBack, configs }) => {
  const [ activeHistory, setActiveHistory ] = useState(null);

  return (
    <>
      {
        configs.isDesktop && <>
          <MyBetsHistoryMenu configs={configs} goBack={goBack} setActiveHistory={setActiveHistory} />
        </>
       }
      {
        !configs.isDesktop && (activeHistory
          ? <MyBetsHistoryItemInfo goBack={() => setActiveHistory(null)} />
          : <MyBetsHistoryMenu configs={configs} goBack={goBack} setActiveHistory={setActiveHistory} />)
      }
    </>
  );
};

export default MyBetsHistory;
