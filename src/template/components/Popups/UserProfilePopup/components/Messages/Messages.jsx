import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoBackHeader from '../../../components/GoBackHeader/GoBackHeader';
import MessageItem from './components/MessageItem';
import { selectMessages } from '../../../../../../redux/reducers/messages/messages.slice';
import { getMessagesThunk } from '../../../../../../redux/reducers/messages/messages.thunk';

const Messages = ({ goBack, configs }) => {
  const dispatch = useDispatch();
  const [ openMessages, setOpenMessages ] = useState([]);

  const messages = useSelector(selectMessages);
  const readMessagesLength = useMemo(() => messages.filter(item => item.status === 'READ').length, [ messages ]);

  const toggleMessage = (id) => {
    // setReadMessages((prev) => {
    //   if (!prev.includes(id)) {
    //     prev.push(id);
    //   }
    //   return [ ...prev ];
    // });
    if (openMessages.includes(id)) {
      setOpenMessages(prev => prev.filter(item => item !== id));
    } else {
      setOpenMessages(prev => [ ...prev, id ]);
    }
  };

  useEffect(() => {
    dispatch(getMessagesThunk());
  }, [ ]);

  return (
    <>
      {
        !configs.isDesktop && <GoBackHeader
          title={configs.name}
          rightInfo={`${readMessagesLength}/${messages.length}`}
          goBack={goBack}
          icon={configs.icon} />
      }

      <div className="menu-inner">
        {/* <!-- TODO: add className active /checked--> */}

        <div className="message__row message__header">
          <div className="message__inner-block">
            <div className="message__column message__column_title">Messages</div>
            <div className="message__column message__column_date message__column_date--extra">Date</div>
            {
              configs.isDesktop && <div className="message__column message__column_date">{readMessagesLength}/{messages.length}</div>
            }
          </div>
        </div>
        {messages.map(message => (
          <MessageItem
            isDesktop={configs.isDesktop}
            key={message.id}
            data={message}
            isRead={message.status}
            isOpen={openMessages.includes(message.message_id)}
            toggleMessage={() => toggleMessage(message.message_id)}
            />
        ))}
      </div>
    </>
  );
};

export default Messages;
