import React, {useEffect} from "react";
import CardMenu from '../../components/CardMenu'
import { VerifLogin } from "../../services/auth";
import { VerificaNavegador } from "../../services/verificaNavegador";
import { usePerfil } from "../../context/Perfil.context";

const Menu = () => {
    const {UpdateNavigator} = usePerfil()
    useEffect(()=>{
        VerifLogin()
        
    })
    const fetchData = async () => {
        await UpdateNavigator(VerificaNavegador())
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