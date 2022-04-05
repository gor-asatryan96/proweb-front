import dayjs from 'dayjs';
import { useState } from 'react';
import MyBetsHistoryItemInfo from '../../../MyBetsHistoryItemInfo/MyBetsHistoryItemInfo';

const MyBetsHistoryMenuItem = ({ setActiveHistory, data, isDesktop }) => {
  const [ isInfoOpened, setIsInfoOpened ] = useState(false);
  const currentClass = data.status === 'Lost' ? 'history_loser' : 'history_winner';

  const toggleInfo = () => {
    setIsInfoOpened(prev => !prev);
  };
  return (
    <>
      <div className="history__in">
        <div className="history__row">
          <div className="history__col history__col_date" >
            <div>{dayjs(data.date).format('DD.MM.YYYY')}</div>
            <div>{dayjs(data.date).format('HH:mm')}</div>
          </div>
          <div className="history__col history__col_id">{data.id}</div>
          <div className="history__col history__col_type">{data.type}</div>
          <div className="history__col history__col_amount">{data.amount}Tzs</div>
          {
                      isDesktop && <>
                        <div className="history__col history__col_bottom_coef">X{data.odd}</div>
                        <div className="history__col history__col_status__extra">
                          <div className={currentClass}>{data.status}</div>
                        </div>
                        <div className="history__col history-column--outcome">
                          <div className={currentClass}>{data.winAmount}</div>
                        </div>
                      </>
                  }
        </div>
        {
          !isDesktop && <>
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
          </>
        }
        <div onClick={!isDesktop ? setActiveHistory : toggleInfo} className="history__col history__col_icon">
          <div className="img-container">
            <svg className="icon">
              <use xlinkHref="#menu-arrow-right" />
            </svg>
          </div>
        </div>
      </div>
      {
          isInfoOpened && <MyBetsHistoryItemInfo isDesktop={isDesktop} goBack={() => setActiveHistory(null)} />
      }
    </>

  );
};

export default MyBetsHistoryMenuItem;
