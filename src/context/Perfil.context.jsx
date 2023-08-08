import React, { createContext, useContext, useEffect, useState } from "react";
import firebaseConfig from '../firebaseConfig';
import 'firebase/auth';
import 'firebase/database';
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { get, getDatabase, onValue, ref, set, child, update } from "firebase/database";
import { GetUserInfo } from "../services/metodos";

const PerfilContext = createContext({})
PerfilContext.displayName = 'PerfilContext'

const PerfilProvider = ({ children }) => {
    const [infoUser, setInfoUser] = useState()
    const [acompanhamento, setAcompanhamento] = useState()
    const [meta, setMeta] = useState()
    const [infoAtual, setInfoAtual] = useState()
    const [imc, setImc] = useState()


    const [infoModalState, setInfoModalState] = useState(false)
  
    //banco de dados - NAO MEXER
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const database = getDatabase(app)
    const auth = getAuth(app);

    //Id do usuario
    const userId = localStorage.getItem('@UserId:Nutrafity')


    useEffect(()=>{
        GetInfoUser()
    }, [])

    useEffect(()=>{
        //CalcIMC(infoAtual.altura, infoAtual.kg)
    }, [infoAtual])


    //Consultas
    const GetInfoUser = () => {
        const userRef = ref(database, `users/${userId}`)
        onValue(userRef, (snapshot) => {
            const data = snapshot.val()
            setInfoUser(data)
            setAcompanhamento(data.acompanhamento)
            setMeta(data.acompanhamento.meta)
            setInfoAtual(data.acompanhamento.infoAtual)
        })
    }

    const CalcIMC = (altura, peso) => {
        //imc = peso / (altura * altura)
        const imc = peso / (altura * altura)
        setImc(imc)
    }


    
 


    return (
        <PerfilContext.Provider value={{ 
            infoUser,
            meta,
            acompanhamento,
            infoAtual,
            setInfoModalState,
            infoModalState
        }}>
            {children}
        </PerfilContext.Provider>
    )
}


export const usePerfil = () => {
    const context = useContext(PerfilContext)

    if(!context) {
        throw new Error("Erro ao usar o useDieta")
    }

    return context;
}

export {PerfilContext, PerfilProvider}

