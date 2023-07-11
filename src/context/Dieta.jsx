import React, { createContext, useContext, useEffect, useState } from "react";
import firebaseConfig from '../firebaseConfig';
import 'firebase/auth';
import 'firebase/database';
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { get, getDatabase, onValue, ref, set, child } from "firebase/database";
import { GetUserInfo } from "../services/metodos";

const DietaContext = createContext({})
DietaContext.displayName = 'DietaContext'

const DietaProvider = ({ children }) => {
    const [plano, setPlano] = useState()
    const [numTickets, setNumTickets] = useState()

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const database = getDatabase(app)

    const auth = getAuth(app);

    const GetNumTickets = () => {
        const ticketsRef = ref(database, `users/${localStorage.getItem('@UserId:Nutrafity')}`)
        onValue(ticketsRef, (snapshot) => {
            const data = snapshot.val()
            setNumTickets(data.tickets)
        })

        return numTickets
    }



    return (
        <DietaContext.Provider value={{ 
            numTickets,
            GetNumTickets          
        }}>
            {children}
        </DietaContext.Provider>
    )
}


export const useDieta = () => {
    const context = useContext(DietaContext)

    if(!context) {
        throw new Error("Erro ao usar o useDieta")
    }

    return context;
}

export {DietaContext, DietaProvider}

