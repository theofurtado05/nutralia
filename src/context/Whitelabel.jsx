import React, { createContext, useContext, useEffect, useState } from "react";

const WhitelabelContext = createContext({})
WhitelabelContext.displayName = 'WhitelabelContext'

const WhitelabelProvider = ({ children }) => {
    const [coresRoot, setCoresRoot] = useState([])
    const [openModalMsg, setOpenModalMsg] = useState(false)
    const [objModalMsg, setObjModalMsg] = useState({
        title: '',
        msg: ''
    })

    const setarCores = () => {
        setCoresRoot(`
        :root {
            --Primary-color: #FFA100;
            --Secondary-color: #bc7802;
            --Icon-Background: #ebb963;
            --Card-PrimaryBackground: #efa524;
        }
    `)
    }

    useEffect(()=>{
        setarCores()
    }, [])
    

    return (
        <WhitelabelContext.Provider value={{     
                coresRoot,
                setarCores,
                openModalMsg, 
                setOpenModalMsg,
                objModalMsg, setObjModalMsg
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

