import { formateDate } from '../../../../../../../../../helpers/date';

const GiftsMenuItem = ({ data, setActiveGift }) => {
  const { title, date, status } = data;
  return <div className="gift__out" onClick={() => setActiveGift(data)}>
    <div className="gift__in gift__in_title">{title}</div>
    <div className="gift__in gift__in_date">{formateDate(date).day}</div>
    <div className="gift__in gift__in_status">{status}</div>
  </div>;
};

export default GiftsMenuItem;
