import React from "react";
import {
    Header,
    FirstSection,
    Container,
    StyledButton,
    SecondSection
} from './styles'
import HeaderLp from './HeaderLp/'


import MockupMacbook from '../../assets/MockupMacbook.png'

const LandingPage = () => {
    return(
        <Container>
            <HeaderLp/>

            <FirstSection>
                <h1>Pare de perder dinheiro com nutricionista</h1>
                <h3>A Poderosa inteligência artificial da Nutrafity chegou para ecônomizar seu tempo e dinheiro com suas dietas.</h3>

                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '20px'}}>
                
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

            <SecondSection>
                <h3>Features</h3>
                <h1>Analytics that feels like its from the future</h1>
                <span>
                    Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                </span>
            </SecondSection>

        </Container>
    )
}

export default LandingPage