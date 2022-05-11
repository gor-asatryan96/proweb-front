import classNames from 'classnames';

const SportCardBet = ({ bet, onBetClick, active }) => (
  <button onClick={onBetClick} className={classNames('bet-rate__set__btn', { active, hot: bet.burn })}>
    <span className="bet-rate__set__number">
      {bet.priceName}
    </span>
    <span className="bet-rate__set__coefficient">
      {bet.rate}
    </span>
  </button>
);

export default SportCardBet;
