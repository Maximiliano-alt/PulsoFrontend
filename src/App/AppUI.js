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
import {PulsoContract} from "../PulsoContract"
import {PulsoHome} from "../PulsoHome"

function AppUI(){
    const {
        openModal,
        setOpenModal
    } = React.useContext(PulsoContext)
    
    return (
        <React.Fragment classname='grid' id="grid" class="grid">
           <PulsoNav  openModal={openModal} setOpenModal={setOpenModal}/>  
           
            {openModal && (
                
                    <Menu classname='menu'></Menu>
                
            )}
            
            {/* <VideoCarousel classname='carousel-second' /> */}
            <PulsoHome />
            <About classname='about-thirdth' id='about-thirdth'/>
            <PulsoServices classname='services-four'/>
            <Carousel/>
            <PulsoContract/>
            {/* <PulsoContact/> */}
        </React.Fragment>
    );
}

export { AppUI };