import React, { createContext, useContext, useEffect, useState } from "react";

const DietaContext = createContext({})
DietaContext.displayName = 'DietaContext'

const DietaProvider = ({ children }) => {



    return (
        <DietaContext.Provider value={{     
               
        }}>
            {children}
        </DietaContext.Provider>
    )
}


export const useDieta = () => {
    const context = useContext(DietaContext)

    if(!context) {
        throw new Error("Erro ao usar o useDieta")
    }

    return context;
}

export {DietaContext, DietaProvider}

