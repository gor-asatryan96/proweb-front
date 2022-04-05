import { useMediaQuery } from 'react-responsive';
import MyBetsHistoryMenuItem from '../MyBetsHistoryMenu/components/MyBetsHistoryMenuItem/MyBetsHistoryMenuItem';

const BetHistoryList = ({ bets = [], setActiveHistory = () => {} }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  return (
    <>
      <div className="history__row history__row_fixed">
        <div className="history__col history__col_date">Date</div>
        <div className="history__col history__col_id">ID</div>
        <div className="history__col history__col_type">{isDesktop ? 'Bet Type' : 'Type'}</div>
        <div className="history__col history__col_amount">Amount</div>
        {
                isDesktop && <>
                  <div className="history__col history__col_type history__col_odds">Odds</div>
                  <div className="history__col history__col_type history__col_status">Status</div>
                  <div className="history__col history__col_type history__col_outcome">outcome</div>
                </>
              }
      </div>
      <div className="history__out">
        {bets.map(item => (
          <MyBetsHistoryMenuItem
            key={item.id}
            isDesktop={isDesktop}
            setActiveHistory={() => setActiveHistory(item)}
            data={item} />
        ))}
      </div>
    </>
  );
};

export default BetHistoryList;
