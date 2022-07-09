import React from 'react';
import './PulsoNav.scss'
import Logo from "../assets/pulsoFake.png"
import { Spin as Hamburger } from 'hamburger-react'
function PulsoNav() {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <div className="nav-bar">
           
           
           <img src={Logo} />
           
            <Hamburger size={50} toggled={isOpen} toggle={setOpen} className=""/>
        </div>
        
    );
}

export {PulsoNav};