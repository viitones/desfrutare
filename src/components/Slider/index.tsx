import React from 'react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';


import './index.css';

import { galeria } from '../../../galeria.json';
import { Link } from 'react-router-dom';


const Slider: React.FC = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={10}
      modules={[Navigation, Pagination, A11y]}
      pagination={{ el: '.swiper-pagination', clickable: true, dynamicBullets: true}}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className='card-list'
    >
      {galeria.map((img) => {
        return (
          <SwiperSlide className='card-item'>
            <Link className='card-link' to="/transparence" key={img.id}>
              <img className='card-image' src={img.src} alt={img.alt} />
              <div className={`badge badge-${img.barret}`}>{img.barret}</div>
            </Link>
          </SwiperSlide>
        )
      })}

      <div className="slider-controler">
        <div className="swiper-button-prev slide-arrow">
        </div>
        <div className="swiper-button-next slide-arrow">
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
};

export default Slider;