import React from 'react';
import './PulsoNav.scss'
import Logo from "../assets/pulsoFake.png"
import { OpenPulsoModal } from '../OpenPulsoModal';
import LogoPulso from '../Icons/Logopulso.svg';
function PulsoNav({setOpenModal, openModal}) {

    return (
        <div className="nav-bar">
        <img src={LogoPulso} alt='logo' href='/-+
        +-'/>
           
           <div className='nav-bar-desktop'>
           <ul>
                <li><a class="active" href="#container-about">Acerca de nosotros</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#carousel-works">Trabajos realizados</a></li>
                <li><a href="#about">Contratar</a></li>
                <li><a href="#about">Contacto</a></li>
            </ul>
           </div>
            <OpenPulsoModal className="hamburguer-logo" setOpenModal={setOpenModal} openModal={openModal}/>            
        </div>
        
    );
}

export {PulsoNav};