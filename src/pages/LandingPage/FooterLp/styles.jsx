import styled from 'styled-components'

export const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0px;
    background: #F9FAFB;
    width: 100vw;
    margin-top: 40px;

    .divPai{
        
        display: flex;
        justify-content: space-around;
        width: 100%;

    }

    .company{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
    }

    .company img{
        width: 150px;
    }

    .company span{
        font-size: 12px;
        opacity: 0.5;
    }

    .linksUteis{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
        gap: 5px;
    }


    .linksUteis a{
        text-decoration: none;
        font-weight: bold;
        font-family: var(--Primary-font);
        color: #000;
        opacity: 0.5;
    }

    a:hover{
        opacity: 1;
    }

    @media screen and (max-width: 770px){
        .divPai{
            flex-direction: column;
            gap: 20px;
            width: 90%;
        }
    }
`;