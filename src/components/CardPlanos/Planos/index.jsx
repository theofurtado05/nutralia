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
                      


                        <CardPlano 
                            tituloPlano={'Dieta Básica'} 
                            frequencia={'1 dieta'} 
                            valorPlano={'19,90'} 
                            numDietas={'1'} 
                            link={`../pixpage`}   
                            adicionalAnual={false} 
                            avulso={true} 
                            linkPagamento={`https://pay.kiwify.com.br/s9j8osb?afid=${sessionStorage.getItem('afid')}&utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=1&utm_medium=Dieta%20Basica`}
                        />





                        <CardPlano 
                            tituloPlano={'Dieta Semanal'}  
                            frequencia={'1 dieta'} 
                            valorPlano={'29,90'} 
                            numDietas={'1'} 
                            link={`../pixpage`}   
                            adicionalAnual={true} 
                            avulso={true} 
                            linkPagamento={`https://pay.kiwify.com.br/niYZqRH?afid=${sessionStorage.getItem('afid')}&utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=1&utm_medium=Dieta%20Semanal`}
                        />


                        <CardPlano 
                            tituloPlano={'Dieta Semanal + Treino'} 
                            frequencia={'1 dieta'} 
                            valorPlano={'39,90'} 
                            numDietas={'1'} 
                            link={'../pixpage'}   
                            adicionalAnual={false} 
                            avulso={true} 
                            treino={true}
                            numTreinos={1}
                            linkPagamento={`https://pay.kiwify.com.br/7miepJ7?afid=${sessionStorage.getItem('afid')}&utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=1&utm_source=1&utm_medium=Dieta%20Semanal%20com%20Treino`}
                        /> 

                    </DivForm>
                </DivFormPai>
            </DivPai>
        </>
    )
}

export default Planos