import { Button, TextField } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import React, { useEffect, useState, useRef } from "react";
import {DivPai, DivForm, DivFormPai, StyledButton, BannerStyled, DivLoading} from './styles'
import InputMask from 'react-input-mask';

import { GerarDietaAPI } from "../../../services/api";
import { GerarDietaDocx, GetUserInfo, GerarMetaObj, GerarDietaSemana } from "../../../services/metodos";

import BannerMenu from '../../../assets/BannerMenu.png'
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading";
import { useAssinatura } from "../../../context/Assinatura.context";

import ModeloPDf from "../../ModeloPDF";
                            
import { PDFViewer, Document, Page, PDFDownloadLink} from '@react-pdf/renderer';

import Teste from './Nutrafity.pdf'
import { usePerfil } from "../../../context/Perfil.context";


const FormDieta = () => {
    const [altura, setAltura] = useState();
    const [peso, setPeso] = useState();
    const [objetivo, setObjetivo] = useState(null);
    const [intolerancia, setIntolerancia] = useState('Não tenho intolerância');
    const [errorMsg, setErrorMsg] = useState()
    const [errorStatus, setErrorStatus] = useState(false)
    const [iniciarDietaSemanal, setIniciarDietaSemanal] = useState()
    const [dietaGerada, setDietaGerada] = useState()

    const [objMetaDiaria,  setObjMetaDiaria] = useState()
    const [arrayObjsDietas, setArrayObjsDietas] = useState()
    const [infoUsuario, setInfoUsuario] = useState()
    const [statusInfoUsuario, setStatusInfoUsuario] = useState()

    const [descerParaPdf, setDescerParaPdf] = useState()
    

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    
    const {numTickets, ReduzirTicket} = useAssinatura()
    const {SalvarDieta} = usePerfil()

    const pdfViewerRef = useRef(null);

    const handleChangeAltura = (e) => {
        setAltura(e.target.value);
      };

    const objetivos = [
        { label: 'Emagrecimento', value: 'Emagrecimento' },
        { label: 'Ganho de massa muscular', value: 'Ganho de massa muscular' },
        { label: 'Definição de musculos', value: 'Definição de musculos' },
        { label: 'Melhorar a alimentação', value: 'Melhorar a alimentação' },
        { label: 'Aumentar a performance física', value: 'Aumentar a performance física' },
        { label: 'Hipertrofia', value: 'Hipertrofia'},
    ]

    const handleSelecao = (event, newValue) => {
        setObjetivo(newValue);
      };

    const gerarDieta = async () => {
        const usuario = {
            altura: altura,
            kg: peso,
            objetivo: objetivo.value,
            intolerancia: intolerancia
        }
        setInfoUsuario({
            altura: altura,
            kg: peso,
            objetivo: objetivo.value,
            intolerancia: intolerancia
        })
        
        
        if(numTickets > 0){
            
            setLoading(true)
            if(altura != '' && peso != '' && objetivo != null){
                setErrorStatus(false)
                

                const metaDiaria = await GerarMetaObj(usuario)
                .then((response)=>{
                    setIniciarDietaSemanal(true)
                    setObjMetaDiaria(response)
                    console.log('Usuario: ', usuario)
                    
                    console.log('InfoUsuario: ', infoUsuario)
                    
                })
                

 
                // await GerarDietaDocx(usuario).then(()=>{
                //     ReduzirTicket()
                //     setLoading(false)
                // })
                
    
            } else {
                setErrorStatus(true)
                setErrorMsg('Preencha todos os campos')
            }
        } else {
            setErrorStatus(true)
            setErrorMsg('Você não possui tickets. Adquira para continuar.')
        }

}
   
    useEffect(()=>{
        const fetchDieta = async () => {
            const dietaSemanal = await GerarDietaSemana(infoUsuario, objMetaDiaria)
            .then((response)=>{
                ReduzirTicket()
                setLoading(false)
                setArrayObjsDietas(response)
                setDietaGerada(true)
                setDescerParaPdf(true)
                
            })
        }
        if(infoUsuario && objMetaDiaria){
            fetchDieta()
        }
        
        
    }, [iniciarDietaSemanal])

    useEffect(()=>{
        setStatusInfoUsuario(true)
        // console.log(infoUsuario.altura)
        
    }, [infoUsuario])

    useEffect(()=>{
        if(pdfViewerRef.current){
            pdfViewerRef.current.scrollIntoView({ behavior: 'smooth' }); // A rolagem suave pode ser ajustada conforme necessário
        }
    }, [descerParaPdf])

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
                    <InputMask
                        mask="9.99"
                        value={altura}
                        onChange={handleChangeAltura}
                        // maskChar="_" // Optional: You can use any character you want to indicate a placeholder
                        >
                        {() => (
                            <TextField
                            label="Altura (m)"
                            value={altura}
                            
                            />
                        )}
                        </InputMask>
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
                    
                    {dietaGerada && statusInfoUsuario && infoUsuario.altura && infoUsuario.kg && infoUsuario.objetivo && infoUsuario.objetivo && objMetaDiaria && arrayObjsDietas &&

                        <div ref={pdfViewerRef} style={{width: '90vw', maxWidth: '600px', paddingTop: '20px'}}>

                            <PDFDownloadLink document={
                                <ModeloPDf 
                                    arrayObjsDieta={arrayObjsDietas} 
                                    objInfosPessoais={infoUsuario} 
                                    objMetaDiaria={objMetaDiaria}
                                    />

                            } fileName="PlanoAlimentarNutrafity.pdf">

                            {({ blob, url, loading, error }) =>
                                loading ? 'Carregando PDF...' : 
                                
                                <StyledButton variant="contained" style={{
                                    width: '100%',
                                    background: 'var(--Secondary-color)',
                                    fontWeight: 'bold'
                                }} onClick={()=>{
                                    //SalvarDieta(url)
                                }}>Baixar Dieta</StyledButton>
                            }
                            </PDFDownloadLink>
                        </div>
                    }

            </DivPai>

            {loading && <DivLoading><Loading /></DivLoading>}
        </>
    )
}

export default FormDieta