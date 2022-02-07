import image1 from '../../../assets/images/advertising/1.jpg';
import image2 from '../../../assets/images/advertising/2.jpg';
import image3 from '../../../assets/images/advertising/3.jpg';
import AdvertisingItem from './component/AdvertisingItem/AdvertisingItem';

const fakeItems = [
  {
    id: 1, title: 'Jackpot', subTitle: '$1.000.000', image: image1,
  },
  {
    id: 2, title: 'Jackpot', subTitle: '$2.000.000', image: image2,
  },
  {
    id: 3, title: 'Jackpot', subTitle: '$5.000.000', image: image3,
  },
];

const Advertising = ({ items = fakeItems }) => <ul class="bet-advertising__list">
  {items.map(item => (
    <AdvertisingItem key={item.id} data={item} />
  ))}
</ul>;

export default Advertising;
