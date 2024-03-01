import React from "react";
import HeaderLp from "../LandingPage/HeaderLp";
import FooterLp from "../LandingPage/FooterLp";

import styled from 'styled-components'

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

const PoliticasDePrivacidade = () => {
    return(
        <Container>
            <HeaderLp/>
            <div className="conteudo">
                <h1>Política de Privacidade</h1>

                <p>
    
    <strong>1. Coleta de Informações</strong><br/>
    O Dieta Automática coleta informações pessoais limitadas, como nome, endereço de e-mail e informações de contato, quando você se registra em nosso site ou utiliza nossos serviços. Também podemos coletar informações de uso do site, como páginas visitadas e interações realizadas.<br/><br/>

    <strong>2. Uso do Serviço</strong><br/>
    O Dieta Automática oferece um serviço de geração de planos alimentares personalizados e acompanhamento de progresso. Ao utilizar nossos serviços, você concorda em fornecer informações precisas e atualizadas. Você é responsável por manter a confidencialidade de sua conta e senha.<br/><br/>

    <strong>3. Direitos Autorais e Propriedade Intelectual</strong><br/>
    Todo o conteúdo disponível no Site, incluindo textos, imagens, gráficos, logotipos e vídeos, é de propriedade exclusiva do Dieta Automática ou de seus licenciadores e está protegido por leis de direitos autorais.<br/><br/>

    <strong>4. Uso Aceitável</strong><br/>
    Você concorda em utilizar o Site de maneira consistente com as leis aplicáveis e estes Termos de Uso. Qualquer uso indevido, incluindo a distribuição não autorizada de conteúdo do Site, é estritamente proibido.<br/><br/>

    <strong>5. Isenção de Responsabilidade</strong><br/>
    O Dieta Automática não se responsabiliza por qualquer dano ou prejuízo resultante do uso do Site ou de suas informações. O uso das informações do Site é de sua própria responsabilidade e risco.<br/><br/>

    <strong>6. Alterações nos Termos</strong><br/>
    O Dieta Automática reserva-se o direito de alterar ou modificar estes Termos de Uso a qualquer momento. É sua responsabilidade revisar periodicamente estes termos para se manter informado sobre quaisquer alterações.<br/><br/>

    <strong>7. Jurisdição e Lei Aplicável</strong><br/>
    Estes Termos de Uso são regidos pelas leis do Brasil. Qualquer disputa relacionada ao uso do Site será sujeita à jurisdição exclusiva dos tribunais brasileiros.<br/><br/>

    <strong>8. Contato</strong><br/>
    Se você tiver alguma dúvida ou preocupação em relação a estes Termos de Uso, entre em contato conosco através das informações fornecidas no site.<br/><br/>
</p>

            </div>
            <FooterLp/>
        </Container>
        
    )
}

export default PoliticasDePrivacidade