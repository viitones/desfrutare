import React from 'react';
import 'swiper/css/bundle';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.css';

import { galeria } from '../../../galeria.json';


const Slider: React.FC = () => {
  return (
    <div className="card-wrapper">
      <Swiper
      slidesPerView={3}
      spaceBetween={50}
      modules={[Navigation, Pagination, A11y]}
      // navigation
      pagination={{ clickable: true }}
      className='card-list'
      >
        {galeria.map((img) => {
          return (
            <SwiperSlide className='card-item'>
              <a href="" key={img.id}>
                <img className='card-image' src={img.src} alt={img.alt} />
              </a>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
};

export default Slider;