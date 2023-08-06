import styled from "styled-components";

export const Container = styled.body`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .perfil{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: left;
        width: 80%;
    }

    .divInfos{
        display: flex;
        align-items: center;
        width: 100%;
        flex-wrap: wrap;
        gap: 25px;
    }

    .tituloPagina{
        color: var(--Primary-color);
        font-family: var(--Primary-font);
    }

    @media screen and (max-width: 770px){
        .perfil{
            width: 90%;
        }
    }
`;