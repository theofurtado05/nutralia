import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { usePerfil } from "../../../context/Perfil.context";

export const StyledDiv = styled.div`
    width: 200px;
    height: 100px;
    border-radius: 8px;
    background: var(--Card-PrimaryBackground);
    box-shadow: 0px 2px 3px 0px var(--Secondary-color);
    color: white;
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
    position: relative;
    h2{
        text-align: left;
        margin-top: -3px;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .helpIcon{
        opacity: 0.7;
        position: absolute;
        right: 5px;
        top: 5px;
        cursor: pointer;
    }

    @media screen and (max-width: 770px){
        width: 90%;
    }
    
`;

const CardInfo = ({cor, titulo, valor, medida, aviso}) => {
    const {setInfoModalState} = usePerfil()

   
    return(
    <>    
        <StyledDiv style={{background: `${cor}`}}>
            {aviso &&   <span className="helpIcon"  
                        onClick={()=>{setInfoModalState(true)}}
                        >
                            <HelpOutlineIcon fontSize={'small'}/>
                        </span>}
            <h2>{titulo}</h2>
            <span className="info"><span className="valor">{valor}</span>{medida}</span>
        </StyledDiv>

       
    </>
    )

    
}

export default CardInfo