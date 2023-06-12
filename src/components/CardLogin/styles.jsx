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
    gap: 20px;
`;

export const StyledInput = styled(TextField)`
    width: 380px;
  
    outline-color: var(--Primary-color);

    .MuiInputLabel-root.Mui-focused {
        color: var(--Primary-color); 
        border: var(--Primary-color);
        outline-color: var(--Primary-color);

    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: var(--Primary-color);
        outline-color: var(--Primary-color);
    }
   
`;

export const StyledButton = styled(Button)`
    width: 380px;
    cursor: pointer;
`;

export const StyledLink = styled(Link)`
    text-transform: none;
    color: var(--Primary-color);
    cursor: pointer;
    text-decoration: none;
    
`;

