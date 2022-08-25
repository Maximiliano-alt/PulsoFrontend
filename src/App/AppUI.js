import React from "react";
import {Carousel} from "../Carousel";
import { Menu } from "../Menu";
import { Modal } from "../Modal";
import { PulsoContext } from "../PulsoContext";
import {PulsoNav} from "../PulsoNav/index"
import './AppUI.scss'
function AppUI(){
    const {
        openModal,
        setOpenModal
    } = React.useContext(PulsoContext)
    
    return (
        <React.Fragment>
           <PulsoNav openModal={openModal} setOpenModal={setOpenModal}/>  
           
            {openModal && (
                <Modal classname='modal-second'>
                    <Menu></Menu>
                </Modal>
            )}
            
            <Carousel classname='carousel-first'/>
        </React.Fragment>
    );
}

export { AppUI };