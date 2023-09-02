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
                        <CardPlano tituloPlano={'Dieta e Treino'} frequencia={'1 dieta'} valorPlano={'9,90'} numDietas={'1'} link={``}   adicionalAnual={false} avulso={true}/>
                        <CardPlano tituloPlano={'Dieta e Treino'} frequencia={'3 dietas'} valorPlano={'19,90'} numDietas={'3'} link={``}   adicionalAnual={true} avulso={true}/>
                        <CardPlano tituloPlano={'Dieta e Treino'} frequencia={'5 dietas'} valorPlano={'34,90'} numDietas={'5'} link={``}   adicionalAnual={false} avulso={true}/>

                        {/* <CardPlano tituloPlano={'Anual'} frequencia={'mês'} valorPlano={'19,98'} numDietas={'5'} link={`https://pay.kiwify.com.br/niFzj6R?afid=${afiliadoId}&utm_content=${localStorage.getItem('@UserId:Nutrafity')}&utm_source=Mensal`}   adicionalAnual={'(60 por ano)'}/>
                        
                        <CardPlano tituloPlano={'Mensal'}  frequencia={'mês'} valorPlano={'29,90'} numDietas={'5'} link={`https://pay.kiwify.com.br/ghzechi?afid=${afiliadoId}&utm_content=${localStorage.getItem('@UserId:Nutrafity')}&utm_source=Mensal`} /> */}



                        

                        {/* <CardPlano tituloPlano={"Anual"} valorPlano={"19,98"}
                    numDietas={'5'} link={`./registro/${afid}`} frequencia={'mês'} adicionalAnual={'(60 por ano)'}/>
                    
                    <CardPlano tituloPlano={"Mensal"} valorPlano={"29,90"}
                    numDietas={5} link={`./registro/${afid}`} frequencia={'mês'}/> */}

                    </DivForm>
                </DivFormPai>
            </DivPai>
        </>
    )
}

export default Planos