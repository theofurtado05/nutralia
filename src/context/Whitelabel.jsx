import React, { createContext, useContext, useEffect, useState } from "react";

const WhitelabelContext = createContext({})
WhitelabelContext.displayName = 'WhitelabelContext'

const WhitelabelProvider = ({ children }) => {
    const [coresRoot, setCoresRoot] = useState([])


    const setarCores = () => {
        setCoresRoot(`
        :root {
            --Primary-color: #0a730f;
            --Secondary-color: #1C9E22;
        }
    `)
    }

    useEffect(()=>{
        setarCores()
    }, [])
    

    return (
        <WhitelabelContext.Provider value={{     
                coresRoot,
                setarCores
        }}>
            {children}
        </WhitelabelContext.Provider>
    )
}


export const useWhitelabel = () => {
    const context = useContext(WhitelabelContext)

    if(!context) {
        throw new Error("Erro ao usar o useWhitelabel")
    }

    return context;
}

export {WhitelabelContext, WhitelabelProvider}

