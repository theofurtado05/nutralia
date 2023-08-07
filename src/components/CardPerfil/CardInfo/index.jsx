import React, { useEffect } from "react";
import styled from "styled-components";

export const StyledDiv = styled.div`
    width: 200px;
    height: 100px;
    border-radius: 8px;
    background: var(--Card-PrimaryBackground);

    @media screen and (max-width: 770px){
        width: 150px;
    }
    
`;

const CardInfo = ({cor, titulo, valor, medida}) => {
   
    return(
    <StyledDiv style={{background: `${cor}`}}>
        <h2>{titulo}</h2>
        <span><span>{valor}</span>{medida}</span>
    </StyledDiv>
    )
}

export default CardInfo