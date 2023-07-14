import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from '../pages/Login'
import {useWhitelabel} from '../context/Whitelabel'
import React, {useEffect} from 'react';
import RegisterPage from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import Menu from '../pages/Menu';

import Planos from '../pages/Planos';


export default function Router(){
    const {coresRoot} = useWhitelabel();

    return(
        <>
            <style>
                {coresRoot}
            </style>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/Registro" element={<RegisterPage/>}/>
                    <Route path="/EsqueciMinhaSenha" element={<ForgotPassword/>}/>
                    <Route path="/Menu" element={<Menu/>}/>
                    <Route path="/Planos" element={<Planos/>}/>
                </Routes>
            </BrowserRouter>
            
      


        </>

    )
}