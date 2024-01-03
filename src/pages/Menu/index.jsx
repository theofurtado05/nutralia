import React, {useEffect} from "react";
import CardMenu from '../../components/CardMenu'
import { VerifLogin } from "../../services/auth";
import { VerificaNavegador } from "../../services/verificaNavegador";
import { usePerfil } from "../../context/Perfil.context";
import { useState } from "react";

const Menu = () => {
    const {UpdateNavigator} = usePerfil()
    const [navi, setnavi] = useState()
    useEffect(()=>{
        VerifLogin()
        
    })
    const fetchData = async () => {
        await UpdateNavigator(VerificaNavegador())
        // console.log(VerificaNavegador())
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    return(
        <>
            <CardMenu/>
        </>
    )
}

export default Menu