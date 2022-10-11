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

import takisLogo from '../assets/takis.jpg'
import kiaBranch from '../assets/kiaBranch.png'
import caligrafixLogo from '../assets/caligrafix.png'
import bciLogo from '../assets/bci.png'

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
            <div className='container-branch'>
                <img src={kiaBranch}/>
                <div className='content'>
                <h1>Campaña: KIA</h1>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <video width="100%" height="100%" controls>
                    <source src={takis} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
            <div className='container-branch'>
                <img src={takisLogo}/>
                <div className='content'>
                <h1>Campaña: Takis</h1>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <video width="100%" height="100%" controls>
                    <source src={takis2} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
            <div className='container-branch'>
                <img src={takisLogo}/>
                <div className='content'>
                <h1>Campaña: Takis</h1>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <video width="100%" height="100%" controls>
                    <source src={caligrafix} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
            <div className='container-branch'>
                <img id='caligrafix-logo' src={caligrafixLogo}/>
                <div className='content'>
                <h1>Campaña: Caligrafix + PLE IQ</h1>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <video width="100%" height="100%" controls>
                    <source src={takis3} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
            <div className='container-branch'>
                <img src={takisLogo}/>
                <div className='content'>
                <h1>Campaña: Takis</h1>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <video width="100%" height="100%" controls>
                    <source src={kia2} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
            <div className='container-branch'>
                <img src={kiaBranch}/>
                <div className='content'>
                <h1>Campaña: KIA</h1>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <video width="100%" height="100%" controls>
                      <source src={kia3} type="video/mp4"    />
                          Your browser does not support the video tag.
            </video>
            <div className='container-branch'>
                <img src={kiaBranch}/>
                <div className='content'>
                <h1>Campaña: KIA</h1>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <video width="100%" height="100%" controls>
                      <source src={TVBCI} type="video/mp4"    />
                          Your browser does not support the video tag.
            </video>
            <div className='container-branch'>
                <img src={bciLogo}/>
                <div className='content'>
                <h1>Campaña: BCI</h1>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
    </div>
      )
}

export { VideoCarousel}