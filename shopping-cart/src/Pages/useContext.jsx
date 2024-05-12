import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState([])
    return (
        <AppContext.Provider value={{cartItems, setCartItems}} >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}