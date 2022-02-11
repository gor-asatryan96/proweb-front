import React, { useState } from 'react';

import Betslip from '../../../components/Common/Betslip/Betslip';
import SportFilters from '../components/SportFilters/SportFilters';
import SportHeader from '../components/SportHeader/SportHeader';
import SportCard from '../components/SportCard/SportCard';
import SportMenu from '../components/SportMenu/SportMenu';
import { SPORT_TABS } from '../constants/sport.constants';

const sportItems = [
  {
    id: 1,
    leauge: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      { id: 1, type: '1', coefficient: '1.2' },
      { id: 2, type: 'x', coefficient: '4.2' },
      { id: 3, type: '2', coefficient: '8' },
    ],
  },
  {
    id: 2,
    leauge: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 1, type: '1', coefficient: '1.2', burn: true,
      },
      { id: 2, type: 'x', coefficient: '4.2' },
      { id: 3, type: '2', coefficient: '8' },
    ],
  },
  {
    id: 3,
    leauge: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      { id: 1, type: '1', coefficient: '1.2' },
      { id: 2, type: 'x', coefficient: '4.2' },
      { id: 3, type: '2', coefficient: '8' },
    ],
  },
  {
    id: 4,
    leauge: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      { id: 1, type: '1', coefficient: '1.2' },
      { id: 2, type: 'x', coefficient: '4.2' },
      {
        id: 3, type: '2', coefficient: '8', burn: true,
      },
    ],
  },
  {
    id: 5,
    leauge: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 1, type: '1', coefficient: '1.2', burn: true,
      },
      { id: 2, type: 'x', coefficient: '4.2' },
      { id: 3, type: '2', coefficient: '8' },
    ],
  },
  {
    id: 6,
    leauge: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      { id: 1, type: '1', coefficient: '1.2' },
      {
        id: 2, type: 'x', coefficient: '4.2', burn: true,
      },
      { id: 3, type: '2', coefficient: '8' },
    ],
  },
  {
    id: 7,
    leauge: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 1, type: '1', coefficient: '1.2', burn: true,
      },
      { id: 2, type: 'x', coefficient: '4.2' },
      { id: 3, type: '2', coefficient: '8' },
    ],
  },
  {
    id: 8,
    leauge: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      { id: 1, type: '1', coefficient: '1.2' },
      { id: 2, type: 'x', coefficient: '4.2' },
      { id: 3, type: '2', coefficient: '8' },
    ],
  },
  {
    id: 9,
    leauge: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      { id: 1, type: '1', coefficient: '1.2' },
      { id: 2, type: 'x', coefficient: '4.2' },
      { id: 3, type: '2', coefficient: '8' },
    ],
  },
  {
    id: 10,
    leauge: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      { id: 1, type: '1', coefficient: '1.2' },
      {
        id: 2, type: 'x', coefficient: '4.2', burn: true,
      },
      { id: 3, type: '2', coefficient: '8' },
    ],
  },
  {
    id: 11,
    leauge: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      { id: 1, type: '1', coefficient: '1.2' },
      { id: 2, type: 'x', coefficient: '4.2' },
      { id: 3, type: '2', coefficient: '8' },
    ],
  },
  {
    id: 12,
    leauge: 'Europe / UEFA Euro CUP Cualification',
    firstTeam: 'Napoli',
    secondTeam: 'Atalanta',
    oddsCount: '+367',
    date: new Date(),
    bets: [
      {
        id: 1, type: '1', coefficient: '1.2', burn: true,
      },
      { id: 2, type: 'x', coefficient: '4.2' },
      { id: 3, type: '2', coefficient: '8' },
    ],
  },
];

const Sport = () => {
  const [ isFilterOpen, setIsFilterOpen ] = useState(false);
  const [ activeTab, setActiveTab ] = useState(SPORT_TABS.TOPS);
  return (<>
    <SportMenu />
    <section className="bet">
      <div className="container bet__container">
        <div className="bet-filter__block">
          <SportHeader
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
            activeTab={activeTab}
            setActiveTab={setActiveTab} />
          {isFilterOpen && <SportFilters />}
        </div>
        <div className="bet-rate">
          <ul className="bet-rate__list">
            {sportItems.map(sport => (
              <SportCard key={sport.id} data={sport} />
            ))}
          </ul>
        </div>
        <div className="bet-search">
          <div className="bet-search__value">
            <label className="bet-search__label">
              <input className="bet-search__input" type="text" placeholder="Search" />
              <button className="bet-search__del">
                <span className="img-container">
                  <svg width="18.63px" height="18.63">
                    <use xlinkHref="#close-icon-2" />
                  </svg>
                </span>
              </button>
            </label>
          </div>
          {/* <!-- TODO: add className active when show result--> */}
          <div className="bet-search__result active">
            <div className="bet-search__quantity">
              Search results 1
            </div>
            <ul className="bet-search__list">
              <li className="bet-search__item">
                <div className="bet-search__title">
                  Europe / UEFA Euro CUP Cualification
                </div>
                <div className="bet-search__team">
                  <span className="bet-search__club">
                    Napoli
                    <span className="bet-search__separate">
                      vs
                    </span>
                    Atalanta
                  </span>
                  <span className="bet-search__time">
                    08 Oct   22:00
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="bet-search__empty">
            <div className="img-container">
              <svg>
                <use xlinkHref="#empty" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Betslip />
  </>);
};

export default Sport;
