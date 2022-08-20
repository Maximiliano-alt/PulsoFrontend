import React from "react";
import {AppUI} from "./AppUI";
import {PulsoProvider} from "../PulsoContext"
function App(){
    return (
        <PulsoProvider>
            <AppUI/>
        </PulsoProvider>
    );
}

export default App;
