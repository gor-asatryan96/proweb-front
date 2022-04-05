import GiftsMenuItem from './components/GiftsMenuItem';
import GiftsHeader from '../GiftsHeader/GiftsHeader';
import { formateDate } from '../../../../../../../../helpers/date';

const items = [
  {
    id: 1, title: 'Birthday gift', date: new Date(), status: '4/12',
  },
  {
    id: 2, title: 'Christmas gift', date: new Date(), status: 'Unuse',
  },
  {
    id: 3, title: 'Summer gift', date: new Date(), status: 'Expired',
  },
];

const GiftsMenu = ({ goBack, setActiveGift, isDesktop }) => <>
  <div className="menu-inner">
    {isDesktop && (
    <div className="gift__out gift__out-header">
      <div className="gift__in gift__in_title">Title</div>
      <div className="gift__in gift__in_date" >
        Receiving date
      </div>
      <div className="gift__in gift__in_status">Status</div>
    </div>
    )}
    <div className="gift__block">
      {items.map(item => (
        <GiftsMenuItem key={item.id} data={item} setActiveGift={setActiveGift} />
      ))}
    </div>
  </div>
</>;

export default GiftsMenu;
