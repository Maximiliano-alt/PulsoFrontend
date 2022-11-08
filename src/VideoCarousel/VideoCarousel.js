import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import videojs from 'video.js';
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
    // variable 
var VIDEO_PLAYING_STATE = {
    "PLAYING": "PLAYING",
    "PAUSE": "PAUSE"
  }
  var videoPlayStatus = VIDEO_PLAYING_STATE.PAUSE
  var timeout = null
  var waiting = 3000
  const [swiper, setSwiper] = React.useState(null);
  const [muted, setMuted] = React.useState(true);
  const handleToggleMute = () => setMuted(muted => !muted);
  const nexto = () => {
    swiper.slideNext();
  };
  
//   var swiper = new Swiper(
//     '.swiper-container', {
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
  
//   //HTML5 vdo object
   var options = {};
//   var player = videojs('my-player', options);
//   player.on('ended', function() {
//     next()
//   })
  
//   //swiper object
//   swiper.on('slideChangeTransitionEnd', function () {
    
    
//     // incase user click next before video ended
//     if (videoPlayStatus === VIDEO_PLAYING_STATE.PLAYING) {
//       player.pause()
//     }
    
//     clearTimeout(timeout)
    
    
//         runNext()
//         player.currentTime(0)
//         player.play()
//         videoPlayStatus = VIDEO_PLAYING_STATE.PLAYING
    
//   })
  
//   // global function
//   function prev() {
//     swiper.slidePrev();
//   }
  
//   function next() {
//     swiper.slideNext();
//   }
  
//   function runNext() {  
//     timeout = setTimeout(function () {
//       next()
//     }, waiting)
//   }
  
  
  
    
    
    
    
    
  return (
    <div className='swiper-container'> 
        
    <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        onSlideNextTransitionStart={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide >
            <video width="100%" height="100%" controls className='video' id='my-player' autoPlay={true}  muted>
                <source src={kia} type="video/mp4"    />
                    Your browser does not support the video tag.
            </video>
            <div className='container-branch'>
                <div className='content'>
                <h1>Campaña: KIA</h1>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <video width="100%" height="100%" controls className='video' id='my-player' autoPlay={true}  muted  >
                    <source src={takis} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
            <div className='container-branch'>
                <div className='content'>
                <h1>Campaña: Takis</h1>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <video width="100%" height="100%" controls className='video' id='my-player' autoPlay={true}  unMute onPlay={true}>
                    <source src={takis2} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
            <div className='container-branch'>
                <div className='content'>
                <h1>Campaña: Takis</h1>
                </div>
            </div>
            
        </SwiperSlide>
        <SwiperSlide>
            <video width="100%" height="100%" controls className='video' autoPlay={true}  muted>
                    <source src={caligrafix} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
            <div className='container-branch'>
                <div className='content'>
                <h1>Campaña: Caligrafix + PLE IQ</h1>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <video width="100%" height="100%" controls className='video' autoPlay={true}  muted>
                    <source src={takis3} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
            <div className='container-branch'>
                <div className='content'>
                <h1>Campaña: Takis</h1>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <video width="100%" height="100%" controls className='video' autoPlay={true}  muted>
                    <source src={kia2} type="video/mp4"    />
                        Your browser does not support the video tag.
            </video>
            <div className='container-branch'>
                <div className='content'>
                <h1>Campaña: KIA</h1>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <video width="100%" height="100%" controls className='video' autoPlay={true}  muted>
                      <source src={kia3} type="video/mp4"    />
                          Your browser does not support the video tag.
            </video>
            <div className='container-branch'>
                <div className='content'>
                <h1>Campaña: KIA</h1>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <video width="100%" height="100%" controls className='video' autoPlay={true}  muted>
                      <source src={TVBCI} type="video/mp4"    />
                          Your browser does not support the video tag.
            </video>
            <div className='container-branch'>
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