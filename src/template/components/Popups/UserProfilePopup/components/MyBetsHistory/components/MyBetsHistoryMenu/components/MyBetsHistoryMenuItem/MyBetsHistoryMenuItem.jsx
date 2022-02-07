import dayjs from 'dayjs';

const MyBetsHistoryMenuItem = ({ setActiveHistory, data }) => {
  const currentClass = data.status === 'Lost' ? 'history_loser' : 'history_winner';
  return (
    <div className="history__in">
      <div className="history__row">
        <div className="history__col history__col_date">
          <div>{dayjs(data.date).format('DD.MM.YYYY')}</div>
          <div>{dayjs(data.date).format('HH:mm')}</div>
        </div>
        <div className="history__col history__col_id">{data.id}</div>
        <div className="history__col history__col_type">{data.type}</div>
        <div className="history__col history__col_amount">{data.amount}Tzs</div>
      </div>
      <div className="history__row-line" />
      <div className="history__row_bottom">
        <div className="history__col_bottom">
          <div>Odds</div>
          <div className={currentClass}>{data.status}</div>
        </div>
        <div className="history__col_bottom history__col_bottom_coef">
          <div>X{data.odd}</div>
          <div className={currentClass}>{data.winAmount}</div>
        </div>
      </div>
      <div onClick={setActiveHistory} className="history__col history__col_icon">
        <div className="img-container">
          <svg className="icon">
            <use xlinkHref="#menu-arrow-right" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MyBetsHistoryMenuItem;
