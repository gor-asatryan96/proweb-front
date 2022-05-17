import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoBackHeader from '../../../components/GoBackHeader/GoBackHeader';
import MessageItem from './components/MessageItem';
import { selectMessages, setMessagesRead } from '../../../../../../redux/reducers/messages/messages.slice';

export const messagesMock = [
  {
    id: '1',
    title: 'new game',
    date: new Date(),
    message: 'lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industrys Standard Dummy',
    read: false,
  },
  {
    id: '2',
    title: 'promotion',
    date: new Date(),
    message: 'lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industrys Standard Dummy',
    read: false,
  },
  {
    id: '3',
    title: 'free bet',
    date: new Date(),
    message: 'lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industrys Standard Dummy',
    read: false,
  },
  {
    id: '4',
    title: 'info',
    date: new Date(),
    message: 'lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industrys Standard Dummy',
    read: false,
  },
];

const Messages = ({ goBack, configs }) => {
  const [ openMessages, setOpenMessages ] = useState([]);
  const [ readMessages, setReadMessages ] = useState([]);

  const messages = useSelector(selectMessages);
  const readMessagesLength = useMemo(() => messages.filter(item => !item.read).length, [ readMessages ]);
  const dispatch = useDispatch();

  const toggleMessage = (id) => {
    setReadMessages((prev) => {
      if (!prev.includes(id)) {
        prev.push(id);
      }
      return [ ...prev ];
    });
    if (openMessages.includes(id)) {
      setOpenMessages(prev => prev.filter(item => item !== id));
    } else {
      setOpenMessages(prev => [ ...prev, id ]);
    }
  };

  useEffect(() => () => {
    dispatch(setMessagesRead(readMessages));
  }, [ readMessages ]);

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
            isRead={message.read}
            isOpen={openMessages.includes(message.id)}
            toggleMessage={() => toggleMessage(message.id)} />
        ))}
      </div>
    </>
  );
};

export default Messages;
