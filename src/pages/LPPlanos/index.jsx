import React, { useEffect } from "react";
import {
    Header,
    FirstSection,
    Container,
    StyledButton,
    SecondSection,
    ThirdSection,
    FourthSection,
    PrincingSection,
    FaqSection
} from './styles'
import HeaderLp from './HeaderLp/'
import FooterLp from "./FooterLp";
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import CheckIcon from '@mui/icons-material/Check';

import MenuBookIcon from '@mui/icons-material/MenuBook';

import MockupDieta from '../../assets/MockupDieta.png'

import MockupGerarDieta from '../../assets/MockupGerarDieta.png'
import MockupMonitoramento from '../../assets/mockupMonitoramento.png'

import MockupMacbook from '../../assets/MockupMacbook.png'

import CardPlano from '../../components/CardPlanos/Planos/CardsPlanos'

import FaqCard from "./FaqCard";
import { useNavigate, useParams } from "react-router-dom";

import { VerifLogin } from "../../services/auth";

const LPPlanos = () => {
    const {afid} = useParams()

    useEffect(()=>{
        VerifLogin()
        if(afid){
            sessionStorage.setItem('afid', afid)
        }
    }, [])

    const navigate = useNavigate()

    const handleEntrar = () => {
        navigate('/login')
    }

    const goToPreco = () => {
        const pricesSection = document.getElementById('precos');
        if (pricesSection) {
        pricesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return(
        <Container>
            

            
            <PrincingSection id="precos">

                <h3>Planos</h3>
                <h1>Para todos os tamanhos</h1>
                <span className="simples">
                    Preços simples e transparentes que evoluem com você.
                </span>

                <div className="divPlanos">
                       
                        <CardPlano 
                            tituloPlano={'Dieta Básica'} 
                            frequencia={'3 dietas'} 
                            valorPlano={'19,90'} 
                            numDietas={'3'} 
                            adicionalAnual={false} 
                            avulso={true} 
                            linkPagamento={`https://pay.kirvano.com/9a022e58-1e1b-4e24-9938-0b2d6a1fea09?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_medium=Dieta%20Basica`}
                            value={5.99} qntd={3} type={'Dieta Basica'}
                        />

                        <CardPlano 
                            tituloPlano={'Dieta Semanal'}  
                            frequencia={'3 dietas'} 
                            valorPlano={'29,90'} 
                            numDietas={'3'} 
                            adicionalAnual={false} 
                            avulso={true} 
                            linkPagamento={`https://pay.kirvano.com/11faa6fb-ed94-42d7-884d-6c593ffbd47a?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_medium=Dieta%20Semanal`}
                            value={7.99} qntd={3} type={'Dieta Semanal'}
                        />


                        <CardPlano 
                            tituloPlano={'Dieta Semanal + Treino + Acesso Vitalicio'} 
                            frequencia={'3 dietas'} 
                            valorPlano={'49,90'} 
                            numDietas={'3'} 
                            adicionalAnual={true} 
                            avulso={true} 
                            treino={true}
                            numTreinos={1}
                            linkPagamento={`https://pay.kirvano.com/2458d184-02ed-4fda-8d31-14c584b92305?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3&utm_source=1&utm_medium=Dieta%20Semanal%20com%20Treino`}
                            value={9.99} qntd={3} type={'Dieta Semanal com Treino e Acesso Vitalicio'}
                        /> 

                </div>

            </PrincingSection>

            <FaqSection>
                <h3>FAQ</h3>
                <h1>Perguntas frequentes</h1>
                <div className="faqDiv">
                    <FaqCard/>
                </div>
            </FaqSection>
        </Container>
    )
}

export default LPPlanos