import { useMediaQuery } from 'react-responsive';
import { MEDIA_QUERIES } from '../../../../../../../../../constants/mediaQuery.constants';
import { formateDate } from '../../../../../../../../../helpers/date';

const GiftsMenuItem = ({ data, setActiveGift }) => {
  const { title, date, status } = data;
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return <div className="gift__out" onClick={() => setActiveGift(data)}>
    <div className="gift__in gift__in_title">{title}</div>
    <div className="gift__in gift__in_date">
      {formateDate(date).day}
      {isDesktop && (
        <span>16:30</span>
      )}
    </div>
    <div className="gift__in gift__in_status">{status}</div>
  </div>;
};

export default GiftsMenuItem;
