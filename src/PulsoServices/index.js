import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper";
import './PulsoServices.scss'
import musica from '../assets/musicaoriginal.jpg'
import post from '../assets/postProduccion.jpg'
import prod from '../assets/postP.jpg'
import voces from '../assets/voces.jpg'
import masterizacion from '../assets/masterizacion.jpg'
import sincronizacion from '../assets/sincronización.jpg'
import Modal from 'react-bootstrap/Modal';
import voc from '../assets/vocesyloc.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PulsoServices = () => {
    
  return (
    <div className='services' > 
            <div id='services'></div>
            <div className='header'>
                <h1>SERVICIOS</h1>
                
            </div>
            {/* <Swiper
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
        </SwiperSlide> */}
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

      {/* </Swiper> */}
      <section className='cards-services'>
        <div className='card'>
            <div className='image-container'>
                <div className='card-content'>
                    <h3 className='card-title'>Música original</h3>
                        <p className='card-text'>Creamos música que emociona y que quieres volver a escuchar.</p>
                </div>
            <img src={musica}/>
                
            </div>
        </div>
        
        


   



        <div className='card'>
            <div className='image-container'>
            <div className='card-content'>
                <h3 className='card-title'>Post Producción de Sonido</h3>
                        <p className='card-text'>Logramos un sonido único y memorable para todos tus proyectos.</p>
                
                </div>
            <img
              src={prod}
            />
               
            </div>
        </div>

       

        <div className='card'>
            <div className='image-container'>
                <div className='card-content'>
                    <h3 id='voices' className='card-title'>Voces y Locucíón en Off</h3>
                        <p className='card-text'>Tenemos las mejores voces en español e inglés.</p>
                </div>
            <img src={voc}/>
                
            </div>
        </div>

        <div className='card'>
            <div className='image-container'>
            <img
              src={post}
            />
                <div className='card-content'>
                <h3 className='card-title'>Masterización</h3>
                        <p className='card-text'>Entregamos un máster de alta fidelidad, que suena bien siempre y en todo lugar, con la mayor atención a los detalles de la producción.</p>
                
                </div>
            </div>
        </div>

        <div className='card'>
            <div className='image-container'>
            <img
              src={sincronizacion}
            />
                <div className='card-content'>
                <h3 className='card-title'>Sincronización</h3>
                        <p className='card-text'>Unimos marcas con la mejor música del mundo.</p>
                
                </div>
            </div>
        </div>

      </section>
    </div>
  )
}

export { PulsoServices};