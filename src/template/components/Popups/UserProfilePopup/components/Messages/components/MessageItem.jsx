import classNames from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { formateDate } from '../../../../../../../helpers/date';
import trash from '../../../../../../assets/images/icon/trash.svg';
import { deleteMessage } from '../../../../../../../redux/reducers/messages/messages.slice';

const MessageItem = ({
  data: {
    id, title, date, message,
  }, isOpen, toggleMessage, isRead, isDesktop,
}) => {
  const dispatch = useDispatch();
  const handleMessageDeleting = (e, messageId) => {
    e.preventDefault();
    dispatch(deleteMessage(messageId));
  };

  return (
    <div className={classNames('message__row message__inner', {
      read: isRead, desktop: isDesktop,
    })}>
      <div className="message__inner-block" onClick={toggleMessage}>
        <div className='message__column message__column_title'>{title}</div>
        <div className="message__column message__column_date">
          <div className="message__column_day">
            <span>
              {formateDate(date).day}
            </span>
            {isDesktop && (
            <span>16:30</span>
            )}
          </div>
          {
            isDesktop && <>
              <div onClick={e => handleMessageDeleting(e, id)} className='message__trash-icon'>
                <img src={trash} alt="trash" />
              </div>
            </>
          }
          <div className={classNames('message__column-icon', { 'rotate-180': isOpen })}>
            <svg className="icon" width="16" height="9">
              <use xlinkHref="#menu-arrow-down" />
            </svg>
          </div>
        </div>
      </div>
      <div className={classNames('message__inner-text', { active: isOpen })}>
        {message}
      </div>
    </div>
  );
};

export default MessageItem;
