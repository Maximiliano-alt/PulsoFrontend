import React from "react";
import './Menu.scss'
function Menu(){
    return(
        
        <div className="menu-modal" id="">
            <div className="head-modal" id="Home"></div>
            <ul>
                <a href="#about">
                <h1>ACERCA DE NOSOTROS</h1>
                <hr/>
                </a>

                <a href="#services">
                <h1>SERVICIOS</h1>
                <hr/>
                </a>
                
                <a href="#works">
                <h1>TRABAJOS REALIZADOS</h1>
                <hr/>
                </a>

                <a href="#contract">
                <h1>CONTACTO</h1>
                <hr/>
                </a>
                
                {/* <a href="#contact">
                <h1>Contacto</h1>
                <hr/>
                </a> */}
                
            </ul>
        </div>
    );
}
export {Menu};