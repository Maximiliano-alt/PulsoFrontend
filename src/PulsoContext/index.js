import React from "react";

const PulsoContext = React.createContext();
function PulsoProvider(props){
    const [openModal, setOpenModal] = React.useState(false)

    const [openMenu, setOpenMenu] =  React.useState(false)

    return(
        <PulsoContext.Provider value={{
                openMenu,
                setOpenMenu,
                openModal,
                setOpenModal
            }}
        >
            {props.children}
        </PulsoContext.Provider>
    )
}
<PulsoContext.Consumer></PulsoContext.Consumer>
export {PulsoContext, PulsoProvider }