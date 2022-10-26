import React from 'react'
import './PulsoHome.scss'
import gif from '../assets/gif2_pulso.gif';
import Logo from "../assets/pulsoFake.png"
import pulsoHome from "../assets/Logocompletopágina.png"
import pulsoMobile from "../assets/Logocompletopágina.png"
const PulsoHome = () => {
  return (
    <div className='Home'>
        <div id='Home'></div>
        <div className='container-gif'>
            <img src={pulsoHome} className='inner-image'/>
            <img src={pulsoMobile} className='small-image'/>
            {/* <img src={Logo} className='inner-image2'/> */}
        </div>
    </div>
  )
}

export { PulsoHome}