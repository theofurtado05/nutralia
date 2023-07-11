import React, { useEffect, useState } from "react";
import Header from "../Header";
import {verifLogadoInside} from '../../services/auth'
import Planos from "./Planos";


const CardPlanos = () => {
   

    return(
        <>
            <Header/>
            <Planos/>
            
        </>
    )
}

export default CardPlanos