import React from 'react';
import './PulsoNav.scss'
import Logo from "../assets/pulsoFake.png"
import { OpenPulsoModal } from '../OpenPulsoModal';
import LogoPulso from '../Icons/Logopulso.svg';
function PulsoNav({setOpenModal, openModal}) {

    return (
        <div className="nav-bar">
           <img src={LogoPulso} alt='logo'/>
            <OpenPulsoModal setOpenModal={setOpenModal} openModal={openModal}/>            
        </div>
        
    );
}

export {PulsoNav};