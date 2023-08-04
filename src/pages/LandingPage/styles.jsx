import styled from "styled-components";

export const Container = styled.body`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;

    button:hover{
        opacity: 0.8;
    }

    @media screen and (max-width: 770px){
        .btActions{
            display: flex;
            flex-direction: column-reverse;
            
            width: 100%;
        }
    }
`;

export const StyledButton = styled.button`
    background: var(--Primary-color);
    color: #FFF;
    font-weight: bold;
    font-family: var(--Primary-font);
    width: 122px;
    height: 40px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;

    @media screen and (max-width: 770px){
        width: 80%;
    }

    
`;

export const Header = styled.header`
    width: 100vw;
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 10px;

    img{
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: grey;
        font-family: Montserrat, sans-serif;
        font-weight: 600;
    }

    button{
        background: var(--Primary-color);
        padding: 10px;
        border: none;
        border-radius: 8px;
        color: #FFF;
        font-weight: bold;
        font-family: Montserrat, sans-serif;
        cursor: pointer;
    }
    button:hover, a:hover{
        opacity: 0.8;
    }
`;


export const FirstSection = styled.section`
    width: auto;
    max-width: 98vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;

    h1{
        color: #000;
        font-family: var(--Primary-font);
        font-weight: 600;
        font-size: 38px;
        letter-spacing: -0.8px;
        text-align: center;
        
    }

    h3{
        font-weight: 400;
        color: grey;
        width: 500px;
        text-align: center;
        margin-top: -10px;
    }

    img{
        width: 85%;
        align-self: center;
    }

    span{
        color: grey;
        font-weight: 500;
        font-family: var(--Primary-font);
        font-size: 14px;
        padding-top: 30px;
    }

    @media screen and (max-width: 770px){
        img{
            width: 580px;    
        }

        h1{
            font-size: 32px;
        }

        h3{
            width: auto;
        }
        
    }
`;


export const SecondSection = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background: #F9FAFB;

    
    h3{
        color: var(--Primary-color);
        font-size: 14px;
        text-align: center;
    }

    h1{
        text-align: center;
        
        font-family: var(--Primary-font);
        
    }

    span{
        color: grey;
        font-weight: 500;
        font-family: var(--Primary-font);
        font-size: 14px;
        
        width: 96%;
        text-align: center;
    }

    
`;

export const ThirdSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    background: #F9FAFB;
    padding: 40px 0;

    .paiThird{
        display: flex;
        width: 70%;
        align-self: center;
    }

    img{
        align-self: center;
        width: 100%;
        max-width: 300px;
        object-fit: contain;
    }


    .spanIcon{
        background: var(--Icon-Background);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 10px;
        width: 30px;
        height: 30px;
        border-radius: 50px;
        color: var(--Secondary-color);
    }

    .spanIconMenor{ 
        width: 10px;
        height: 10px;
    }

    .divTexto{
        padding: 0px 20px;
        width: 80%;
        align-self: center;
    }


    .divTexto h3{
        font-size: 23px;
    }

    .divTexto p{
        opacity: 0.5;
    }

    .lista{
        width: 100%;
    }

    .itemLista{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;
    }

    @media screen and (max-width: 1024px){
        flex-direction: column;
        width: 100%;

        .paiThird{
            display: flex;
            flex-direction: column;
            align-self: center;
            justify-content: center;
            width: 100%;
        }

        button{
            width: 100%;
        }
    }
`;

export const FourthSection = styled.section`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    background: #F9FAFB;
    padding: 40px 0;

    .paiThird{
        display: flex;
        flex-direction: row-reverse;
        width: 70%;
        align-self: center;
    }

    img{
        align-self: center;
        width: 100%;
        max-width: 300px;
        object-fit: contain;
    }


    .spanIcon{
        background: var(--Icon-Background);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 10px;
        width: 30px;
        height: 30px;
        border-radius: 50px;
        color: var(--Secondary-color);
    }

    .spanIconMenor{ 
        width: 10px;
        height: 10px;
    }

    .divTexto{
        padding: 0px 20px;
        width: 80%;
        align-self: center;
    }


    .divTexto h3{
        font-size: 23px;
    }

    .divTexto p{
        opacity: 0.5;
    }

    .lista{
        width: 100%;
    }

    .itemLista{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;
    }

    @media screen and (max-width: 1024px){
        flex-direction: column;
        width: 100%;

        .paiThird{
            display: flex;
            flex-direction: column;
            align-self: center;
            justify-content: center;
            width: 100%;
        }

        button{
            width: 100%;
        }
    }
`;