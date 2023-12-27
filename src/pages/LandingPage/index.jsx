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

const LandingPage = () => {
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
            <HeaderLp/>

            <FirstSection id="0">
                <h1>Dieta personalizada por apenas R$14,90</h1>
                <h3>Lembra da sua promessa na virada do ano? Agora está bem mais perto e MUITO mais barata de ser realizada.</h3>

                <div className="btActions" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '20px'}}>
                
                    <StyledButton style={{background: 'var(--Secondary-color'}} onClick={handleEntrar}>
                        Entrar
                    </StyledButton>

                    <StyledButton onClick={goToPreco}>
                            OBTER ACESSO
                    </StyledButton>

                </div>
                <br/>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <img src={MockupMacbook} />

                    <span>
                        Junte-se aos nossos 4800 membros.
                    </span>
                </div>

            </FirstSection>

            <SecondSection id="funcionalidades">
                <h3>Funcionalidades</h3>
                <h1>Funcionalidades que impulsionam seu resultado</h1>
                <span>
                Transforme sua jornada de treino e nutrição com as funcionalidades avançadas do Nutrafity, projetadas para maximizar seus resultados e mantê-lo no caminho certo para o sucesso.
                </span>

            </SecondSection>

            <ThirdSection>
                <div className="paiThird">

                
                <div className="divTexto">
                    <span className="spanIcon">
                        <MenuBookIcon/>
                    </span>

                    <h3>
                        Gerador de Dietas
                    </h3>

                    <p>
                        Obtenha planos alimentares totalmente adaptados às suas metas específicas e preferências pessoais. 
                        
                    </p>

                    <div className="lista">
                        <span className="itemLista">
                            <span className="spanIcon spanIconMenor">
                                <CheckIcon/>
                            </span>
                            <p>
                            Planos alimentares sob medida para suas metas e preferências.
                            </p>
                        </span>

                        <span className="itemLista">
                            <span className="spanIcon spanIconMenor">
                                <CheckIcon/>
                            </span>
                            <p>
                            Adaptação contínua às suas necessidades em evolução.
                            </p>
                        </span>

                        <span className="itemLista">
                            <span className="spanIcon spanIconMenor">
                                <CheckIcon/>
                            </span>
                            <p>
                            Variedade de opções para uma alimentação saborosa e saudável.
                            </p>
                        </span>
                    
                    </div>

                    <StyledButton style={{marginTop: '20px', alignSelf: 'center'}} onClick={goToPreco}>
                            OBTER ACESSO
                    </StyledButton>
                    
                </div>

                <img src={MockupGerarDieta}/>{/*Adicionar print da receita no cell */}

                </div>
            </ThirdSection>

            <FourthSection>
                <div className="paiThird">

                
                <div className="divTexto">
                    <span className="spanIcon">
                        <MenuBookIcon/>
                    </span>

                    <h3>
                        Acompanhamento de Evolução Detalhado
                    </h3>

                    <p>
                     Mantenha-se no topo do seu progresso com nosso sistema de acompanhamento abrangente. 
                    {/*
                    Registre suas conquistas, visualize seu crescimento e faça ajustes informados para otimizar seu caminho para o sucesso. */}
                    </p>

                    <div className="lista">
                        <span className="itemLista">
                            <span className="spanIcon spanIconMenor">
                                <CheckIcon/>
                            </span>
                            <p>
                                Gráficos visuais que refletem seu progresso ao longo do tempo.
                            </p>
                        </span>

                        <span className="itemLista">
                            <span className="spanIcon spanIconMenor">
                                <CheckIcon/>
                            </span>
                            <p>
                                Registro de dados de peso, medidas e desempenho nos treinos.
                            </p>
                        </span>

                        <span className="itemLista">
                            <span className="spanIcon spanIconMenor">
                                <CheckIcon/>
                            </span>
                            <p>
                                Ajustes inteligentes com base nos resultados alcançados.
                            </p>
                        </span>
                    
                    </div>

                    <StyledButton style={{marginTop: '20px', alignSelf: 'center'}} onClick={goToPreco}>
                            OBTER ACESSO
                    </StyledButton>
                    
                </div>

                <img src={MockupMonitoramento}/>

                </div>
            </FourthSection>

            <PrincingSection id="precos">

                <h3>Planos</h3>
                <h1>Para todos os tamanhos</h1>
                <span className="simples">
                    Preços simples e transparentes que evoluem com você.
                </span>

                <div className="divPlanos">
                        <CardPlano 
                            tituloPlano={'Dieta Básica'} 
                            frequencia={'1 dieta'} 
                            valorPlano={'19,90'} 
                            numDietas={'1'} 
                            link={`./registro/${afid}`}   
                            adicionalAnual={false} 
                            avulso={true} 
                            linkPagamento={`https://pay.kiwify.com.br/s9j8osb?afid=${sessionStorage.getItem('afid')}&utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=1`}
                        />

                        <CardPlano 
                            tituloPlano={'Dieta Semanal'}  
                            frequencia={'1 dieta'} 
                            valorPlano={'29,90'} 
                            numDietas={'1'} 
                            link={`./registro/${afid}`}   
                            adicionalAnual={true} 
                            avulso={true} 
                            linkPagamento={`https://pay.kiwify.com.br/niYZqRH?afid=${sessionStorage.getItem('afid')}&utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=1`}
                        />


                        <CardPlano 
                            tituloPlano={'Dieta Semanal + Treino'} 
                            frequencia={'1 dieta'} 
                            valorPlano={'39,90'} 
                            numDietas={'1'} 
                            link={`./registro/${afid}`}   
                            adicionalAnual={false} 
                            avulso={true} 
                            treino={true}
                            numTreinos={1}
                            linkPagamento={`https://pay.kiwify.com.br/7miepJ7?afid=${sessionStorage.getItem('afid')}&utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=1&utm_source=1`}
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

            <FooterLp/>
        </Container>
    )
}

export default LandingPage