import React from "react";
import { Menu } from "../Menu";
import { Modal } from "../Modal";
import { PulsoContext } from "../PulsoContext";
import {PulsoNav} from "../PulsoNav/index"
function AppUI(){
    const {
        openModal,
        setOpenModal
    } = React.useContext(PulsoContext)
    return (
        <React.Fragment>
           <PulsoNav openModal={openModal} setOpenModal={setOpenModal}/>  
           
            {openModal && (
                <Modal>
                    <Menu></Menu>
                </Modal>
            )}
        </React.Fragment>
    );
}

export { AppUI };