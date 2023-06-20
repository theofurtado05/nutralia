import React, { useState, useEffect } from "react";
import {DivPai, StyledInput, StyledButton, StyledLink} from '../CardLogin/styles'
import { useNavigate } from "react-router-dom";

import {Register} from '../../services/auth'

const CardRegister = () => {
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState();
    const [confirmarSenha, setConfirmarSenha] = useState();

    const [errorMsg, setErrorMsg] = useState()

    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault()
        if(senha != confirmarSenha){
            setErrorMsg('As senhas devem ser iguais.')
        } else {
            Register(email, senha)
            
        }
    }

    const goToLogin = () => {
        navigate('../')
    }

    return(
        <>
            <DivPai>
                <StyledInput label="Email" 
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                />

                <StyledInput 
                id="outlined-basic" 
                label="Senha" 
                variant="outlined" 
                type="password"
                onChange={(e) => setSenha(e.target.value)}
                />


                <StyledInput 
                id="outlined-basic" 
                label="Confirmar Senha" 
                variant="outlined" 
                type="password"
                onChange={(e) => setConfirmarSenha(e.target.value)}
                />

                <StyledButton variant="contained" 
                style={{
                    background: 'var(--Primary-color)'
                }}
                onClick={handleClick}
                >Registrar
                </StyledButton>

                <StyledButton variant="outlined" style={{color: 'var(--Primary-color)', border: 'var(--Primary-color) 1px solid'}} onClick={goToLogin}>Já tenho conta</StyledButton>

            </DivPai>
        </>
    )
}

export default CardRegister