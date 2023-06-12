import React, { useEffect, useState } from "react";
import {Login} from '../../services/auth'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {DivPai, StyledInput, StyledButton, StyledLink} from './styles'

import { useNavigate, Link } from "react-router-dom";

const CardLogin = () => {
    const [email, setEmail] = useState();
   
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        console.log(email, password)
        Login(email, password)
       
    }

    const goToRegistro = () => {
        navigate('../Registro')
    }

    return(
        <>
            <DivPai>
                <StyledInput label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <StyledInput id="outlined-basic" label="Senha" variant="outlined" type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}/>

                <StyledButton variant="contained" style={{background: 'var(--Primary-color)'}} onClick={handleClick}>Entrar</StyledButton>

                <StyledButton variant="outlined" style={{color: 'var(--Primary-color)'}} onClick={goToRegistro}>Registre-se</StyledButton>

                <StyledLink to={'../EsqueciMinhaSenha'}>
                    Esqueci minha senha
                </StyledLink>
            </DivPai>

            

        </>
    )
}

export default CardLogin