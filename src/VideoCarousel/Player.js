import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import videojs from 'video.js';
import './Player.scss'
// var swiper = new Swiper(
//   '.swiper-container', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
const Player = () => {
  // variable 
var VIDEO_PLAYING_STATE = {
  "PLAYING": "PLAYING",
  "PAUSE": "PAUSE"
}
var videoPlayStatus = VIDEO_PLAYING_STATE.PAUSE
var timeout = null
var waiting = 3000


// // HTML5 vdo object
// var options = {};
// var player = videojs('my-player', options);
// player.on('ended', function() {
//   next()
// })

// // swiper object
// swiper.on('slideChangeTransitionEnd', function () {
//   var index = swiper.activeIndex
//   var currentSlide =   swiper.slides[index]
//   var currentSlideType = currentSlide.data('slide-type')
  
//   // incase user click next before video ended
//   if (videoPlayStatus === VIDEO_PLAYING_STATE.PLAYING) {
//     player.pause()
//   }
  
//   clearTimeout(timeout)
  
//   switch (currentSlideType) {
//     case 'img':
//       runNext()
//       break;
//     case 'vdo':
//       player.currentTime(0)
//       player.play()
//       videoPlayStatus = VIDEO_PLAYING_STATE.PLAYING
//       break;
//     default:
//       throw new Error('invalid slide type');
//   }
// })

// // global function
// function prev() {
//   swiper.slidePrev();
// }

// function next() {
//   swiper.slideNext();
// }

// function runNext() {  
//   timeout = setTimeout(function () {
//     next()
//   }, waiting)
// }

// runNext()

  return (
    <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" data-slide-type="img">Slide 1</div>
      <div class="swiper-slide" data-slide-type="img">Slide 2</div>
      <div class="swiper-slide" data-slide-type="img">Slide 3</div>
      <div class="swiper-slide" data-slide-type="vdo">
      <video
    id="my-player"
    class="video-js"
    controls
    preload="auto"
    poster="//vjs.zencdn.net/v/oceans.png"
    data-setup='{}'>
  <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
  <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
  <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
    <a href="https://videojs.com/html5-video-support/" target="_blank">
      supports HTML5 video
    </a>
  </p>
</video>
      </div>
      <div class="swiper-slide" data-slide-type="img">Slide 5</div>
      <div class="swiper-slide" data-slide-type="img">Slide 6</div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
  )
}

export  {Player}