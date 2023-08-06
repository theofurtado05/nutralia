import React, { useEffect, useState } from "react";
import Header from "../Header";
import {verifLogadoInside} from '../../services/auth'
import {Container} from './styles'
import CardInfo from "./CardInfo";
import Grafico from "./Grafico";


const CardPerfil = () => {
    const [insightStatus, setInsightStatus] = useState()
    const [insight, setInsight] = useState()

   useEffect(()=>{
    verifLogadoInside()

    setInsightStatus(true)
    setInsight("Precisando ganhar massa")
   }, [])

    return(
        <Container>
            <Header/>

            
            <div className="perfil">
                <h1 className="tituloPagina">Meu Perfil</h1>
                <div className="divInfos">
                    <CardInfo cor="" titulo="Peso" valor="82" medida="/kg"/>
                    <CardInfo cor="" titulo="Altura" valor="176" medida="/cm"/>
                    <CardInfo cor=""  titulo="IMC" valor="Sobrepeso" medida=""/>
                    <CardInfo cor=""  titulo="Idade" valor="21" medida=""/>
                </div>
                {insightStatus && <span>{insight}</span>}
                <Grafico/>


            </div>
            
            
        </Container>
    )
}

export default CardPerfil