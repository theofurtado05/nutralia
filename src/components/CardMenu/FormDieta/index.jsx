import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import {DivPai, DivForm, DivFormPai, StyledButton} from './styles'
import Autocomplete from '@mui/material/Autocomplete';
import { GerarDietaAPI } from "../../../services/api";

const FormDieta = () => {
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
                    <div style={{width: '100%', height: '80px', background: 'var(--Primary-color)', marginBottom: '20px'}}></div>

                    <h1>Gerar Dieta</h1>

                    <DivForm>
                        <TextField label="Altura (m)" value={altura} onChange={(e) => setAltura(e.target.value)}/>
                        <TextField label="Peso (kg)" value={peso} onChange={(e) => setPeso(e.target.value)}/>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={objetivos}
                            getOptionLabel={(option) => option.label}
                            value={objetivo}
                            onChange={handleSelecao}
                            renderInput={(params) => (
                                <TextField {...params} label="Objetivo" />
                            )}
                            />
                        <TextField label="Intolerância"  value={intolerancia} onChange={(e) => setIntolerancia(e.target.value)}/>
                    </DivForm>

                    {errorStatus && <span style={{color: 'red', fontWeight: 'bold'}}>{errorMsg}</span>}

                    <StyledButton variant="contained" 
                    style={{fontWeight: 'bold', marginTop: '20px'}} 
                    onClick={gerarDieta}
                    >
                        Gerar Dieta
                    </StyledButton>
                   
                </DivFormPai>
            </DivPai>
        </>
    )
}

export default FormDieta