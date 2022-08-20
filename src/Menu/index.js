import React from "react";
import './Menu.scss'
function Menu(){
    return(
        <div className="menu-modal">
            <ul>
                <a>
                <h1>Acerca de nosotros</h1>
                _______________________________________________________
                </a>

                <a>
                <h1>Servicios</h1>
                _______________________________________________________
                </a>
                
                <a>
                <h1>Trabajos realizados</h1>
                _______________________________________________________
                </a>

                <a>
                <h1>Contratar</h1>
                _______________________________________________________
                </a>
                
                <a>
                <h1>Contacto</h1>
                _______________________________________________________
                </a>
                
            </ul>
        </div>
    );
}
export {Menu};