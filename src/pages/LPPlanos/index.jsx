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
                            valorPlano={'5,99'} 
                            numDietas={'3'} 
                            link={`./registro/${afid}`}   
                            adicionalAnual={false} 
                            avulso={true} 
                            linkPagamento={`https://pay.kirvano.com/0c32923e-b1d7-488c-b9a9-182cf35f93f9`}
                        />



                        <CardPlano 
                            tituloPlano={'Dieta Semanal'}  
                            frequencia={'3 dietas'} 
                            valorPlano={'7,99'} 
                            numDietas={'3'} 
                            link={`./registro/${afid}`}   
                            adicionalAnual={false} 
                            avulso={true} 
                            linkPagamento={`https://pay.kirvano.com/76d4e557-bb44-4ee5-ae16-ffd80e6150ec`}
                        />


                        <CardPlano 
                            tituloPlano={'Dieta Semanal + Treino'} 
                            frequencia={'3 dietas'} 
                            valorPlano={'9,99'} 
                            numDietas={'3'} 
                            link={`./registro/${afid}`}   
                            adicionalAnual={true} 
                            avulso={true} 
                            treino={true}
                            numTreinos={1}
                            linkPagamento={`https://pay.kirvano.com/ae517256-9823-43d5-95e5-91ac4560a97c`}
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