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

    div:first-child{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .column1{
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    


    @media screen and (max-width: 770px){
        div:first-child{
            flex-direction: column;
        }
    }
`;