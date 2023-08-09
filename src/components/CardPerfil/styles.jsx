import styled from "styled-components";

export const Container = styled.body`
    width: 100vw;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    .perfil{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }

    .divInfos{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;
        gap: 25px;
    }

    .tituloPagina{
        color: var(--Secondary-color);
        font-family: var(--Primary-font);
        text-align: left;
        width: 100%;
    }

    .atualizaDados{
        display: flex;
        flex-direction: column;
        align-items: right;
        justify-content: right;
        align-self: right;
        width: 100%;
        span{
            font-size: 10px;
        }
    }


    .divObjetivo{
        width: 100%;
        padding: 10px 0px;
        border-radius: 8px;
        background: var(--Card-PrimaryBackground);
        margin: 20px;
        display: flex;
        align-items: center;
        span{
            font-weight: 700;
            font-family: var(--Primary-font);
            padding: 10px;
            color: #fff;

        }
        .objetivo{
            font-weight: 500;
            text-transform: capitalize;
            padding: 2px;
        }
    }

    .insight{
        width: 100%;
        background: #f8c52e;
        border: 2px solid #ffaa00;
        border-radius: 8px;
        padding: 10px 0;

        span{
            padding: 10px;
            text-align: left;
            font-size: 12px;
            font-weight: bold;
            font-family: var(--Primary-font);
            width: 100%;

        }
    }

    .graficos{
        width: 100%;
        height: auto;
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    @media screen and (max-width: 1024px){
        .divObjetivo, .insight, .graficos{
            width: 98%;
        }

        .graficos{
            overflow-x: scroll;
        }
        
    }

    @media screen and (max-width: 770px){
        max-width: 100vw;
        overflow-x: hidden;
        .perfil{
            width: 90%;
        }
        .divInfos{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .divObjetivo{
            width: 100%;
        }
        .insight{
            width: 100%;
        }
    }
`;

export const StyledButton = styled.button`
    background: var(--Secondary-color);
    color: #FFF;
    font-weight: bold;
    font-family: var(--Primary-font);
    width: 35%;
    height: 40px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center; 
    justify-content: center;

    &:hover{
        opacity: 0.7;
    }

    a{
        text-decoration: none;
        color: #fff;
    }

    @media screen and (max-width: 770px){
        width: 60%;
        font-size: 14px;
    }

    
`;