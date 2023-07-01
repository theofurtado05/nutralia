import React, {useState} from "react";
import {DivPai, StyledInput, StyledButton, StyledLink, Logotipo } from "../CardLogin/styles";

import Logo from '../../assets/logo.png'

const CardEsqueciSenha = () => {
    const [email, setEmail] = useState()

    const handleClick = () => {
        console.log('enviando...')
    }

    return(
        <>
            <DivPai>
                <Logotipo src={Logo}/>

                <StyledInput label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
                
                <StyledButton variant="contained" style={{background: 'var(--Primary-color)'}} onClick={handleClick}>Enviar Recuperação</StyledButton>

                <StyledLink to={'../'}>
                    Voltar
                </StyledLink>
            </DivPai>

        </>
    )
}

export default CardEsqueciSenha