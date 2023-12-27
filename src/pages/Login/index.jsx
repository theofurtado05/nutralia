import React, {useEffect} from "react";
import CardLogin from "../../components/CardLogin";
import { VerifLogin } from "../../services/auth";
import { useNavigate, useParams } from "react-router-dom";

const LoginPage = () => {
    const {afid} = useParams()

    useEffect(()=>{
        VerifLogin()
        if(afid){
            sessionStorage.setItem('afid', afid)
        }
    }, [])

    return(
        <>
            <CardLogin/>
        </>
    )
}

export default LoginPage