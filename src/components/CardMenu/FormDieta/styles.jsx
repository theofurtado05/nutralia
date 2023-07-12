import styled from 'styled-components'
import Button from '@mui/material/Button';

export const DivPai = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;


    
    
`;

export const DivFormPai = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    h1{
        font-family: 'Montserrat', sans-serif;
    }
`;

export const DivForm = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    width: 600px;
    padding-bottom: 5px;

    @media screen and (max-width: 770px){
        width: 90vw;
    }
`;



export const StyledButton = styled(Button)`
    width: 100%;
    cursor: pointer;
    border-radius: 50px !important;
    background: var(--Primary-color);

`;

export const BannerStyled = styled.img`
    width: 600px;

    @media screen and (max-width: 770px){
        width: 90vw;
    }

    cursor: pointer;

`;