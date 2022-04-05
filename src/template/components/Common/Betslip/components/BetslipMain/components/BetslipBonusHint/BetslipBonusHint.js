const BetslipBonusHint = () => (
  <div className="bet-item__hint">
    <div className="bet-item__hint__icon">
      <div className="img-container">
        <svg width="22.8" height="22.8">
          <use xlinkHref="#attention" />
        </svg>
      </div>
    </div>
    <div className="bet-item__hint__info">
      Current bonus is 3 %, one more selection will give you 5%
    </div>
  </div>
);

export default BetslipBonusHint;
