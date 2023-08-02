import styled from "styled-components";

export const Container = styled.body`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button:hover{
        opacity: 0.8;
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