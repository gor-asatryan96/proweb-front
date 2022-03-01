import classNames from 'classnames';
import React from 'react';
import { formateDate } from '../../../../../../../helpers/date';

const MessageItem = ({ data, isOpen, toggleMessage }) => (
  <div className="message__row message__inner">
    <div className="message__inner-block" onClick={toggleMessage}>
      <div className="message__column message__column_title">{data.title}</div>
      <div className="message__column message__column_date">
        {formateDate(data.date).day}
        <div className="message__column-icon">
          <div className={classNames('img-container', { 'rotate-180': isOpen })}>
            <svg className="icon" width="11" height="7">
              <use xlinkHref="#menu-arrow-down" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className={classNames('message__inner-text', { active: isOpen })}>
      {data.message}
    </div>
  </div>
);

export default MessageItem;
