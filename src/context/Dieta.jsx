import React, { createContext, useContext, useEffect, useState } from "react";
import firebaseConfig from '../firebaseConfig';
import 'firebase/auth';
import 'firebase/database';
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { get, getDatabase, onValue, ref, set, child, update } from "firebase/database";
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

    const userId = localStorage.getItem('@UserId:Nutrafity')

    const GetNumTickets = () => {
        const ticketsRef = ref(database, `users/${userId}`)
        onValue(ticketsRef, (snapshot) => {
            const data = snapshot.val()
            setNumTickets(data.tickets)
        })

        return numTickets
    }


    const ReduzirTicket = async () => {
        const ticketsRef = ref(database, `users/${userId}`)
        try{
            await update(ticketsRef, {tickets: numTickets - 1})
            console.log(`Tickets atualizados para ${numTickets - 1}`);
        } catch(error) {
            console.log(`Failed to update tickets for user ${userId}`, error)
        }
        
    }
 


    return (
        <DietaContext.Provider value={{ 
            numTickets,
            GetNumTickets,
            ReduzirTicket         
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
