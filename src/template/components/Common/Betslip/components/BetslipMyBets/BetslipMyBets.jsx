import React, { useState } from 'react';
import BetslipMyBetsItem from './components/BetslipMyBetsItem/BetslipMyBetsItem';
import Advertising from '../../../Advertising/Advertising';

const BetslipMyBets = () => {
  const [ activeBet, setActiveBet ] = useState(0);

  return (
    <>
      <ul className="mybets__list">
        {Array(8).fill(null).map((_, i) => (
          <BetslipMyBetsItem
            key={i}
            isActive={i === activeBet}
            toggle={() => setActiveBet(i)}
            data={i} />
        ))}
      </ul>
    </>
  );
};

export default BetslipMyBets;
