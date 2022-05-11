import { useState } from 'react';
import BetCell from '../BetCell/BetCell';
import BetDropdown from '../BetDropdown/BetDropdown';
import BetRow from '../BetRow/BetRow';

const SinglePrematchBets = ({ collections }) => {
  const [ closeDropdowns, setCloseDropdowns ] = useState([]);

  const toggleDropdown = (id) => {
    setCloseDropdowns(
      prev => (prev.includes(id)
        ? prev.filter(el => el !== id)
        : [ ...prev, id ]),
    );
  };

  return (
    <div className="bet-ratio">
      <ul className="bet-ratio__extra">
        {collections[0].markets.map(market => (
          <BetDropdown
            key={market.marketId}
            title={market.marketName}
            active={!closeDropdowns.includes(market.marketId)}
            toggle={() => toggleDropdown(market.marketId)}
            >
            {/* {market.prices.map(bet => ( */}
            <BetRow>
              {market.prices.map(odd => (
                <BetCell
                  key={odd.referenceId}
                  isDouble={market.orderColumnsCount === 2}
                  name={odd.priceName}
                  coefficient={odd.rate} />
              ))}
            </BetRow>
            {/* ))} */}
          </BetDropdown>
        ))}
      </ul>
    </div>
  );
};

export default SinglePrematchBets;
