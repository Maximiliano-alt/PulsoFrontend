import React from 'react'
import './About.scss'
import estudio from '../assets/estudio.png'
import CHILEBLANCO from '../assets/CHILE BLANCO.png'
import MUSICA from '../assets/MUSICAA.png'
import REDE from '../assets/REDE.png'

const About = () => {
  return (
    <div className='container-about' id='container-about'>
        <div id='about'></div>
        
        
        
        <div className='container-p'>
         <div className='about'>
            <h1>ACERCA DE NOSOTROS</h1>
            {/* <p>
            Somos un voces con base en Santiago de Chile. Producimos música y sonido que emociona y permanece en la memoria. Trabajamos con las más importantes Agencias de Publicidad Productoras de Cine, TV, Internet y otros medios, tanto de Chile como el extranjero.
            </p> */}
         </div> 
          
            <div className='container-img'>
              <img className='img-desktop' src={estudio}/>
            </div>

        </div>
        <img className='img-phone' src={estudio}/>
        <div className='flex-about'>
            <img className='icon-about' src={CHILEBLANCO}/>
            <hr className='hr'/>
            <img className='icon-about' src={MUSICA}/>
            <hr className='hr'/>
            <img className='icon-about' src={REDE}/>
        </div>
        <p>Somos un estudio con base en Santiago de Chile.<br /> Producimos música y sonido que emociona y permanece en la memoria. <br /> Trabajamos con las más importantes Agencias de Publicidad Productoras de Cine, TV, internet y otros medios, tanto de Chile como el extranjero.</p>
    </div>
  )
}

export  {About};