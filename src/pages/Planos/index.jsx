import React, {useEffect} from "react";
import CardMenu from '../../components/CardMenu'
import { VerifLogin } from "../../services/auth";

const Planos = () => {
    useEffect(()=>{
        VerifLogin()
    })
    return(
        <>
            <CardMenu/>
        </>
    )
}

export default Planos