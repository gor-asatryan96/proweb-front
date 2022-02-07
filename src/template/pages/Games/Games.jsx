import React from 'react';
import Advertising from '../../components/Common/Advertising/Advertising';
import gameImage from '../../assets/images/games/1.jpg';
import GameItem from './components/GameItem/GameItem';

const gameItems = [
  {
    id: 1, name: 'Dracon Throne', image: gameImage, type: 'NEW',
  },
  { id: 2, name: 'Dracon Throne', image: gameImage },
  {
    id: 3, name: 'Dracon Throne', image: gameImage, type: 'POPULAR',
  },
  {
    id: 4, name: 'Dracon Throne', image: gameImage, type: 'RECENTLY',
  },
  { id: 5, name: 'Dracon Throne', image: gameImage },
  { id: 6, name: 'Dracon Throne', image: gameImage },
  { id: 7, name: 'Dracon Throne', image: gameImage },
];

const Games = () => (
  <section className="live-casino casino-kind">
    <div className="container">
      <div className="casino-block">
        <div className="casino-advertising casino-advertising_game">
          <Advertising />
        </div>
        <div className="live-casino__row">
          <div className="live-casino__column live-casino__column--casino">
            <div className="live-casino__advertising">
              <ul className="casino-game__list">
                {gameItems.map(game => (
                  <GameItem key={game.id} data={game} />
                ))}
              </ul>
              <div className="casino-game__more">
                <button className="btn casino-game__load">
                  Load More
                </button>
                <button className="top">
                  <span className="img-container">
                    <svg className="search__icon" width="15.97" height="8.96">
                      <use xlinkHref="#arrow-top" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Games;
