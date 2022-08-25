import React from 'react'
import './Carousel.scss'

import 'swiper/css';
import "swiper/css";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";

import { Scrollbar } from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper";
const Carousel = () => {
  return (
    <Swiper
    scrollbar={{
      hide: true,
    }}
    autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
    
    navigation={true}
        modules={[Autoplay, Pagination, Navigation,Scrollbar]}
    pagination={{
          clickable: true,
        }}
    loop={true}
    centeredSlides={true}
    roundLengths={true}
    mousewheel={true}
    grabCursor={true}
    
    className="mySwiper"
    
  >
    <SwiperSlide><img className='slide-image' src='https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'/> </SwiperSlide>
    <SwiperSlide><img className='slide-image' src='https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80'/></SwiperSlide>
    <SwiperSlide><img className='slide-image' src='https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80'/></SwiperSlide>
    
  </Swiper>
  )
}

export {Carousel}