import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import {DivPai, DivForm, DivFormPai, StyledButton} from './styles'
import Autocomplete from '@mui/material/Autocomplete';
import { GerarDietaAPI } from "../../../services/api";
import CardPlano from "./CardsPlanos";
import { usePerfil } from "../../../context/Perfil.context";

const Planos = () => {
   const {afiliadoId} = usePerfil()

    return(
        <>
            <DivPai>
                {/*Altura, Peso, objetivo, intolerancia*/}
                <DivFormPai>
                    <h1>Planos</h1>
                    <DivForm>
                        
                        <CardPlano tituloPlano={'Mensal'}  frequencia={'mês'} valorPlano={'29,90'} numDietas={'5'} link={`https://pay.kiwify.com.br/ghzechi?afid=${afiliadoId}&utm_content=${localStorage.getItem('@UserId:Nutrafity')}&utm_source=Mensal`} />

                        <CardPlano tituloPlano={'Semestral'} frequencia={'mês'}valorPlano={'25,65'} numDietas={'7'} link={`https://pay.kiwify.com.br/JGL7BAf?afid=${afiliadoId}&utm_content=${localStorage.getItem('@UserId:Nutrafity')}&utm_source=Semestral`} adicional={'Cobrado Semestralmente'}/>

                        <CardPlano tituloPlano={'Anual'} frequencia={'mês'} valorPlano={'19,98'} numDietas={'9'} link={`https://pay.kiwify.com.br/niFzj6R?afid=${afiliadoId}&utm_content=${localStorage.getItem('@UserId:Nutrafity')}&utm_source=Mensal`} adicional={'Cobrado Anualmente'}/>

                    </DivForm>
                </DivFormPai>
            </DivPai>
        </>
    )
}

export default Planos