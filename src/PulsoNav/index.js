import React from 'react';
import './PulsoNav.scss'
import Logo from "../assets/pulsoFake.png"
import { OpenPulsoModal } from '../OpenPulsoModal';
import LogoPulso from '../Icons/Logopulso.svg';
function PulsoNav({setOpenModal, openModal}) {

    return (
        <div className="nav-bar">
           <img src={LogoPulso} alt='logo'/>
           <div className='nav-bar-desktop'>
           <ul>
                <li><a class="active" href="#home">Acerca de nosotros</a></li>
                <li><a href="#news">Servicios</a></li>
                <li><a href="#contact">Trabajos realizados</a></li>
                <li><a href="#about">Contratar</a></li>
                <li><a href="#about">Contacto</a></li>
            </ul>
           </div>
            <OpenPulsoModal className="hamburguer-logo" setOpenModal={setOpenModal} openModal={openModal}/>            
        </div>
        
    );
}

export {PulsoNav};