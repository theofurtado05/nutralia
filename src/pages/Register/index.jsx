import React, {useEffect} from "react";
import CardRegister from "../../components/CardRegistro";
import { useParams } from 'react-router-dom'

const RegisterPage = () => {
    const {afid} = useParams()
    
    useEffect(() => {
        if(afid){
            sessionStorage.setItem('afid', afid)
        }
    }, [])

    return(
        <>
            <CardRegister/>
        </>
    )
}

export default RegisterPage