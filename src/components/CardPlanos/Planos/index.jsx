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
                            link={`https://pay.kiwify.com.br/2Bzu4qp?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_medium=Dieta%20Basica`}   
                            adicionalAnual={false} 
                            avulso={true} 
                            linkPagamento={`https://pay.kirvano.com/4d8ce5a3-0d0a-4fbf-8ef8-5f5f16af7a0a?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_medium=Dieta%20Basica`}
                        />



                    

                        <CardPlano 
                            tituloPlano={'Dieta Semanal'}  
                            frequencia={'3 dietas'} 
                            valorPlano={'29,90'} 
                            numDietas={'3'} 
                            link={`https://pay.kiwify.com.br/VEDZVLr?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_medium=Dieta%20Semanal`}   
                            adicionalAnual={true} 
                            avulso={true} 
                            linkPagamento={`https://pay.kirvano.com/293af383-9dfe-48b0-8fe8-0ffed11858ce?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_medium=Dieta%20Semanal`}
                        />


                        <CardPlano 
                            tituloPlano={'Dieta Semanal + Treino'} 
                            frequencia={'3 dietas'} 
                            valorPlano={'39,90'} 
                            numDietas={'3'} 
                            link={`https://pay.kiwify.com.br/n9ZzuVo?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_source=1&utm_medium=Dieta%20Semanal%20com%20Treino`}   
                            adicionalAnual={false} 
                            avulso={true} 
                            treino={true}
                            numTreinos={1}
                            linkPagamento={`https://pay.kirvano.com/b8e99436-c4f2-4c66-b561-0f85c2c15fba?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_source=1&utm_medium=Dieta%20Semanal%20com%20Treino`}
                        /> 

                    </DivForm>
                </DivFormPai>
            </DivPai>
        </>
    )
}

export default Planos