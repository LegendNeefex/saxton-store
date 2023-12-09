import { createContext, useState } from "react";

const stateHandler = createContext();

export const ApiProvider = (({children})=>{
    const [burgerIcon,setBurgerIcon] = useState(false)

    function burgerIconHandler() {
        setBurgerIcon(true)
    }

    function closeHandler() {
        setBurgerIcon(false)
    }

    const stateData = {
        burgerIconHandler,
        burgerIcon,
        closeHandler,
    }

    return <stateHandler.Provider value={stateData}>
    {children}
  </stateHandler.Provider>
})

export default stateHandler;