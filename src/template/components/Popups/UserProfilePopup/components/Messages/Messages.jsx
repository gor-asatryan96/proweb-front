import { useState } from 'react';
import GoBackHeader from '../../../components/GoBackHeader/GoBackHeader';
import MessageItem from './components/MessageItem';

const messages = [
  {
    id: 1,
    title: 'new game',
    date: new Date(),
    message: 'lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industrys Standard Dummy',
  },
  {
    id: 2,
    title: 'promotion',
    date: new Date(),
    message: 'lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industrys Standard Dummy',
  },
  {
    id: 3,
    title: 'free bet',
    date: new Date(),
    message: 'lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industrys Standard Dummy',
  },
  {
    id: 4,
    title: 'info',
    date: new Date(),
    message: 'lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industrys Standard Dummy',
  },
];

const Messages = ({ goBack, configs }) => {
  const [ openMessages, setOpenMessages ] = useState([]);

  const toggleMessage = (id) => {
    if (openMessages.includes(id)) {
      setOpenMessages(prev => prev.filter(item => item !== id));
    } else {
      setOpenMessages(prev => [ ...prev, id ]);
    }
  };

  return (
    <>
      <GoBackHeader
        title={configs.name}
        rightInfo={'4/12'}
        goBack={goBack}
        icon={configs.icon} />
      <div className="menu-inner">
        {/* <!-- TODO: add className active /checked--> */}

        <div className="message__row message__header">
          <div className="message__inner-block">
            <div className="message__column message__column_title">Messages</div>
            <div className="message__column message__column_date">Date</div>
          </div>
        </div>
        {messages.map(message => (
          <MessageItem
            key={message.id}
            data={message}
            isOpen={openMessages.includes(message.id)}
            toggleMessage={() => toggleMessage(message.id)} />
        ))}
      </div>
    </>
  );
};

export default Messages;
