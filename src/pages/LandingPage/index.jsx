import React from "react";
import {
    Header,
    FirstSection,
    Container,
    StyledButton,
    SecondSection,
    ThirdSection,
    FourthSection
} from './styles'
import HeaderLp from './HeaderLp/'
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import CheckIcon from '@mui/icons-material/Check';

import MenuBookIcon from '@mui/icons-material/MenuBook';

import MockupDieta from '../../assets/MockupDieta.png'


import MockupMacbook from '../../assets/MockupMacbook.png'

const LandingPage = () => {
    return(
        <Container>
            <HeaderLp/>

            <FirstSection>
                <h1>Pare de perder dinheiro com nutricionista</h1>
                <h3>A Poderosa inteligência artificial da Nutrafity chegou para ecônomizar seu tempo e dinheiro com suas dietas.</h3>

                <div className="btActions" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '20px'}}>
                
                    <StyledButton style={{background: 'var(--Secondary-color'}}>
                        Entrar
                    </StyledButton>

                    <StyledButton>
                        <a href="/registro" style={{textDecoration: 'none', color: '#FFF'}}>
                            Registrar
                        </a>
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

            <SecondSection>
                <h3>Features</h3>
                <h1>Analytics that feels like its from the future</h1>
                <span>
                    Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                </span>

            </SecondSection>

            <ThirdSection>
                <div className="paiThird">

                
                <div className="divTexto">
                    <span className="spanIcon">
                        <MenuBookIcon/>
                    </span>

                    <h3>
                        Gere suas Dietas
                    </h3>

                    <p>
                        Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                    </p>

                    <div className="lista">
                        <span className="itemLista">
                            <span className="spanIcon spanIconMenor">
                                <CheckIcon/>
                            </span>
                            <p>
                                Dieta gerada em 30 segundos
                            </p>
                        </span>

                        <span className="itemLista">
                            <span className="spanIcon spanIconMenor">
                                <CheckIcon/>
                            </span>
                            <p>
                                Dieta gerada em 30 segundos
                            </p>
                        </span>

                        <span className="itemLista">
                            <span className="spanIcon spanIconMenor">
                                <CheckIcon/>
                            </span>
                            <p>
                                Dieta gerada em 30 segundos
                            </p>
                        </span>
                    
                    </div>

                    <StyledButton style={{marginTop: '20px', alignSelf: 'center'}}>
                        <a href="/registro" style={{textDecoration: 'none', color: '#FFF'}}>
                            Registrar
                        </a>
                    </StyledButton>
                    
                </div>

                <img src={MockupDieta}/>{/*Adicionar print da receita no cell */}

                </div>
            </ThirdSection>

            <FourthSection>
                <div className="paiThird">

                
                <div className="divTexto">
                    <span className="spanIcon">
                        <MenuBookIcon/>
                    </span>

                    <h3>
                        Gere suas Dietas
                    </h3>

                    <p>
                        Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                    </p>

                    <div className="lista">
                        <span className="itemLista">
                            <span className="spanIcon spanIconMenor">
                                <CheckIcon/>
                            </span>
                            <p>
                                Dieta gerada em 30 segundos
                            </p>
                        </span>

                        <span className="itemLista">
                            <span className="spanIcon spanIconMenor">
                                <CheckIcon/>
                            </span>
                            <p>
                                Dieta gerada em 30 segundos
                            </p>
                        </span>

                        <span className="itemLista">
                            <span className="spanIcon spanIconMenor">
                                <CheckIcon/>
                            </span>
                            <p>
                                Dieta gerada em 30 segundos
                            </p>
                        </span>
                    
                    </div>

                    <StyledButton style={{marginTop: '20px', alignSelf: 'center'}}>
                        <a href="/registro" style={{textDecoration: 'none', color: '#FFF'}}>
                            Registrar
                        </a>
                    </StyledButton>
                    
                </div>

                <img src={MockupDieta}/>{/*Adicionar print da receita no cell */}

                </div>
            </FourthSection>

        </Container>
    )
}

export default LandingPage