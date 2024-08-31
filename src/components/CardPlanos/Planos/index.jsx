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
                            frequencia={'3 dietas'} 
                            valorPlano={'19,90'} 
                            numDietas={'3'} 
                            link={`https://pay.kirvano.com/9a022e58-1e1b-4e24-9938-0b2d6a1fea09?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_medium=Dieta%20Basica`}   
                            adicionalAnual={false} 
                            avulso={true} 
                            linkPagamento={`https://pay.kirvano.com/9a022e58-1e1b-4e24-9938-0b2d6a1fea09?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_medium=Dieta%20Basica`}
                            value={5.99} qntd={3} type={'Dieta Basica'}
                        />

                        <CardPlano 
                            tituloPlano={'Dieta Semanal'}  
                            frequencia={'3 dietas'} 
                            valorPlano={'29,90'} 
                            numDietas={'3'} 
                            link={`https://pay.kirvano.com/11faa6fb-ed94-42d7-884d-6c593ffbd47a?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_medium=Dieta%20Semanal`}   
                            adicionalAnual={false} 
                            avulso={true} 
                            linkPagamento={`https://pay.kirvano.com/11faa6fb-ed94-42d7-884d-6c593ffbd47a?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_medium=Dieta%20Semanal`}
                            value={7.99} qntd={3} type={'Dieta Semanal'}
                        />


                        <CardPlano 
                            tituloPlano={'Dieta Semanal + Treino + Acesso Vitalicio'} 
                            frequencia={'3 dietas'} 
                            valorPlano={'49,90'} 
                            numDietas={'3'} 
                            link={`https://pay.kirvano.com/2458d184-02ed-4fda-8d31-14c584b92305?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_source=1&utm_medium=Dieta%20Semanal%20com%20Treino`}   
                            adicionalAnual={true} 
                            avulso={true} 
                            treino={true}
                            numTreinos={1}
                            linkPagamento={`https://pay.kirvano.com/2458d184-02ed-4fda-8d31-14c584b92305?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_source=1&utm_medium=Dieta%20Semanal%20com%20Treino`}
                            value={9.99} qntd={3} type={'Dieta Semanal com Treino e Acesso Vitalicio'}
                        /> 

                    </DivForm>
                </DivFormPai>
            </DivPai>
        </>
    )
}

export default Planos