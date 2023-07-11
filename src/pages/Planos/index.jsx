import React, {useEffect} from "react";
import { VerifLogin } from "../../services/auth";
import CardPlanos from "../../components/CardPlanos";

const Planos = () => {
    useEffect(()=>{
        VerifLogin()
    })
    return(
        <>
            <CardPlanos/>
        </>
    )
}

export default Planos