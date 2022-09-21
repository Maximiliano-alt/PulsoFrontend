import React from "react";
import './Menu.scss'
function Menu(){
    return(
        
        <div className="menu-modal">
            <div className="head-modal"></div>
            <ul>
                <a href="#container-about">
                <h1>Acerca de nosotros</h1>
                __________________________________________________
                </a>

                <a href="#services">
                <h1>Servicios</h1>
                __________________________________________________
                </a>
                
                <a href="#carousel-works">
                <h1>Trabajos realizados</h1>
                __________________________________________________
                </a>

                <a>
                <h1>Contratar</h1>
                __________________________________________________
                </a>
                
                <a>
                <h1>Contacto</h1>
                __________________________________________________
                </a>
                
            </ul>
        </div>
    );
}
export {Menu};