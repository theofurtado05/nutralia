import React, {useEffect} from "react";
import CardLogin from "../../components/CardLogin";
import { VerifLogin } from "../../services/auth";
const LoginPage = () => {

    useEffect(()=>{
        VerifLogin()
    }, [])

    return(
        <>
            <CardLogin/>
        </>
    )
}

export default LoginPage