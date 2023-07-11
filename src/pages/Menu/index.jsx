import React, {useEffect} from "react";
import CardMenu from '../../components/CardMenu'
import { VerifLogin } from "../../services/auth";

const Menu = () => {
    useEffect(()=>{
        VerifLogin()
    })
    return(
        <>
            <CardMenu/>
        </>
    )
}

export default Menu