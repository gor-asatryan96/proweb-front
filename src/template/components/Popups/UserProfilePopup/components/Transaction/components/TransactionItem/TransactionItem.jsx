import classNames from 'classnames';
import { formateDate } from '../../../../../../../../helpers/date';

const statusClases = {
  Approved: 'transaction__column_winner',
  Canceled: 'transaction__column_loser',
};

const TransactionItem = ({ data, isOpen, toggleTransaction }) => {
  const {
    date, id, system, amount, status, type, balance,
  } = data;
  const { day, time } = formateDate(date);
  return (
    <div className="transaction__row transaction__row_td">
      <div className="transaction__row-main">
        <div className="transaction__column transaction__column_date">
          <div className="transaction__date-box">
            <div className="transaction__year">{day}</div>
            <div className="transaction__time">{time}</div>
          </div>
        </div>
        <div className="transaction__column transaction__column_system">{system}</div>
        <div className="transaction__column transaction__column_amount">${amount}</div>
        <div
          className={
          classNames(
            'transaction__column transaction__column_status',
            {
              [statusClases[status]]: statusClases[status],
            },
          )
          }>
          {status}
        </div>
        <div onClick={toggleTransaction} className="transaction__column-icon">
          <div className={classNames('img-container', { 'rotate-180': isOpen })}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15.97" height="8.958" viewBox="0 0 15.97 8.958">
              <g
                id="Vector_Smart_Object3_copy_11"
                data-name="Vector Smart Object3 copy 11"
                transform="translate(15.97) rotate(90)">
                <g
                  id="Vector_Smart_Object3_copy_11-2"
                  data-name="Vector Smart Object3 copy 11"
                  transform="translate(8.957 0) rotate(90)">
                  <g id="Group_251" data-name="Group 251">
                    <g id="Group_250" data-name="Group 250">
                      <path
                        id="Path_606"
                        data-name="Path 606"
                        d="M7.362.243.255,7.028a.81.81,0,0,0,0,1.18l.524.5a.906.906,0,0,0,1.236,0l5.968-5.7
                    ,5.974,5.7a.906.906,0,0,0,1.236,0l.524-.5a.81.81,0,0,0,0-1.18L8.6.243a.91.91,0,0,0-1.239,0Z"
                        fill="#5f6c79" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      {isOpen && <div className="transaction__row-drop active">
        <div className="transaction__row transaction__row_drop">
          <div className="transaction__column transaction__column_drop-title">ID</div>
          <div className="transaction__column transaction__column_drop-value">{id}</div>
        </div>
        <div className="transaction__row transaction__row_drop">
          <div className="transaction__column transaction__column_drop-title">Type</div>
          <div className="transaction__column transaction__column_drop-value">{type}</div>
        </div>
        <div className="transaction__row transaction__row_drop">
          <div className="transaction__column transaction__column_drop-title">Amount</div>
          <div className="transaction__column transaction__column_drop-value">${amount}</div>
        </div>
        <div className="transaction__row transaction__row_drop">
          <div className="transaction__column transaction__column_drop-title">Final Balance</div>
          <div className="transaction__column transaction__column_drop-value">${balance}</div>
        </div>
      </div>}
    </div>
  );
};

export default TransactionItem;
