import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./VideoCarousel.scss";
import { Pagination, Navigation } from "swiper";

import takis from '../assets/videos/0(TAKIS).mp4'
import takis2 from '../assets/videos/takis2.mp4'
import takis3 from '../assets/videos/TAKIS3.mp4'
import kia from '../assets/videos/KIA.mp4'
import kia2 from '../assets/videos/KIA2.mp4'
import kia3 from '../assets/videos/KIA3.mp4'
import TVBCI from '../assets/videos/TVBCI.mp4'
import caligrafix from '../assets/videos/CALIGRAFIX.mp4'

const VideoCarousel = () => {
  
  return (
    <div className='swiper-container'> 
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
       
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
            <video width="100%" height="100%" controls>
                <source src={kia} type="video/mp4"    />
                    Your browser does not support the video tag.
            </video>
        </SwiperSlide>
        <SwiperSlide>
            <video width="100%" height="100%" controls>
                    <source src={takis} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
        </SwiperSlide>
        <SwiperSlide>
            <video width="100%" height="100%" controls>
                    <source src={takis2} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
        </SwiperSlide>
        <SwiperSlide>
            <video width="100%" height="100%" controls>
                    <source src={caligrafix} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
        </SwiperSlide>
        <SwiperSlide>
             <video width="100%" height="100%" controls>
                    <source src={takis3} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
        </SwiperSlide>
        <SwiperSlide>
            <video width="100%" height="100%" controls>
                    <source src={kia2} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
        </SwiperSlide>
        <SwiperSlide>
            <video width="100%" height="100%" controls>
                      <source src={kia3} type="video/mp4"    />
                          Your browser does not support the video tag.
            </video>
        </SwiperSlide>
        <SwiperSlide>
             <video width="100%" height="100%" controls>
                      <source src={TVBCI} type="video/mp4"    />
                          Your browser does not support the video tag.
            </video>
        </SwiperSlide>
    </Swiper>
    </div>
      )
}

export { VideoCarousel}