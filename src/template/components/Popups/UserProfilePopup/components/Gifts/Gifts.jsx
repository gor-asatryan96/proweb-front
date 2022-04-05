import { useState } from 'react';
import GiftInfo from './components/GiftInfo/GiftInfo';
import GiftsMenu from './components/GiftsMenu/GiftsMenu';
import GiftsHeader from './components/GiftsHeader/GiftsHeader';

const Gifts = ({ goBack, configs }) => {
  const [ activeGift, setActiveGift ] = useState(null);
  return (
    <>
      {(!activeGift || configs.isDesktop) && <GiftsHeader goBack={goBack} isDesktop={configs.isDesktop} />}
      <div className="userMenuConfig__body">
        {configs.isDesktop
          ? <>
            <GiftsMenu isDesktop goBack={goBack} setActiveGift={setActiveGift} />
            <GiftInfo isDesktop goBack={() => setActiveGift(null)} />
          </>
          : <>
            {activeGift
              ? <GiftInfo goBack={() => setActiveGift(null)} />
              : <GiftsMenu goBack={goBack} setActiveGift={setActiveGift} />
              }
          </>
        }
      </div>
    </>
  );
};

export default Gifts;
