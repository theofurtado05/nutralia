import React, { useState } from "react";
import {Header} from './styles'
import LogoHorizontal from '../../../assets/logoHorizontal.png'
import { useEffect } from "react";
import TemporaryDrawer from '../DrawerLp'
import { useNavigate } from "react-router-dom";

const HeaderLp = () => {
    const [isMobile, setIsMobile] = useState()

    const navigate = useNavigate()

    const handleRegistrar = () => {
        navigate('#precos')
    }

    useEffect(()=>{
        setIsMobile(window.innerWidth <= 769)
    }, [])
    return(
        <>
        {isMobile 
        ? 
            <Header>
                <div style={{display: 'flex', alignItems: 'center', gap: '30px'}}>
                    <a href="/">
                    <img src={LogoHorizontal} style={{width: '200px'}}/>
                    </a>
                
                </div>
            
                <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                    <TemporaryDrawer/>
                                    
                </div>
            </Header> 
        : 
        <Header>
            <div style={{display: 'flex', alignItems: 'center', gap: '30px'}}>
                <a href="/">
                <img src={LogoHorizontal} style={{width: '200px'}}/>
                </a>
                <a href="/">Home</a>
                <a href="#funcionalidades">Funcionalidades</a>
                <a href="#precos">Preços</a>
            </div>
            
            <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                <a href="/login">Entrar</a>
                <button><a href="#precos" style={{textDecoration: 'none', color: '#FFF'}}>
                    Registrar
                </a></button>
                
            </div>
        </Header>
        }
        
            </>
    )
}

export default HeaderLp