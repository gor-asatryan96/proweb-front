import classNames from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { formateDate } from '../../../../../../../helpers/date';
import trash from '../../../../../../assets/images/icon/trash.svg';
import { deleteMessage } from '../../../../../../../redux/reducers/messages/messages.slice';
import { messagesReadThunk } from '../../../../../../../redux/reducers/messages/messages.thunk';

const MessageItem = ({
  data: {
    message_id, status, message_title, inserted_at, message_body,
  }, isOpen, toggleMessage, isRead, isDesktop,
}) => {
  const dispatch = useDispatch();
  const handleMessageDeleting = (e, messageId) => {
    e.preventDefault();
    dispatch(deleteMessage(messageId));
  };
  const messageId = message_id;

  const onMessageClick = () => {
    if (status === 'UNREAD') {
      dispatch(messagesReadThunk(messageId));
    }
  };

  return (
    <div
      onClick={() => onMessageClick(messageId)}
      className={classNames('message__row message__inner', {
        read: status === 'READ', desktop: isDesktop,
      })}>
      <div className="message__inner-block" onClick={toggleMessage}>
        <div className='message__column message__column_title'>{message_title}</div>
        <div className="message__column message__column_date">
          <div className="message__column_day">
            <span>
              {formateDate(inserted_at).day}
            </span>
            {isDesktop && (
            <span>{formateDate(inserted_at).time}</span>
            )}
          </div>
          {
            isDesktop && <>
              <div onClick={e => handleMessageDeleting(e, messageId)} className='message__trash-icon'>
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
        {message_body}
      </div>
    </div>
  );
};

export default MessageItem;
