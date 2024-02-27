import React, { createContext, useContext, useEffect, useState } from "react";
import firebaseConfig from '../firebaseConfig';
import 'firebase/auth';
import 'firebase/database';
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { get, getDatabase, onValue, ref, set, child, update } from "firebase/database";
import { GetUserInfo } from "../services/metodos";

const AssinaturaContext = createContext({})
AssinaturaContext.displayName = 'AssinaturaContext'

const AssinaturaProvider = ({ children }) => {
    const [plano, setPlano] = useState()
    const [numTickets, setNumTickets] = useState()
    const [numTicketsUsados, setTicketsUsados] = useState()
    const [planoAtual, setPlanoAtual] = useState()
    const [dietasRestantes, setDietasRestantes] = useState()

    const [paymentObject, setPaymentObject] = useState(null)

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
            setPlanoAtual(data.plano)
            setTicketsUsados(data.ticketsUsados)
        })

        return numTickets
    }


    const ReduzirTicket = async () => {
        const ticketsRef = ref(database, `users/${userId}`)
        try{
            await update(ticketsRef, {tickets: numTickets - 1, ticketsUsados: numTicketsUsados + 1})
            console.log(`Tickets atualizados para ${numTickets - 1}`);
        } catch(error) {
            console.log(`Failed to update tickets for user ${userId}`, error)
        }
        
    }

    const GetDietasRestantesPromo = async () => {
        const promoRef = ref(database, `promocoes/`)
        onValue(promoRef, (snapshot) => {
            const data = snapshot.val()
            console.log(data)
            setDietasRestantes(data.dietasRestantes)
        })
    }

    
 


    return (
        <AssinaturaContext.Provider value={{ 
            numTickets,
            GetNumTickets,
            ReduzirTicket,
            planoAtual,
            GetDietasRestantesPromo,
            dietasRestantes,
            paymentObject, setPaymentObject    
        }}>
            {children}
        </AssinaturaContext.Provider>
    )
}


export const useAssinatura = () => {
    const context = useContext(AssinaturaContext)

    if(!context) {
        throw new Error("Erro ao usar o useDieta")
    }

    return context;
}

export {AssinaturaContext, AssinaturaProvider}

