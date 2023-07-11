import React, { createContext, useContext, useEffect, useState } from "react";
import { GetTickets } from "../services/metodos";

const DietaContext = createContext({})
DietaContext.displayName = 'DietaContext'

const DietaProvider = ({ children }) => {
    const [plano, setPlano] = useState()
    const [numTickets, setNumTickets] = useState()

    const GetNumTickets = async () => {
        const response = await GetTickets('RgMTwUIMM1UiMNO9sicoA0gYHHz2')
        return response
    }



    return (
        <DietaContext.Provider value={{ 
            numTickets,
            GetNumTickets          
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

