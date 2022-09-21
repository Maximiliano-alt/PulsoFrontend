import React from 'react'
import './About.scss'
import estudio from '../assets/shutterstock_537999616.jpg'
const About = () => {
  return (
    <div className='container-about' id='container-about'>
        <h1>Acerca de nosotros</h1>
        <hr  color="white" />
        <img src={estudio}/>
        <div className='container-p'>
        
        <h1>Acerca de nosotros</h1>
          <p>
          Somos un estudio con base en Santiago de Chile. Producimos música y sonido que emociona y permanece en la memoria. Trabajamos con las más importantes Agencias de Publicidad Productoras de Cine, TV, Internet y otros medios, tanto de Chile como el extranjero.
          </p>
        </div>
    </div>
  )
}

export  {About};