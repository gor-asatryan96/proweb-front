import classNames from 'classnames';

const SportCardBet = ({ data, onBetClick, active }) => (
  <button onClick={onBetClick} className={classNames('bet-rate__set__btn', { active, hot: data.burn })}>
    <span className="bet-rate__set__number">
      {data.type}
    </span>
    <span className="bet-rate__set__coefficient">
      {data.coefficient}
    </span>
  </button>
);

export default SportCardBet;
