import React from 'react'
import './Carousel.scss'

import 'swiper/css';
import "swiper/css";
import "swiper/css/scrollbar";
import { VideoCarousel } from "../VideoCarousel/VideoCarousel";
import { Swiper, SwiperSlide } from "swiper/react";

import { Scrollbar } from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper";
import takis from '../assets/videos/0(TAKIS).mp4'
import takis2 from '../assets/videos/takis2.mp4'
import takis3 from '../assets/videos/TAKIS3.mp4'
import kia from '../assets/videos/KIA.mp4'
import kia2 from '../assets/videos/KIA2.mp4'
import kia3 from '../assets/videos/KIA3.mp4'
import TVBCI from '../assets/videos/TVBCI.mp4'
import caligrafix from '../assets/videos/CALIGRAFIX.mp4'

const Carousel = () => {
  return (
    <div className='carousel-works' >
      <div id='works'></div>
      <div className='header-carousel'>
            <div className='header'>
                <h1>TRABAJOS REALIZADOS</h1>
                
            </div>
      </div>
      <VideoCarousel classname='carousel-second' />
      {/* <Swiper
    slidesPerView={3}
    spaceBetween={30}
    slidesPerGroup={3}
    loop={true}
    loopFillGroupWithBlank={true}
    
    pagination={{
      clickable: true
    }}
    navigation={true}
    modules={[ Pagination, Navigation]}
    className="mySwiper2" 
    id='mySwiper2'
  >
    <SwiperSlide>
            <video width="40%" height="40%" controls>
                <source src={kia} type="video/mp4"    />
                    Your browser does not support the video tag.
            </video>
        </SwiperSlide>
        <SwiperSlide>
            <video width="40%" height="40%" controls>
                    <source src={takis} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
        </SwiperSlide>
        <SwiperSlide>
            <video width="40%" height="40%" controls>
                    <source src={takis2} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
        </SwiperSlide>
        <SwiperSlide>
            <video width="40%" height="40%" controls>
                    <source src={caligrafix} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
        </SwiperSlide>
        <SwiperSlide>
             <video width="40%" height="40%" controls>
                    <source src={takis3} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
        </SwiperSlide>
        <SwiperSlide>
            <video width="40%" height="40%" controls>
                    <source src={kia2} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
        </SwiperSlide>
        <SwiperSlide>
            <video width="40%" height="40%" controls>
                      <source src={kia3} type="video/mp4"    />
                          Your browser does not support the video tag.
            </video>
        </SwiperSlide>
        <SwiperSlide>
             <video width="40%" height="40%" controls>
                      <source src={TVBCI} type="video/mp4"    />
                          Your browser does not support the video tag.
            </video>
        </SwiperSlide>
      </Swiper>
      <section className='cards-videos'>
        <div className='card'>
            
            <video width="100%" height="100%" controls>
              <source src={kia} type="video/mp4"    />
              Your browser does not support the video tag.
            </video>
            <h1>Trabajo Nº1</h1>
        </div>
        <div className='card'>
            
            <video width="100%" height="100%" controls>
              <source src={takis} type="video/mp4"    />
              Your browser does not support the video tag.
            </video>
            <h1>Trabajo Nº2</h1>
        </div>
        <div className='card'>
            
            <video width="100%" height="100%" controls>
              <source src={takis2} type="video/mp4"    />
              Your browser does not support the video tag.
            </video>
            <h1>Trabajo Nº3</h1>
        </div>
        <div className='card'>
            
            <video width="100%" height="100%" controls>
              <source src={caligrafix} type="video/mp4"    />
              Your browser does not support the video tag.
            </video>
            <h1>Trabajo Nº4</h1>
        </div>
        <div className='card'>
            
            <video width="100%" height="100%" controls>
              <source src={takis3} type="video/mp4"    />
              Your browser does not support the video tag.
            </video>
            <h1>Trabajo Nº5</h1>
        </div>
        <div className='card'>
            
            <video width="100%" height="100%" controls>
              <source src={kia2} type="video/mp4"    />
              Your browser does not support the video tag.
            </video>
            <h1>Trabajo Nº6</h1>
        </div>
        <div className='card'>
            
            <video width="100%" height="100%" controls>
              <source src={kia3} type="video/mp4"    />
              Your browser does not support the video tag.
            </video>
            <h1>Trabajo Nº7</h1>
        </div>
        <div className='card'>
            
            <video width="100%" height="100%" controls>
              <source src={TVBCI} type="video/mp4"    />
              Your browser does not support the video tag.
            </video>
            <h1>Trabajo Nº8</h1>
        </div>
      </section> */}
    </div>
    
  )
}

export {Carousel}