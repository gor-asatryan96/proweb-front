const BetslipItem = ({ data, onDeleteClick }) => (
  <li className="bet-item__team__item">
    <div className="bet-item__team__info">
      <div className="bet-item__team__title">
        <div className="bet-item__team__name">
          {data.event.firstTeam}
        </div>
        <div className="bet-item__team__separator">
          vs
        </div>
        <div className="bet-item__team__name">
          {data.event.secondTeam}
        </div>
        <div className="bet-item__team__total">
          <div className="bet-item__team__result">
            {data.bet.name}: <span>{data.bet.coefficient}</span>
          </div>
        </div>
      </div>
      <div className="bet-item__team__ratio">
        2.53
      </div>
    </div>
    <button onClick={onDeleteClick} className="bet-item__team__delete" />
  </li>
);

export default BetslipItem;
