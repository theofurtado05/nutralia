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
    height: 100vh;
    gap: 10px;
`;

export const StyledInput = styled(TextField)`
    width: 300px;
    
    
    border: none;
    outline-color: var(--Primary-color);
    

    .MuiInputLabel-root.Mui-focused {
        color: var(--Primary-color) !important; 
        border: var(--Primary-color) !important;
        outline-color: var(--Primary-color) !important;
        
    }

    .MuiOutlinedInput-root .Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: var(--Primary-color) !important;
        outline-color: var(--Primary-color) !important;
        border: none !important;
        
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
    
`;

