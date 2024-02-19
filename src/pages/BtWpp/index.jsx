import React from "react";
import { StyledButton } from "../LandingPage/styles";

export const BtWpp = () => {
    const handleClick = () => {
        window.open('https://wa.me/558597030829?text=Ol%C3%A1%2C+quero+garantir+minha+dieta+do+Nutrafity.com', 'blank')
    }
    return (
        <div style={{width: '100vw', height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <h2>
                Clique no botão abaixo!
            </h2>
            <StyledButton onClick={handleClick} className="btWpp">
                Clique aqui para continuar!
            </StyledButton>
            <style>
                {`
                    .btWpp:hover{
                        background-color: #058b36;
                    }
                `}
            </style>
        </div>
    )
}