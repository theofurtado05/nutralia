import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


export const DivPai = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90vh;
    gap: 10px;
    @media screen and (max-width: 770px){
        max-width: 90vh;
        overflow: hidden;
    }
`;

export const StyledInput = styled(TextField)`
    width: 300px;
    
    outline-color: var(--Primary-color);
    border: none !important;

    .MuiInputBase-input {
        color: #555555 !important; 
        //border: red;
        outline: ${props => props.errorStatus ? 'red 2px solid !important' : 'none'};
        //outline-color: var(--Primary-color) !important;
        height: 10px !important;
        align-items: center;
        padding: 23px 10px;
        border-radius: 10px;

        &:focus{
            outline: red !important;
        }

        &:hover{
            border: ${props => props.errorStatus ? 'none !important' : ''};
        }
        
    }
`;

export const StyledButton = styled(Button)`
    width: 300px;
    cursor: pointer;
    border-radius: 50px !important;
`;

export const StyledLink = styled(Link)`
    text-transform: none;
    color: var(--Primary-color);
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
`;


export const Logotipo = styled.img`
    width: 350px;

    @media screen and (max-width: 770px){
        width: 300px;
    }
`;

export const SpanError = styled.span`
    color: red;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 600;
    text-align: left;
    width: 300px;
`;