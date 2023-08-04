import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from '../pages/Login'
import {useWhitelabel} from '../context/Whitelabel'
import React, {useEffect} from 'react';
import RegisterPage from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import Menu from '../pages/Menu';

import Planos from '../pages/Planos';
import LandingPage from '../pages/LandingPage';
import Perfil from '../pages/Perfil';


export default function Router(){
    const {coresRoot} = useWhitelabel();

    return(
        <>
            <style>
                {coresRoot}
            </style>
            <BrowserRouter>
                <Routes>
                    <Route path="/LP" element={<LandingPage/>}/>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/Registro/:afid" element={<RegisterPage/>}/>
                    <Route path="/Registro" element={<RegisterPage/>}/>
                    <Route path="/EsqueciMinhaSenha" element={<ForgotPassword/>}/>
                    <Route path="/Menu" element={<Menu/>}/>
                    <Route path="/Planos" element={<Planos/>}/>
                    <Route path="/Perfil" element={<Perfil/>}/>
                    
                </Routes>
            </BrowserRouter>
            
      


        </>

    )
}