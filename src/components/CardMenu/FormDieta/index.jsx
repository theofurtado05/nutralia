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
import { GerarDietaVercel, GerarTreinoVercel } from "../../../services/geradores";

const filter = createFilterOptions();

const FormDieta = () => {
    const [idade, setIdade] = useState()
    const [altura, setAltura] = useState();
    const [peso, setPeso] = useState();
    const [objetivo, setObjetivo] = useState(null);
    const [genero, setGenero] = useState(null)
    const [intolerancia, setIntolerancia] = useState('');
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
    const [treino, setTreino] = useState(false)

    const [descerParaPdf, setDescerParaPdf] = useState()
    

    const [loading, setLoading] = useState(false)
    const [value, setValue] = React.useState(null);

    

    const navigate = useNavigate()
    
    const {numTickets, ReduzirTicket, GetDietasRestantesPromo, dietasRestantes, planoAtual} = useAssinatura()
    const {SalvarDieta, setDietaGeradaNova, dietaGeradaNova} = usePerfil()

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

      const handleIdade = (event, newValue) => {
        setIdade(newValue)
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

    

    const gerarDietaBasica = async (objetivo) => {
        const response = await GerarDietaVercel(objetivo)
        return [response.data]
    }

    const gerarDietaBasicaETreino = async (objetivo) => {
        const response = await GerarDietaVercel(objetivo)
        const responseTreino = await GerarTreinoVercel(objetivo)
        
        
        const listaAux = {
            dieta: response.data,
            treino: responseTreino.data
        }
            
        return listaAux
        
    }

    const gerarDietaSemanal = async (objetivo) => {
        const listaAux = []
        for(let i = 0; i < 7; i++){
            const response = await GerarDietaVercel(objetivo)
            listaAux.push(response.data)
        }
        return listaAux
    }

    const gerarDietaSemanalETreino = async (objetivo) => {
        const listaAux = []
        for(let i = 0; i < 7; i++){
            const response = await GerarDietaVercel(objetivo)
            listaAux.push(response.data)
        }

        const responseTreino = await GerarTreinoVercel(objetivo)
        // setTreino({
        //     ...responseTreino.data.opcoesA,
        //     ...responseTreino.data.opcoesB
        // })
        const objAux = {
            dieta: listaAux,
            treino: responseTreino.data
        }

        console.log(objAux)
        return objAux
    }

    const gerarDieta = async () => {
        if(navigator.userAgent.includes('Instagram')){
            alert("Abra o Nutrafity fora do Instagram.")
            setErrorMsg("Abra o Nutrafity fora do Instagram")
            setErrorStatus(true)
            return false
        }
        if(!objetivo || !objetivo.value){
            setErrorMsg("Escolha o objetivo.")
            setErrorStatus(true)
            return
        }
        const usuario = {
            idade: idade,
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
            idade: idade,
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
                        // console.log(response.replace(/\*/g, ''))
                        // setDietaGerada(response.replace(/\*/g, ''))
                        // localStorage.setItem("@UltimaDieta:Nutrafity", response.replace(/\*/g, ''))
                        // localStorage.setItem("@InfoUsuario:Nutrafity", JSON.stringify(usuario))
                        // ReduzirTicket()
                    // })

                if(planoAtual == "Dieta Basica"){
                    await gerarDietaBasica(usuario.objetivo).then((response) => {
                        setErrorStatus(false)
                        setLoading(false)
                        setDietaGerada(response)
                        // setDietaGeradaNova(response)
                        localStorage.setItem("@UltimaDieta:Nutrafity", JSON.stringify(response))
                        localStorage.setItem("@InfoUsuario:Nutrafity", JSON.stringify(usuario))
                        ReduzirTicket()

                        console.log(response)
                    })
                } else if (planoAtual == "Dieta Basica com Treino"){
                    await gerarDietaBasicaETreino(usuario.objetivo).then((response) => {
                        setErrorStatus(false)
                        setLoading(false)
                        setDietaGerada([response.dieta])
                        setTreino(response.treino)
                        console.log(response.treino)
                        // setDietaGeradaNova(response.data)
                        localStorage.setItem("@UltimaDieta:Nutrafity", JSON.stringify(response))
                        localStorage.setItem("@InfoUsuario:Nutrafity", JSON.stringify(usuario))
                        ReduzirTicket()

                        
                    })
                } else if (planoAtual == "Dieta Semanal"){
                    await gerarDietaSemanal(usuario.objetivo).then((response) => {
                        setErrorStatus(false)
                        setLoading(false)
                        setDietaGerada(response)
                        setDietaGeradaNova(response.data)
                        localStorage.setItem("@UltimaDieta:Nutrafity", JSON.stringify(response))
                        localStorage.setItem("@InfoUsuario:Nutrafity", JSON.stringify(usuario))
                        ReduzirTicket()

                        console.log(response.data, ' => response.data')
                    })
                } else if (planoAtual == "Dieta Semanal com Treino"){
                    await gerarDietaSemanalETreino(usuario.objetivo).then((response) => {
                        setErrorStatus(false)
                        setLoading(false)
                        setDietaGerada(response.dieta)
                        setTreino(response.treino)
                        console.log(response)
                        
                        localStorage.setItem("@UltimaDieta:Nutrafity", JSON.stringify(response))
                        localStorage.setItem("@InfoUsuario:Nutrafity", JSON.stringify(usuario))
                        ReduzirTicket()

                        console.log(response.data)
                    })
                } else {
                    await gerarDietaBasica(usuario.objetivo).then((response) => {
                        setErrorStatus(false)
                        setLoading(false)
                        setDietaGerada(response)
                        // setDietaGeradaNova(response)
                        localStorage.setItem("@UltimaDieta:Nutrafity", JSON.stringify(response))
                        localStorage.setItem("@InfoUsuario:Nutrafity", JSON.stringify(usuario))
                        ReduzirTicket()

                        console.log(response)
                    })
                }
                
            } else {
                setErrorStatus(true)
                setErrorMsg('Preencha todos os campos.')
            }
        } else {
            setErrorStatus(true)
            setErrorMsg('Você não possui tickets. Adquira para continuar.')
        }

        

}
   

    useEffect(()=>{
        setStatusInfoUsuario(true)
        // console.log(infoUsuario.altura)
        
    }, [infoUsuario])

    useEffect(() => {
        console.log(objetivo)
    }, [objetivo])

    useEffect(()=>{
        if(dietaContent.current){
            dietaContent.current.scrollIntoView({ behavior: 'smooth' }); // A rolagem suave pode ser ajustada conforme necessário
        }
    }, [dietaGerada])

    useEffect(()=>{
        if(dietaGerada){
            localStorage.setItem('dietaGerada', JSON.stringify(dietaGerada));
        }
        if(infoUsuario){
            localStorage.setItem('infoUsuario', JSON.stringify(infoUsuario));
        }
            
        if(treino){
            localStorage.setItem('treino', JSON.stringify(treino));
        } else {
            localStorage.removeItem('treino')
        }
            
        
        
    }, [dietaGerada, infoUsuario, treino])

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
                    <TextField
                            label="Idade"
                            value={idade}
                            onChange={(e)=>setIdade(e.target.value)}
                            />
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

                        <TextField label="Adicional"  value={intolerancia} onChange={(e) => setIntolerancia(e.target.value)}/>
                        <FormHelperText id="my-helper-text" style={{marginTop: '-5px'}}>Exemplo: Não pode faltar chocolate.</FormHelperText>

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            style={{display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}
                            value={genero}
                            onChange={handleGenero}
                            
                        >
                            <FormControlLabel value="Feminino" control={<Radio />} label="Mulher" />
                            <FormControlLabel value="Masculino" control={<Radio />} label="Homem" />
                        </RadioGroup>

                        {/* <Autocomplete
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
                            
                        /> */}

                        {/* <Autocomplete
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
                            
                        /> */}

                        
                    </DivForm>

                    {errorStatus && <span style={{color: 'red', fontWeight: 'bold'}}>{errorMsg}</span>}

                    <StyledButton variant="contained" 
                    style={{fontWeight: 'bold', marginTop: '20px', maxWidth: '90vw', opacity: dietaGerada && '0.85', color: 'white'}} 
                    onClick={gerarDieta}
                    >
                        Gerar Dieta
                    </StyledButton>

                    {/* {dietaGerada && 
                        <TextField ref={dietaContent}
                        style={{width: '100%', height: '500px', marginTop: 20, marginBottom: 50, color: '#000', opacity: 1}}
                        multiline
                        rows={25}
                        maxRows={25}
                        disabled
                        value={dietaGerada && dietaGerada}
                    />
                    } */}

                    

                    
                   
                </DivFormPai>
                    
                    {(dietaGerada && infoUsuario.altura && infoUsuario.kg && infoUsuario.objetivo && infoUsuario.objetivo)&& 

                        <div style={{width: '99vw', maxWidth: '600px', paddingTop: '0px', display: 'flex', paddingBottom: 40, gap: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} ref={dietaContent}>
                            {/* <StyledButton variant="contained" style={{width: '100%'}} onClick={()=>{
                                copiarDieta(dietaGerada)
                                    alert('Dieta copiada na area de transferência.')
                                
                            }}>
                                Copiar Dieta
                            </StyledButton> */}

                            
                            <PDFDownloadLink style={{width: '100%', textDecoration: 'none', maxWidth: '90vw'}} document={
                                
                                <ModeloPDf 
                                    dieta={dietaGerada}
                                    treino={treino}
                                    objInfosPessoais={infoUsuario}
                                    />

                            } fileName="dietaautomatica.pdf">

                            {({ blob, url, loading, error }) =>
                                loading ? 'Carregando PDF...' : 
                                
                                <StyledButton variant="contained" style={{
                                    width: '100%',
                                    background: 'var(--Secondary-color)',
                                    fontWeight: 'bold',
                                    color: 'white'
                                }} onClick={()=>{
                                    //SalvarDieta(url)
                                }}>Baixar Dieta em PDF</StyledButton>
                            }
                            </PDFDownloadLink>

                            <StyledButton variant="contained" style={{width: '100%', maxWidth: '90vw', fontWeight: 'bold', background: 'var(--Primary-color)', color: 'white'}} onClick={()=>{navigate('/verDieta')}}>
                                VER MINHA DIETA
                            </StyledButton>
                        </div>
                    }

            </DivPai>

            {loading && <DivLoading><Loading />
                <h5 style={{fontSize: '14px', marginTop: 250, color: '#fff', textAlign: 'center', background: 'var(--Primary-color)'}}>
                    Tempo estimado: 58 segundos
                    <br/>
                    Não saia da página
                </h5>
            </DivLoading>}
        </>
    )
}

export default FormDieta