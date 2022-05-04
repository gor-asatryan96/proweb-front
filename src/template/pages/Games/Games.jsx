import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Advertising from '../../components/Common/Advertising/Advertising';
import gameImage from '../../assets/images/games/1.jpg';
import GameItem from './components/GameItem/GameItem';

import bannerIcon from '../../assets/images/games/9.jpg';
import { MEDIA_QUERIES } from '../../../constants/mediaQuery.constants';

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

const Games = () => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return (
    <section className="live-casino casino-kind">
      <div className="container">
        <div className="casino-block">
          {isDesktop && (
            <div className="casino-block__images">
              <div className="casino-block__image">
                <div className="img-container">
                  <img src={bannerIcon} alt="bannerIcon" />
                </div>
              </div>
              <div className="casino-block__image">
                <div className="img-container">
                  <img src={bannerIcon} alt="bannerIcon" />
                </div>
              </div>
              <div className="casino-block__image">
                <div className="img-container">
                  <img src={bannerIcon} alt="bannerIcon" />
                </div>
              </div>
            </div>
          )}
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
                  {/* <button className="top"> */}
                  {/*  <span className="img-container"> */}
                  {/*    <svg className="search__icon" width="15.97" height="8.96"> */}
                  {/*      <use xlinkHref="#arrow-top" /> */}
                  {/*    </svg> */}
                  {/*  </span> */}
                  {/* </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
