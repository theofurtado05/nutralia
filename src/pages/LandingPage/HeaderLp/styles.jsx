import styled from "styled-components";

export const Header = styled.header`
    width: 100vw;
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 10px;

    @media screen and (max-width: 770px){
        justify-content: space-between;
        padding: 10px 100px;
    }

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
    @media screen and (max-width: 770px){
        button{
            background: none;
            color: grey;
        }

    }
    button:hover, a:hover{
        opacity: 0.8;
    }
`;