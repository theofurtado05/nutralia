import React, { useEffect, useState } from "react";
import {Login} from '../../services/auth'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {DivPai, StyledInput, StyledButton, StyledLink, Logotipo, SpanError} from './styles'

import Logo from '../../assets/logo.png'

import { useNavigate, Link } from "react-router-dom";

const CardLogin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [errorStatus, setErrorStatus] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault()
        try{
            const response = await Login(email, password)
            setErrorStatus(false)
        } catch(error){
            console.log(error)
            setErrorStatus(true)
            switch(error){
                case "auth/invalid-email":
                    setErrorMsg("E-mail invalido.")
                    break;

                case "auth/wrong-password":
                    setErrorMsg("Senha incorreta.")
                    break;

                case "auth/user-not-found":
                    setErrorMsg("Usuário não registrado.")
                    break;

                default:
                    setErrorMsg("Erro ao processar seus dados.")
                    break;
            }
        }

         
        

    }

    const goToRegistro = () => {
        navigate('../Registro')
    }

    return(
        <>
            <DivPai>
                <Logotipo src={Logo}/>

                <StyledInput label="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                errorStatus={errorStatus}/>
                
                <StyledInput label="Senha" variant="outlined" type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                errorStatus={errorStatus}/>

                {errorStatus && <SpanError>{errorMsg}</SpanError>}

                <StyledButton variant="contained" style={{background: 'var(--Primary-color)'}} onClick={handleClick}>Entrar</StyledButton>

                <StyledButton variant="outlined" style={{color: 'var(--Primary-color)', border: 'var(--Primary-color) 1px solid'}} onClick={goToRegistro}>Registre-se</StyledButton>

                <StyledLink to={'../EsqueciMinhaSenha'}>
                    Esqueci minha senha
                </StyledLink>
            </DivPai>

            

        </>
    )
}

export default CardLogin