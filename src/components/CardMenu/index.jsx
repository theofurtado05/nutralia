import React, { useEffect, useState } from "react";
import Header from "../Header";
import {verifLogadoInside} from '../../services/auth'
import FormDieta from "./FormDieta";


const CardMenu = () => {
   

    return(
        <>
            <Header/>
            <FormDieta/>
            
        </>
    )
}

export default CardMenu