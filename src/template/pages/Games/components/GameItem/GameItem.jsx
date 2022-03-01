import classNames from 'classnames';
import { useState } from 'react';
import { GAME_TYPES } from '../../constants/games.constants';

const GameItem = ({ data }) => {
  const [ isVisible, setIsVisible ] = useState(false);

  return (
    <li
      onClick={() => setIsVisible(true)}
      className={classNames('casino-game__item', { [GAME_TYPES[data.type]]: data.type })}>
      <div className="casino-game__img">
        <div className="img-container">
          <img src={data.image} alt={data.name} />
        </div>
        <div className="bet-rate__nav__link bet-rate__nav__link--favorite">
          <div className="img-container">
            <svg>
              <use xlinkHref="#star" />
            </svg>
          </div>
        </div>
        <div className={classNames('casino-game__play', { active: isVisible })}>
          <div className="casino-game__title">
            {data.name}
          </div>
          <div className="casino-game__visit">
            <div className="casino-game__btn casino-game__now">
              PLAY NOW
            </div>
            <div className="casino-game__btn casino-game__practise">
              PRACTICE
            </div>
          </div>
        </div>
      </div>
      <div className="casino-game__name">
        {data.name}
      </div>
    </li>
  );
};

export default GameItem;
