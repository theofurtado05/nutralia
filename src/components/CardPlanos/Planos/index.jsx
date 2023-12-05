import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import {DivPai, DivForm, DivFormPai, StyledButton} from './styles'
import Autocomplete from '@mui/material/Autocomplete';
import { GerarDietaAPI } from "../../../services/api";
import CardPlano from "./CardsPlanos";
import { usePerfil } from "../../../context/Perfil.context";

const Planos = () => {
   const {afiliadoId} = usePerfil()

   //........ ultimo caso

    return(
        <>
            <DivPai>
                {/*Altura, Peso, objetivo, intolerancia*/}
                <DivFormPai>
                    <h1>Planos</h1>
                    <DivForm>
                        
                        <CardPlano tituloPlano={'Dieta'} frequencia={'1 dieta'} valorPlano={'9,90'} numDietas={'1'} link={`../pixpage`}   adicionalAnual={false} avulso={true} linkPagamento={`https://pay.kiwify.com.br/PHko4N7?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=1`}/>
                        <CardPlano tituloPlano={'Dieta'} frequencia={'3 dietas'} valorPlano={'19,90'} numDietas={'3'} link={`../pixpage`}   adicionalAnual={true} avulso={true} linkPagamento={`https://pay.kiwify.com.br/niYZqRH?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3`}/>
                        <CardPlano tituloPlano={'Dieta'} frequencia={'5 dietas'} valorPlano={'34,90'} numDietas={'5'} link={'../pixpage'}   adicionalAnual={false} avulso={true} linkPagamento={`https://pay.kiwify.com.br/7miepJ7?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=5`}/>

                    </DivForm>
                </DivFormPai>
            </DivPai>
        </>
    )
}

export default Planos