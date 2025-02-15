import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Cat from '../assets/PlayStation_Controller.jpg'
import Phone from '../assets/Phone.jpg'
import Watch from '../assets/Watch.jpg'
import Headphones from '../assets/Headphones.jpg'
import Tablet from '../assets/Tablets.jpg'
import Laptop from '../assets/Laptop.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Auto() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={Cat} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide> <img src={Phone} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide> <img src={Watch} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={Headphones} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={Tablet} alt="Slide 1" /> </SwiperSlide>
        <SwiperSlide> <img src={Laptop} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
