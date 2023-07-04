import React, { useState, useEffect } from "react";
import {DivPai, StyledInput, StyledButton, StyledLink, Logotipo, SpanError, StyledMaskInput} from '../CardLogin/styles'
import { useNavigate } from "react-router-dom";

import 'react-phone-input-2/lib/style.css';
import ReactPhoneInput from 'react-phone-input-2';

import Logo from '../../assets/logo.png'

import {Register} from '../../services/auth'

const CardRegister = () => {
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState();
    const [confirmarSenha, setConfirmarSenha] = useState();
    const [celular, setCelular] = useState();

    const [errorStatus, setErrorStatus] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault()

        if(senha != confirmarSenha){
            setErrorMsg('As senhas devem ser iguais.')
            setErrorStatus(true)

        } else if(!celular || celular.length <= 10){
            setErrorStatus(true)
            setErrorMsg('Número de celular incompleto.')

        } else {

            try{
            
                const response = await Register(email, senha, celular)
                setErrorStatus(false)
                

            } catch(error){
                console.log(error.code, ': erro!')
                setErrorStatus(true)
                switch(error.code){
                    case "auth/invalid-email":
                        setErrorMsg("E-mail invalido.")
                        break;

                    case "auth/email-already-in-use":
                        setErrorMsg("Email em uso.")
                        break;

                    case "auth/weak-password":
                        setErrorMsg("A senha deve conter no minimo 6 caracteres.")
                        break;

                    default:
                        setErrorMsg("Erro ao cadastrar usuário.")
                        break;
                }
            }
        }
    }

    const goToLogin = () => {
        navigate('../')
    }

    return(
        <>
            <DivPai style={{paddingBottom: '20px'}}>
                <Logotipo src={Logo}/>

                <StyledInput 
                label="Email" 
                onChange={(e) => setEmail(e.target.value)}
                errorStatus={errorStatus}
                />

                <StyledInput 
                label="Senha" 
                type="password"
                onChange={(e) => setSenha(e.target.value)}
                errorStatus={errorStatus}
                />


                <StyledInput 
                label="Confirmar Senha" 
                type="password"
                onChange={(e) => setConfirmarSenha(e.target.value)}
                errorStatus={errorStatus}
                />

                
                <div>
                    <ReactPhoneInput
                        country={'br'}
                        onChange={(value)=>{setCelular(value)}}
                        errorStatus={errorStatus}
                        style={{
                            width: 'auto !important'
                        }}
                    />  
                </div>
                  
                {errorStatus && <SpanError>{errorMsg}</SpanError>}

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