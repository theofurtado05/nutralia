import React, { useEffect, useState } from "react";
import { DivPai } from "./styles";
import Logo from '../../assets/logoHorizontal.png'
import Drawer from "../Drawer";

const Header = () => {

    return(
        <>
            <DivPai>
                <Drawer/>
                <img style={{width: '230px'}} src={Logo}/>
            </DivPai>
        </>
    )
}

export default Header