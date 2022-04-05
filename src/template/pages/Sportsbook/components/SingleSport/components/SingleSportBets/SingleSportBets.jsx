import { useState } from 'react';
import BetCell from '../BetCell/BetCell';
import BetDropdown from '../BetDropdown/BetDropdown';
import BetRow from '../BetRow/BetRow';

const BETS_LIST = [
  {
    id: 1,
    name: 'Match Result',
    bets: [
      {
        id: 'bet_1',
        odds: [
          { id: 'odd_1', title: '1', coefficient: 2.50 },
          { id: 'odd_2', title: 'x', coefficient: 2.95 },
          { id: 'odd_3', title: '2', coefficient: 3.05 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Double Chance',
    bets: [
      {
        id: 'bet_1',
        odds: [
          { id: 'odd_1', title: '1X', coefficient: 1.60 },
          { id: 'odd_2', title: '12', coefficient: 1.45 },
          { id: 'odd_3', title: 'X2', coefficient: 1.7 },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Handicape',
    bets: [
      {
        id: 'bet_1',
        odds: [
          { id: 'odd_1', title: 'Valencia (-0.5)', coefficient: 1.60 },
          { id: 'odd_2', title: 'Osasuna (+0.5)', coefficient: 2.40 },
        ],
      },
      {
        id: 'bet_2',
        odds: [
          { id: 'odd_1', title: 'Valencia (-1.5)', coefficient: 1.85 },
          { id: 'odd_2', title: 'Osasuna (+1.5)', coefficient: 1.85 },
        ],
      },
      {
        id: 'bet_3',
        odds: [
          { id: 'odd_1', title: 'Valencia (-2.5)', coefficient: 2.40 },
          { id: 'odd_2', title: 'Osasuna (+2.5)', coefficient: 1.60 },
        ],
      },
      {
        id: 'bet_4',
        odds: [
          { id: 'odd_1', title: 'Valencia (-3.5)', coefficient: 4.00 },
          { id: 'odd_2', title: 'Osasuna (+3.5)', coefficient: 1.20 },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Total',
    bets: [
      {
        id: 'bet_1',
        odds: [
          { id: 'odd_1', title: 'Over 1.5', coefficient: 1.60 },
          { id: 'odd_2', title: 'Under 1.5', coefficient: 2.40 },
        ],
      },
      {
        id: 'bet_2',
        odds: [
          { id: 'odd_1', title: 'Over 2.5', coefficient: 1.85 },
          { id: 'odd_2', title: 'Under 1.5', coefficient: 1.85 },
        ],
      },
      {
        id: 'bet_3',
        odds: [
          { id: 'odd_1', title: 'Over 3.5', coefficient: 2.40 },
          { id: 'odd_2', title: 'Under 1.5', coefficient: 1.60 },
        ],
      },
      {
        id: 'bet_4',
        odds: [
          { id: 'odd_1', title: 'Over 4.5', coefficient: 4.00 },
          { id: 'odd_2', title: 'Under 1.5', coefficient: 1.20 },
        ],
      },
    ],
  },
];

const SingleSportBets = () => {
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
        {BETS_LIST.map(item => (
          <BetDropdown
            key={item.id}
            title={item.name}
            active={!closeDropdowns.includes(item.id)}
            toggle={() => toggleDropdown(item.id)}
            >
            {item.bets.map(bet => (
              <BetRow key={bet.id}>
                {bet.odds.map(odd => (
                  <BetCell
                    key={odd.id}
                    isDouble={bet.odds.length === 2}
                    title={odd.title}
                    coefficient={odd.coefficient} />
                ))}
              </BetRow>
            ))}
          </BetDropdown>
        ))}
      </ul>
    </div>
  );
};

export default SingleSportBets;
