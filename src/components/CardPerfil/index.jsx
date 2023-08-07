import React, { useEffect, useState } from "react";
import Header from "../Header";
import {verifLogadoInside} from '../../services/auth'
import {Container} from './styles'
import CardInfo from "./CardInfo";
import Grafico from "./Grafico";
import { usePerfil } from "../../context/Perfil.context";


const CardPerfil = () => {
    const [insightStatus, setInsightStatus] = useState()
    const [insight, setInsight] = useState()
    const {infoUser, meta, acompanhamento, infoAtual} = usePerfil()

    const [peso, setPeso] = useState()
    const [altura, setAltura] = useState()
    const [idade, setIdade] = useState()
    const [IMC, setIMC] = useState()
    const [textoIMC, setTextoIMC] = useState('')

   useEffect(()=>{
    verifLogadoInside()    
   }, [])



   useEffect(()=>{

    if(infoAtual){
        setPeso(infoAtual.kg)
        setAltura(infoAtual.altura)
        setIdade(infoAtual.idade)
        setIMC(infoAtual.kg / (infoAtual.altura * infoAtual.altura))
    }

   }, [infoAtual])

    return(
        <Container>
            <Header/>

            
            <div className="perfil">
                <h1 className="tituloPagina">Meu Perfil</h1>
                <div className="divInfos">
                    <CardInfo cor="" titulo="Peso" valor={`${peso}`} medida="/kg"/>
                    <CardInfo cor="" titulo="Altura" valor={`${altura}`} medida="/cm"/>
                    <CardInfo cor=""  titulo="IMC" valor={`${IMC}`} medida=""/>
                    <CardInfo cor=""  titulo="Idade" valor={`${idade}`} medida=""/>
                </div>
                {insightStatus && <span>{insight}</span>}
                <Grafico/>


            </div>
            
            
        </Container>
    )
}

export default CardPerfil