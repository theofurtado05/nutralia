import React from "react";
import HeaderLp from "../LandingPage/HeaderLp";
import FooterLp from "../LandingPage/FooterLp";

import styled from 'styled-components'
import FaqCard from "../LandingPage/FaqCard";

export const Container = styled.body`
    width: 100vw;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;

    .conteudo{
        display: flex;
        flex-direction: column;
        width: 60%;
        align-items: center;
        justify-content: center;
        text-align: left;
    }

    h1{
        color: var(--Primary-color);
        text-align: left;
        font-size: 32px;
        font-weight: bold;
        font-family: var(--Primary-font);
    }

    @media screen and (max-width: 1023px){
        .conteudo{
            width: 90%;
        }
    }

`;

const Faq = () => {
    return(
        <Container>
            <HeaderLp/>
            <div className="conteudo">
                <h1>Perguntas Frequentes</h1>

                <FaqCard/>
            </div>
            <FooterLp/>
        </Container>
        
    )
}

export default Faq