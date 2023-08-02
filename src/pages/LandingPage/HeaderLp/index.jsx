import React, { useState } from "react";
import {Header} from './styles'
import LogoHorizontal from '../../../assets/logoHorizontal.png'
import { useEffect } from "react";
import TemporaryDrawer from '../DrawerLp'

const HeaderLp = () => {
    const [isMobile, setIsMobile] = useState()

    useEffect(()=>{
        setIsMobile(window.innerWidth <= 769)
    }, [])
    return(
        <>
        {isMobile 
        ? 
            <Header>
                <div style={{display: 'flex', alignItems: 'center', gap: '30px'}}>
                    <img src={LogoHorizontal} style={{width: '200px'}}/>
                
                </div>
            
                <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                    <TemporaryDrawer/>
                                    
                </div>
            </Header> 
        : 
        <Header>
            <div style={{display: 'flex', alignItems: 'center', gap: '30px'}}>
                <img src={LogoHorizontal} style={{width: '200px'}}/>
                <a href="">Home</a>
                <a href="">Sobre nós</a>
                <a href="">Preços</a>
            </div>
            
            <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                <a href="/login">Entrar</a>
                <button>Registrar</button>
                
            </div>
        </Header>
        }
        
            </>
    )
}

export default HeaderLp