import { useState } from 'react';
import GiftInfo from './components/GiftInfo/GiftInfo';
import GiftsMenu from './components/GiftsMenu/GiftsMenu';

const Gifts = ({ goBack }) => {
  const [ activeGift, setActiveGift ] = useState(null);
  return (
    <>
      {
      activeGift
        ? <GiftInfo goBack={() => setActiveGift(null)} />
        : <GiftsMenu goBack={goBack} setActiveGift={setActiveGift} />
      }
    </>
  );
};

export default Gifts;
