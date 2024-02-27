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
                            valorPlano={'5,99'} 
                            numDietas={'3'} 
                            link={`https://pay.kirvano.com/0c32923e-b1d7-488c-b9a9-182cf35f93f9?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_medium=Dieta%20Basica`}   
                            adicionalAnual={false} 
                            avulso={true} 
                            linkPagamento={`https://pay.kirvano.com/0c32923e-b1d7-488c-b9a9-182cf35f93f9?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_medium=Dieta%20Basica`}
                            value={5.99} qntd={3} type={'Dieta Basica'}
                        />



                    

                        <CardPlano 
                            tituloPlano={'Dieta Semanal'}  
                            frequencia={'3 dietas'} 
                            valorPlano={'7,99'} 
                            numDietas={'3'} 
                            link={`https://pay.kirvano.com/76d4e557-bb44-4ee5-ae16-ffd80e6150ec?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_medium=Dieta%20Semanal`}   
                            adicionalAnual={true} 
                            avulso={true} 
                            linkPagamento={`https://pay.kirvano.com/76d4e557-bb44-4ee5-ae16-ffd80e6150ec?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_medium=Dieta%20Semanal`}
                            value={7.99} qntd={3} type={'Dieta Semanal'}
                        />


                        <CardPlano 
                            tituloPlano={'Dieta Semanal + Treino'} 
                            frequencia={'3 dietas'} 
                            valorPlano={'9,99'} 
                            numDietas={'3'} 
                            link={`https://pay.kirvano.com/ae517256-9823-43d5-95e5-91ac4560a97c?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_source=1&utm_medium=Dieta%20Semanal%20com%20Treino`}   
                            adicionalAnual={false} 
                            avulso={true} 
                            treino={true}
                            numTreinos={1}
                            linkPagamento={`https://pay.kirvano.com/ae517256-9823-43d5-95e5-91ac4560a97c?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_source=1&utm_medium=Dieta%20Semanal%20com%20Treino`}
                            value={9.99} qntd={3} type={'Dieta Semanal com Treino'}
                        /> 

                    </DivForm>
                </DivFormPai>
            </DivPai>
        </>
    )
}

export default Planos