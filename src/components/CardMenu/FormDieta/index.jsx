import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import {DivPai, DivForm, DivFormPai, StyledButton, BannerStyled, DivLoading} from './styles'
import Autocomplete from '@mui/material/Autocomplete';
import { GerarDietaAPI } from "../../../services/api";
import { GerarDietaDocx } from "../../../services/metodos";
import { useDieta } from "../../../context/Dieta";
import BannerMenu from '../../../assets/BannerMenu.png'
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading";

const FormDieta = () => {
    const [altura, setAltura] = useState();
    const [peso, setPeso] = useState();
    const [objetivo, setObjetivo] = useState(null);
    const [intolerancia, setIntolerancia] = useState('Não tenho intolerância');
    const [errorMsg, setErrorMsg] = useState()
    const [errorStatus, setErrorStatus] = useState(false)

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    
    const {numTickets, ReduzirTicket} = useDieta()

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
        if(numTickets > 0){
            setLoading(true)
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
    
                //const dieta = await GerarDietaAPI(usuario);
                
                await GerarDietaDocx(usuario).then(()=>{
                    ReduzirTicket()
                    setLoading(false)
                })
                ReduzirTicket()


                
    
            } else {
                setErrorStatus(true)
                setErrorMsg('Preencha todos os campos')
            }
        } else {
            setErrorStatus(true)
            setErrorMsg('Você não possui tickets. Adquira para continuar.')
        }
        
    }
   

    return(
        <>
            <DivPai>
                {/*Altura, Peso, objetivo, intolerancia*/}
                <DivFormPai>
                    <BannerStyled src={BannerMenu} onClick={() => {
                        navigate('/Planos')
                    }}/>
                    
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

            {loading && <DivLoading><Loading /></DivLoading>}
        </>
    )
}

export default FormDieta