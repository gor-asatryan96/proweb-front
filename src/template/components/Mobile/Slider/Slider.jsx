import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MAIN_BANNERS } from '../../../assets/images/banners';

const Slider = () => (
  <section className="gallery">
    <Carousel
      autoPlay
      infiniteLoop
      showIndicators={false}
      showArrows={false}
      showStatus={false}
      showThumbs={false}>
      {MAIN_BANNERS.map(item => (
        <img className="gallery__img" src={item} alt="Gallery" />
      ))}
    </Carousel>
  </section>
);

export default Slider;
