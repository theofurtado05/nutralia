import React, { useState, useEffect } from "react";
import {DivPai, StyledInput, StyledButton, StyledLink, Logotipo, SpanError, StyledMaskInput} from '../CardLogin/styles'
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import 'firebase/auth';
import 'firebase/database';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

import 'react-phone-input-2/lib/style.css';
import ReactPhoneInput from 'react-phone-input-2';

import Logo from '../../assets/logo.png'

import {verifLogadoAuth} from '../../services/auth'


const CardRegister = () => {
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState();
    const [confirmarSenha, setConfirmarSenha] = useState();
    const [celular, setCelular] = useState();

    const [errorStatus, setErrorStatus] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const navigate = useNavigate();


    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const database = getDatabase(app)

    const auth = getAuth(app);

    const handleClick = (e) => {
        //e.preventDefault();
        
        if (senha !== confirmarSenha) {
          setErrorMsg('As senhas devem ser iguais.');
          setErrorStatus(true);
          return;
        } else if(senha.length < 6){
            setErrorMsg('A senha deve ter 6 ou mais caracteres.')
            setErrorStatus(true)
            return;
        }else if (!celular || celular.length <= 10) {
          setErrorMsg('Número de celular incompleto.');
          setErrorStatus(true);
          return;
        }
          
        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential)=>{
            const user = userCredential.user;
            console.log(user.uid)
        
            set(ref(database, `users/${user.uid}`), {
                email: email,
                celular: celular,
                tickets: 0,
                compras: 0,
                kg: 0,
                altura: 0,
                objetivo: "",
                intolerancia: "",
            });

            console.log('Usuário registrado com sucesso!');
            localStorage.setItem('@User:Nutrafity', user);
            localStorage.setItem('@UserId:Nutrafity', user.uid);
            localStorage.setItem('@Email:Nutrafity', email);
            

        }).catch((error)=>{

            switch (error.code) {
                case "auth/invalid-email":
                  setErrorMsg("E-mail inválido.");
                  break;
        
                case "auth/email-already-in-use":
                  setErrorMsg("E-mail em uso.");
                  break;
        
                case "auth/weak-password":
                  setErrorMsg("A senha deve conter no mínimo 6 caracteres.");
                  break;
        
                default:
                  setErrorMsg("Erro ao cadastrar usuário.");
                  break;
              
              }

        })
            
            
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