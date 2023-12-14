import { Button, TextField } from "@mui/material";
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import React, { useEffect, useState, useRef } from "react";
import {DivPai, DivForm, DivFormPai, StyledButton, BannerStyled, DivLoading} from './styles'
import InputMask from 'react-input-mask';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Chip from '@mui/material/Chip';
import CardAviso from "../../CardAviso";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { GerarDietaAPI } from "../../../services/api";
import { GerarDietaDocx, GetUserInfo, GerarMetaObj, GerarDietaSemana } from "../../../services/metodos";

import BannerMenu from '../../../assets/BannerMenu.png'
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading";
import { useAssinatura } from "../../../context/Assinatura.context";

import ModeloPDf from "../../ModeloPDF";
import { alimentos, objetivos, observacoes } from "../../../utils/listas";        
import { PDFViewer, Document, Page, PDFDownloadLink} from '@react-pdf/renderer';

import Teste from './Nutrafity.pdf'
import { usePerfil } from "../../../context/Perfil.context";
import { GerarDieta990 } from "../../../services/openai";

const filter = createFilterOptions();

const FormDieta = () => {
    const [altura, setAltura] = useState();
    const [peso, setPeso] = useState();
    const [objetivo, setObjetivo] = useState(null);
    const [genero, setGenero] = useState(null)
    const [intolerancia, setIntolerancia] = useState('Não tenho intolerância');
    const [observacao, setObservasao] = useState()
    const [errorMsg, setErrorMsg] = useState()
    const [errorStatus, setErrorStatus] = useState(false)
    const [iniciarDietaSemanal, setIniciarDietaSemanal] = useState()
    

    const [objMetaDiaria,  setObjMetaDiaria] = useState()
    const [arrayObjsDietas, setArrayObjsDietas] = useState()
    const [infoUsuario, setInfoUsuario] = useState()
    const [statusInfoUsuario, setStatusInfoUsuario] = useState()
    const [naoGosta, setNaoGosta] = useState([])
    const [gosta, setGosta] = useState([])
    const [dietaGerada, setDietaGerada] = useState()

    const [descerParaPdf, setDescerParaPdf] = useState()
    

    const [loading, setLoading] = useState(false)
    const [value, setValue] = React.useState(null);

    

    const navigate = useNavigate()
    
    const {numTickets, ReduzirTicket, GetDietasRestantesPromo, dietasRestantes} = useAssinatura()
    const {SalvarDieta} = usePerfil()

    const pdfViewerRef = useRef(null);
    const dietaContent = useRef(null);

    useEffect(()=>{
        GetDietasRestantesPromo()
    }, [])

    const handleChangeAltura = (e) => {
        setAltura(e.target.value);
      };

    const handleSelecao = (event, newValue) => {
        setObjetivo(newValue);
        console.log(objetivo, newValue)
      };

      const handleGenero = (event, newValue) => {
        setGenero(newValue)
        
      }

      const handleObservacao = (event, newValue) => {
        setObservasao(newValue)
      }

      const handleNaoGosta = (event, newValue) => {
        setNaoGosta(newValue)
        console.log(newValue)
      }

      const handleGosta = (event, newValue) => {
        setGosta(newValue)
        console.log(newValue)
      }

      const copiarDieta = (conteudo) => {
        // Cria um elemento de input temporário para copiar o texto
        const input = document.createElement('input');
        input.value = conteudo;
        document.body.appendChild(input);
        input.select();
    
        // Tenta copiar o texto para a área de transferência
        try {
          document.execCommand('copy');
        } catch (err) {
          console.error('Erro ao copiar: ', err);
        }
    
        // Remove o elemento de input temporário
        document.body.removeChild(input);
      };

    

    const gerarDieta = async () => {
        if(!objetivo || !objetivo.value){
            setErrorMsg("Escolha o objetivo.")
            setErrorStatus(true)
            return
        }
        const usuario = {
            altura: altura,
            kg: peso,
            objetivo: objetivo.value,
            intolerancia: intolerancia,
            genero: genero,
            naoGosta: naoGosta,
            gosta: gosta
        }

        console.log(usuario)
        
        setInfoUsuario({
            altura: altura,
            kg: peso,
            objetivo: objetivo.value,
            intolerancia: intolerancia,
            genero: genero,
            naoGosta: naoGosta,
            gosta: gosta
        })
        
        
        if(numTickets > 0){
            if(altura && peso && objetivo && genero){
                
                
                    setLoading(true)
                    // await GerarDieta990(usuario).then((response)=>{
                        // setErrorStatus(false)
                        // setLoading(false)
                        // console.log(response)
                        // setDietaGerada(response)
                        // ReduzirTicket()
                    // })

                    await GerarDietaDocx(usuario).then((response) => {
                        setErrorStatus(false)
                        setLoading(false)
                        console.log(response)
                        setDietaGerada(response)
                        ReduzirTicket()
                    })

                // const metaDiaria = await GerarMetaObj(usuario)
                // .then((response)=>{
                //     setIniciarDietaSemanal(true)
                //     setObjMetaDiaria(response)
                //     console.log('Usuario: ', usuario)
                    
                //     console.log('InfoUsuario: ', infoUsuario)
                    
                // })
                
    
            } else {
                setErrorStatus(true)
                setErrorMsg('Preencha todos os campos.')
            }
        } else {
            setErrorStatus(true)
            setErrorMsg('Você não possui tickets. Adquira para continuar.')
        }

}
   
    // useEffect(()=>{
    //     const fetchDieta = async () => {
    //         const dietaSemanal = await GerarDietaSemana(infoUsuario, objMetaDiaria)
    //         .then((response)=>{
    
    //             setLoading(false)
    //             setArrayObjsDietas(response)
    //             setDietaGerada(true)
    //             setDescerParaPdf(true)
                
    //         })
    //     }
    //     if(infoUsuario && objMetaDiaria){
    //         fetchDieta()
    //     }
        
        
    // }, [iniciarDietaSemanal])

    useEffect(()=>{
        setStatusInfoUsuario(true)
        // console.log(infoUsuario.altura)
        
    }, [infoUsuario])

    useEffect(()=>{
        if(dietaContent.current){
            dietaContent.current.scrollIntoView({ behavior: 'smooth' }); // A rolagem suave pode ser ajustada conforme necessário
        }
    }, [dietaGerada])

    return(
        <>
            <DivPai>
                {/*Altura, Peso, objetivo, intolerancia*/}
                
                <DivFormPai>
                    <CardAviso numDietasRestantes={dietasRestantes}/>
                    <div style={{display: 'flex', width: '100%', maxWidth: '90vw',justifyContent: 'space-between', marginTop: 10, alignItems: 'center'}}>
                        <h2>Gerar Dieta</h2>
                        <StyledButton variant="contained" style={{
                            width: '120%',
                            height: 45,
                            fontWeight: 'bold',
                            display: 'flex',
                            gap: 10,
                            lineHeight: 1
                        }} onClick={()=>{
                            navigate('/planos')
                        }}><ShoppingCartIcon/>COMPRAR TICKET</StyledButton>
                    </div>
                    

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
                        <FormHelperText id="my-helper-text" style={{marginTop: '-5px'}}>Isso é extremamente importante.</FormHelperText>

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            style={{display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}
                            value={genero}
                            onChange={handleGenero}
                            
                        >
                            <FormControlLabel value="Feminino" control={<Radio />} label="Feminino" />
                            <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
                            <FormControlLabel value="Outro" control={<Radio />} label="Outro" />
                        </RadioGroup>

                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={alimentos.map((option) => option.label)}
                            defaultValue={[]}
                            value={naoGosta}
                            onChange={handleNaoGosta}
                            freeSolo
                            renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                            ))
                            }
                            
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="filled"
                                label="Alimentos que não gosta (opcional)"
                                placeholder=""

                            />
                            )}
                            
                        />

                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={alimentos.map((option) => option.label)}
                            defaultValue={[]}
                            value={gosta}
                            onChange={handleGosta}
                            freeSolo
                            renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                            ))
                            }
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="filled"
                                label="Alimentos que não podem faltar (opcional)"
                                placeholder=""
                                
                            />
                            )}
                            
                        />

                        
                    </DivForm>

                    {errorStatus && <span style={{color: 'red', fontWeight: 'bold'}}>{errorMsg}</span>}

                    <StyledButton variant="contained" 
                    style={{fontWeight: 'bold', marginTop: '20px', maxWidth: '90vw'}} 
                    onClick={gerarDieta}
                    >
                        Gerar Dieta
                    </StyledButton>

                    {dietaGerada && 
                        <TextField ref={dietaContent}
                        style={{width: '100%', height: '500px', marginTop: 20, marginBottom: 50, color: '#000', opacity: 1}}
                        multiline
                        rows={25}
                        maxRows={25}
                        disabled
                        value={dietaGerada && dietaGerada}
                    />
                    }

                    

                    
                   
                </DivFormPai>
                    
                    {dietaGerada && infoUsuario.altura && infoUsuario.kg && infoUsuario.objetivo && infoUsuario.objetivo && 

                        <div style={{width: '90vw', maxWidth: '600px', paddingTop: '20px', display: 'flex', paddingBottom: 40, gap: 10}}>
                            <StyledButton variant="contained" style={{width: '100%'}} onClick={()=>{
                                copiarDieta(dietaGerada)
                                    alert('Dieta copiada na area de transferência.')
                                
                            }}>
                                Copiar Dieta
                            </StyledButton>

                            <PDFDownloadLink style={{width: '100%'}} document={
                                <ModeloPDf 
                                    dieta={dietaGerada}
                                    objInfosPessoais={infoUsuario}
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