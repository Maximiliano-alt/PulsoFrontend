import React from "react";
import { Spin as Hamburger } from 'hamburger-react'
import './OpenPulsoModal.scss'
function OpenPulsoModal({setOpenModal, openModal}){
    const onClickButton = () => {
        openModal ?  setOpenModal(false) : setOpenModal(true)
    }
    return (
        <button onClick={onClickButton}>
            <Hamburger size={40}  />
        </button>
    );
}

export {OpenPulsoModal};