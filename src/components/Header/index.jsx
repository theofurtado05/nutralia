import React, { useEffect, useState } from "react";
import { DivPai } from "./styles";
import Logo from '../../assets/logoHorizontal.png'
import Drawer from "../Drawer";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

    return(
        <>
            <DivPai>
                <Drawer/>
                <img style={{width: '230px'}} src={Logo} onClick={()=>{
                    navigate('/Menu')
                }}/>
            </DivPai>
        </>
    )
}

export default Header