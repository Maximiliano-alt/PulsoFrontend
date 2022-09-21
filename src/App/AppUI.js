import React from "react";
import {Carousel} from "../Carousel";
import { Menu } from "../Menu";
import { Modal } from "../Modal";
import { PulsoContext } from "../PulsoContext";
import {PulsoNav} from "../PulsoNav/index"
import { VideoCarousel } from "../VideoCarousel/VideoCarousel";
import { About } from "../About";
import './AppUI.scss'
import { PulsoServices } from "../PulsoServices";
function AppUI(){
    const {
        openModal,
        setOpenModal
    } = React.useContext(PulsoContext)
    
    return (
        <React.Fragment classname='grid'>
           <PulsoNav openModal={openModal} setOpenModal={setOpenModal}/>  
           
            {openModal && (
                <Modal classname='modal-second'>
                    <Menu></Menu>
                </Modal>
            )}
            
            <VideoCarousel classname='carousel-second' />
            <About classname='about-thirdth'/>
            <PulsoServices classname='services-four'/>
            <Carousel/>
        </React.Fragment>
    );
}

export { AppUI };