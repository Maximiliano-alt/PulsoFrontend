import React from 'react';
import './PulsoNav.scss'

import { OpenPulsoModal } from '../OpenPulsoModal';
import casa from '../assets/casa.png';
function PulsoNav({setOpenModal, openModal}) {

    return (
        <div className="nav-bar">
        <a href='#Home'><img src={casa} alt='logo' href='/'/></a> 
           
           <div className='nav-bar-desktop'>
           <ul>
                <li><a href="#about">Acerca de nosotros</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#works">Trabajos realizados</a></li>
                <li><a href="#contract">Contacto</a></li>
                {/* <li><a href="#contact">Contacto</a></li> */}
            </ul>
           </div>
            <OpenPulsoModal className="hamburguer-logo" setOpenModal={setOpenModal} openModal={openModal}/>            
        </div>
        
    );
}

export {PulsoNav};