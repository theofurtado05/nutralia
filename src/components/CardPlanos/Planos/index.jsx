import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import {DivPai, DivForm, DivFormPai, StyledButton} from './styles'
import Autocomplete from '@mui/material/Autocomplete';
import { GerarDietaAPI } from "../../../services/api";
import CardPlano from "./CardsPlanos";

const Planos = () => {
    const [altura, setAltura] = useState();
    const [peso, setPeso] = useState();
    const [objetivo, setObjetivo] = useState(null);
    const [intolerancia, setIntolerancia] = useState('Não tenho intolerância');
    const [errorMsg, setErrorMsg] = useState()
    const [errorStatus, setErrorStatus] = useState(false)
    

    const objetivos = [
        { label: 'Emagrecimento', value: 'Emagrecimento' },
        { label: 'Ganho de massa muscular', value: 'Ganho de massa muscular' },
        { label: 'Definição de musculos', value: 'Definição de musculos' },
        { label: 'Melhorar a alimentação', value: 'Melhorar a alimentação' },
        { label: 'Aumentar a performance física', value: 'Aumentar a performance física' },
    ]

    const handleSelecao = (event, newValue) => {
        setObjetivo(newValue);
      };

    const gerarDieta = async () => {
        if(altura != '' && peso != '' && objetivo != null){
            setErrorStatus(false)
            //... executa o metodo da API
            const usuario = {
                altura: altura,
                peso: peso,
                objetivo: objetivo.value,
                intolerancia: intolerancia
            }

            console.log(usuario)

            const response = await GerarDietaAPI(usuario);
            console.log(response)
            

        } else {
            setErrorStatus(true)
            setErrorMsg('Preencha todos os campos')
        }
    }
   

    return(
        <>
            <DivPai>
                {/*Altura, Peso, objetivo, intolerancia*/}
                <DivFormPai>
                    <h1>Planos</h1>
                    <DivForm>
                        
                        <CardPlano tituloPlano={'Iniciante'}  frequencia={'mês'} valorPlano={'19,90'} numDietas={'5'} link={`https://pay.kiwify.com.br/ZvKLGjP?utm_content=${localStorage.getItem('@UserId:Nutrafity')}`}/>

                        <CardPlano tituloPlano={'Lançamento'} frequencia={'mês'}valorPlano={'29,90'} numDietas={'30'} link={`https://pay.kiwify.com.br/gaDE0rc?utm_content=${localStorage.getItem('@UserId:Nutrafity')}`}/>

                        <CardPlano tituloPlano={'Anual'} frequencia={'ano'} valorPlano={'190,00'} numDietas={'240'} link={`https://pay.kiwify.com.br/DsgBrI5?utm_content=${localStorage.getItem('@UserId:Nutrafity')}`}/>

                    </DivForm>
                </DivFormPai>
            </DivPai>
        </>
    )
}

export default Planos