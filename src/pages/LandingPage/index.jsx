import React from "react";
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

import MockupMacbook from '../../assets/MockupMacbook.png'

import CardPlano from '../../components/CardPlanos/Planos/CardsPlanos'

import FaqCard from "./FaqCard";

const LandingPage = () => {
    return(
        <Container>
            <HeaderLp/>

            <FirstSection id="0">
                <h1>Dieta personalizada para resultados incríveis!</h1>
                <h3>Alcance seus objetivos de treino de forma eficiente e deliciosa com dietas feitas sob medida, suporte contínuo e gráficos de progresso intuitivos.</h3>

                <div className="btActions" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '20px'}}>
                
                    <StyledButton style={{background: 'var(--Secondary-color'}}>
                        Entrar
                    </StyledButton>

                    <StyledButton>
                        
                            Registrar
                        
                    </StyledButton>

                </div>
                <br/>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <img src={MockupMacbook} />

                    <span>
                        Junte-se aos nossos 400 membros.
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

                    <StyledButton style={{marginTop: '20px', alignSelf: 'center'}}>
                       
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

                    <StyledButton style={{marginTop: '20px', alignSelf: 'center'}}>
                            OBTER ACESSO
                    </StyledButton>
                    
                </div>

                <img src={MockupDieta}/>{/*Adicionar print da receita no cell */}

                </div>
            </FourthSection>

            <PrincingSection id="precos">

                <h3>Planos</h3>
                <h1>Para todos os tamanhos</h1>
                <span className="simples">
                    Preços simples e transparentes que evoluem com você.
                </span>

                <div className="divPlanos">
                    <CardPlano tituloPlano={"Mensal"} valorPlano={"39,90"}
                    numDietas={15} link={'https://nutrafity.com/registro'} frequencia={'mês'}/>

                    <CardPlano tituloPlano={"Semestral"} valorPlano={"34,90"}
                    numDietas={30} link={'https://nutrafity.com/registro'} frequencia={'mês'} adicional={'Cobrado semestralmente'}/>

                    <CardPlano tituloPlano={"Anual"} valorPlano={"19,90"}
                    numDietas={45} link={'https://nutrafity.com/registro'} frequencia={'mês'} adicional={'Cobrado anualmente'}/>

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