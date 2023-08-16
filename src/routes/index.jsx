import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from '../pages/Login'
import {useWhitelabel} from '../context/Whitelabel'
import React, {useEffect, useState} from 'react';
import RegisterPage from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import Menu from '../pages/Menu';

import Planos from '../pages/Planos';
import LandingPage from '../pages/LandingPage';
import Perfil from '../pages/Perfil';
import TermosDeUso from '../pages/TermosDeUso'
import PoliticasDePrivacidade from '../pages/PoliticasDePrivacidade';
import Faq from '../pages/Faq';
import PDF from '../pages/PDF';


export default function Router(){
    const {coresRoot} = useWhitelabel();

    const [signed, setSigned] = useState()

    useEffect(()=>{
        if(localStorage.getItem('@UserId:Nutrafity')){
            setSigned(true)
        } else {
            setSigned(false)
        }
    }, [])

    return(
        <>
            <style>
                {coresRoot}
            </style>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/:afid" element={<LandingPage/>}/>
                    <Route path="/Login" element={<LoginPage/>}/>
                    <Route path="/Registro/:afid" element={<RegisterPage/>}/>
                    <Route path="/Registro" element={<RegisterPage/>}/>
                    <Route path="/EsqueciMinhaSenha" element={<ForgotPassword/>}/>
                    <Route path="/Menu" element={<Menu/>}/>
                    <Route path="/Planos" element={<Planos/>}/>
                    <Route path="/Perfil" element={<Perfil/>}/>
                    <Route path="/pdf" element={<PDF/>}/>
                    {/* <Route path="/receitaDiaria" element={<></>}/>
                    <Route path="/todasReceitas" element={<></>}/> */}

                    <Route path="/TermosDeUso" element={<TermosDeUso/>}/>
                    <Route path="/Politicas" element={<PoliticasDePrivacidade/>}/>
                    <Route path="/Faq" element={<Faq/>}/>
                </Routes>
            </BrowserRouter>
            
      


        </>

    )
}