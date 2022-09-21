import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper";
import './PulsoServices.scss'
import musica from '../assets/musicaOriginal.jpg'
import post from '../assets/postProduccion.jpg'
import voces from '../assets/voces.jpg'
import masterizacion from '../assets/masterizacion.jpg'
import sincronizacion from '../assets/sincronizacion.jpg'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PulsoServices = () => {
  return (
    <div className='services' id='services'> 
            <div className='header'>
                <h1>Servicios</h1>
                <hr  color="white" />
            </div>
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
        <SwiperSlide> 
            <div className='image-container'>
            <img
              src={musica}
            />
                <div className='card-content'>
                    <h1 className='card-title'>Música original</h1>
                </div>
            </div> 
        </SwiperSlide>
        <SwiperSlide>
            <div className='image-container'>
                <img
                src={post}
                />
                    <div className='card-content'>
                        <h1 className='card-title'>Post producción de sonido</h1>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='image-container'>
                <img
                src={voces}
                />
                    <div className='card-content'>
                        <h1 className='card-title'>Voces y locución en off</h1>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='image-container'>
                <img
                src={masterizacion}
                />
                    <div className='card-content'>
                        <h1 className='card-title'>Masterización</h1>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='image-container'>
            <img
              src={sincronizacion}
            />
                <div className='card-content'>
                    <h1 className='card-title'>Sincronización</h1>
                </div>
            </div>
        </SwiperSlide>
            {/* <SwiperSlide>
                <img className='slide-image' src={musica}/> 
                <div className='card-content'>
                        <h1 className='card-title'>Música original</h1>
                </div>
            </SwiperSlide>
        <SwiperSlide>
            <img className='slide-image' src={post}/>
            <div className='card-content'>
                <h1 className='card-title'>Post producción de sonido</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <img className='slide-image' src={voces}/>
            <div className='card-content'>
                <h1 className='card-title'>Voces y locución en off</h1>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <img className='slide-image' src={masterizacion}/>
            <div className='card-content'>
            <h1 className='card-title'>Masterización</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <img className='slide-image' src={sincronizacion}/>
        <div className='card-content'>
        <h1 className='card-title'>Sincronización</h1>
        </div>
        </SwiperSlide> */}

      </Swiper>
      <section className='cards-services'>
        <div className='card'>
            <div className='image-container'>
            <img
              src={musica}
            />
                <div className='card-content'>
                    <h1 className='card-title'>Música original</h1>
                </div>
            </div>
        </div>

        <div className='card'>
            <div className='image-container'>
            <img
              src={post}
            />
                <div className='card-content'>
                    <h1 className='card-title'>Post producción de sonido</h1>
                </div>
            </div>
        </div>

        <div className='card'>
            <div className='image-container'>
            <img
              src={voces}
            />
                <div className='card-content'>
                    <h1 className='card-title'>Voces y locución en off</h1>
                </div>
            </div>
        </div>

        <div className='card'>
            <div className='image-container'>
            <img
              src={masterizacion}
            />
                <div className='card-content'>
                    <h1 className='card-title'>Masterización</h1>
                </div>
            </div>
        </div>

        <div className='card'>
            <div className='image-container'>
            <img
              src={sincronizacion}
            />
                <div className='card-content'>
                    <h1 className='card-title'>Sincronización</h1>
                </div>
            </div>
        </div>

      </section>
    </div>
  )
}

export { PulsoServices};