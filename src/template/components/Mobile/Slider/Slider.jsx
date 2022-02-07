import React from 'react';
import { MAIN_BANNERS } from '../../../assets/images/banners';

const Slider = () => (
  <section className="gallery">
    <div className="gallery__swiper">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {MAIN_BANNERS.map(item => (
            <div className="swiper-slide">
              <div className="img-container">
                <img className="gallery__img" src={item} alt="Gallery" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Slider;
