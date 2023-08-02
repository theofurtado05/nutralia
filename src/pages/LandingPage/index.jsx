import React from "react";
import {
    Header,
    FirstSection,
    Container,
    StyledButton
} from './styles'

import LogoHorizontal from '../../assets/logoHorizontal.png'

import MockupMacbook from '../../assets/MockupMacbook.png'

const LandingPage = () => {
    return(
        <Container>
            <Header>
                <div style={{display: 'flex', alignItems: 'center', gap: '30px'}}>
                    <img src={LogoHorizontal} style={{width: '200px'}}/>
                    <a href="">Home</a>
                    <a href="">Sobre nós</a>
                    <a href="">Preços</a>
                </div>
                
                <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                    <a href="/login">Entrar</a>
                    <button>Registrar</button>
                    
                </div>
            </Header>

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
        </Container>
    )
}

export default LandingPage