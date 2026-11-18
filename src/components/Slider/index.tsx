import React, { useRef } from 'react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

import './index.css';

import { galeria } from '../../../galeria.json';
import { Link } from 'react-router-dom';

const Slider: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

    return (
      <Swiper
        loop={true}
        spaceBetween={10}
        modules={[Navigation, Pagination, A11y]}
        pagination={{ el: paginationRef.current, clickable: true, dynamicBullets: true }}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="card-list"
      >
        {galeria.map((img) => (
          <SwiperSlide className="card-item" key={img.id}>
            <Link className="card-link" to="/transparence">
              <img className="card-image" src={img.src} alt={img.alt} />
              <div className={`badge badge-${img.barret}`}>{img.barret}</div>
            </Link>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slide-arrow" ref={prevRef}></div>
          <div className="swiper-button-next slide-arrow" ref={nextRef}></div>
          <div className="swiper-pagination" ref={paginationRef}></div>
        </div>
      </Swiper>
    );
  };

  export default Slider;
