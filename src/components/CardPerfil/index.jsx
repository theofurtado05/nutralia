import React, { useEffect, useState } from "react";
import Header from "../Header";
import {verifLogadoInside} from '../../services/auth'
import {Container, StyledButton} from './styles'
import CardInfo from "./CardInfo";
import Grafico from "./Grafico";
import { usePerfil } from "../../context/Perfil.context";
import InfoModal from "../../components/Modais/InfoModal";
import AtualizaDadosModal from "../Modais/AtualizaDadosModal";


const CardPerfil = () => {
    const [insightStatus, setInsightStatus] = useState()
    const [insight, setInsight] = useState()
    const {infoUser, meta, acompanhamento, infoAtual, infoModalState, graficoArray, 
        listaPesoState,
        listaAlturaState,
        listaDataAtualizacaoState,
        listaImcState,
        atualizaDadosModalState,
        setAtualizaDadosModalState,
        statusGrafico, 
        formattedDate,
        atualizarDados,
        setAtualizarDados,
        volteAmanha, 
        setVolteAmanha,
        primeiroAcesso} = usePerfil()

    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [idade, setIdade] = useState(0)
    const [IMC, setIMC] = useState(0)
    const [objetivo, setObjetivo] = useState('')
    const [textoIMC, setTextoIMC] = useState('')

   useEffect(()=>{
    verifLogadoInside()    
   }, [])



   useEffect(()=>{

    if(infoAtual){
        setPeso(infoAtual.kg)
        setAltura(infoAtual.altura)
        setIdade(infoAtual.idade)
        setIMC(infoAtual.IMC)
        setObjetivo(infoAtual.objetivo)
        setInsight(infoAtual.insight)
        if(infoAtual.insight && infoAtual.insight != null && infoAtual.insight != undefined){
            setInsightStatus(true)
        }
        if(infoAtual.dataAtualizacao == formattedDate){
            setAtualizarDados(false)
        } else {
            setAtualizarDados(true)
        }
    }

    

   }, [infoAtual])

    return(
        <Container>
            <Header/>

            
            <div className="perfil">
                <div style={{display: 'flex', width: '100%', alignItems: 'center'}}>
                    <h1 className="tituloPagina">Meu Perfil</h1>
               
                    <StyledButton onClick={()=>{
                        //se tem que atualizar
                        if(atualizarDados){
                            setAtualizaDadosModalState(true)
                        } else {
                            setVolteAmanha(true)
                        }
                        
                        
                        // se nao
                        
                    }}>Atualizar dados</StyledButton>
               
                    
                </div>
                
                <div className="divInfos">
                    <CardInfo cor="" titulo="Peso" valor={`${peso}`} medida="kg"/>
                    <CardInfo cor="" titulo="Altura" valor={`${altura}`} medida="m"/>
                    <CardInfo cor=""  titulo="IMC" valor={`${IMC}`} medida="" aviso={"IMC é o índice de massa corporal, que determina a obesidade. É calculado da seguinte forma: peso (kg) x (altura (m) x altura (m))"}/>
                    <CardInfo cor=""  titulo="Idade" valor={`${idade}`} medida=" anos"/>
                </div>

                <div className="divObjetivo">
                    <span>Objetivo: <span className="objetivo">{objetivo}</span></span>
                </div>

                {insightStatus && 
                <div className="insight">
                    <span>{insight}</span>
                </div>
                }

                <div className="graficos">
                    <Grafico categoria={listaDataAtualizacaoState} 
                    titulo1={"Peso (kg)"} lista1={listaPesoState} 
                    titulo2={"Altura (m)"} lista2={listaAlturaState} 
                    titulo3={"IMC"} lista3={listaImcState}
                />

                </div>
                


            </div>
            
            {infoModalState && <InfoModal titulo="O que é IMC?" texto={`IMC é o índice de massa corporal, que determina a obesidade. É calculado da seguinte forma: peso (kg) x (altura (m) x altura (m))`}/>}

            

            {atualizaDadosModalState && statusGrafico && atualizarDados || primeiroAcesso ? 
            <AtualizaDadosModal/> : 
            volteAmanha && 
            <InfoModal titulo="Volte amanha!" texto={`Seus dados já foram atualizados hoje! Volte amanha para continuar o progresso :)`}/>}
        </Container>
    )
}

export default CardPerfil