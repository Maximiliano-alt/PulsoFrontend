import React from 'react'
import './PulsoContact.scss'
import estudio from '../assets/shutterstock_537999616.jpg'
import phone from '../assets/phone_icon.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import spotify from '../assets/spotify.svg'
import whatsapp from '../assets/whatsapp3.svg'
import youtube from '../assets/YouTube.svg'
import facebook from '../assets/Facebook.svg'
import LogoPulso from '../Icons/Logopulso.svg';
const PulsoContact = () => {

  return (
    <div className='container-contact'>
      <div id='contact'></div>
      <h1>Contacto</h1>
      <hr size='10px' color="white" />
      <div id="container-img" class="col-lg-3">
        <div class="img-container">
            <div class="positioning">
              
                <img className='img-phone' src={phone}/>
                <p>+56 9 9785 0898 <br/> Chile<br/> Santiago Pulsomusicprod@gmail.com</p>  
                  <div class="social-media">               
                    <a href="" ><img class="social" src={linkedin} alt=""/></a>
                    <a href=""><img class="social" src={spotify} alt=""/></a>
                    <a href=""><img class="social" src={facebook} alt=""/></a>
                    <a href=""><img class="social" src={youtube} alt=""/></a>
                    <a href=""><img class="social" src={instagram} alt=""/></a>               
                  </div>
            </div>
            
            <img className='img-background' src={estudio} />
        </div>
      </div>
      <div className='container-bottom'>
        
          <img src={LogoPulso}/>
          <h1>Pulso Music {(new Date().getFullYear())} |</h1>
        
      </div>
    </div>
  )
}

export { PulsoContact}