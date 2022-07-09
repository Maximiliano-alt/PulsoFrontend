import React from "react";

const PulsoContext = React.createContext();

function PulsoContext(props){
    const [openMenu, setOpenMenu] =  React.useState(false)

    return(
        <PulsoContext.Provider 
            value={{
                openMenu,
                setOpenMenu
            }}
        ></PulsoContext.Provider>
    );
}