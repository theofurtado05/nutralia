
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import firebaseConfig from '../firebaseConfig';
import 'firebase/auth';
import 'firebase/database';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { get, getDatabase, onValue, ref, set, child } from "firebase/database";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app)

const auth = getAuth(app);




export const GetUserInfo = (userId) => {
    
    const ticketsRef = ref(database, `users/${userId}`)
    onValue(ticketsRef, (snapshot) => {
        const data = snapshot.val()
        //console.log(data.tickets)
        
    })

    
}



export const GerarDietaDocx = (infoUsuario) => {
    const dietaPartes = [
        { manha: [] }, 
        { meioDia: [] },
        { tarde: [] },
        { noite: [] },
        { valorTotal: [] }
    ]

    try {
        //const dietaCompleta = await gerarDieta(infoUsuario)
        const dietaCompleta = `MANHA
                                    - 2 Ovos cozidos com cebola e azeite de oliva: R$7,80
                                    - ½ Sanduiche de atuma na torrada integral com azeite: R$5,25
                                    - ½ Xícara de chá preto: R$1,00
                                    Total: R$14,05
                              `


        if(dietaCompleta) {
            const periodos = dietaCompleta.split(`\n\n`)
            let contador = -1

            periodos.forEach((periodo, index) => {
                const refeicoes = periodo.split('\n')
                
                refeicoes.forEach((refeicao, i) => {

                    if(i == 0){
                        contador += 1
                    }

                    if(contador == 0){
                        dietaPartes[0].manha.push(refeicao)
                    } else if (contador == 1){
                        dietaPartes[1].meioDia.push(refeicao)
                    } else if (contador == 2){
                        dietaPartes[2].tarde.push(refeicao)
                    } else if (contador == 3){
                        dietaPartes[3].noite.push(refeicao)
                    } else {
                        dietaPartes[4].valorTotal.push(refeicao)
                    }

                })
            })
        }
        
        //hora de passar para o docx
        const objInfoUsuario = {
            //dieta
            manha1: dietaPartes[0].manha[1],
            manha2: dietaPartes[0].manha[2],
            manha3: dietaPartes[0].manha[3],
            valorManha: dietaPartes[0].manha[4],

            meiodia1: dietaPartes[1].meioDia[1],
            meiodia2: dietaPartes[1].meioDia[2],
            meiodia3: dietaPartes[1].meioDia[3],
            valorMeioDia: dietaPartes[1].meioDia[4],

            tarde1: dietaPartes[2].tarde[1],
            tarde2: dietaPartes[2].tarde[2],
            tarde3: dietaPartes[2].tarde[3],
            valorTarde: dietaPartes[2].tarde[4],

            noite1: dietaPartes[3].noite[1],
            noite2: dietaPartes[3].noite[2],
            noite3: dietaPartes[3].noite[3],
            valorNoite: dietaPartes[3].noite[4],

            objetivo: infoUsuario.objetivo,
            peso: infoUsuario.peso,
            altura: infoUsuario.altura,
            intolerancia: infoUsuario.intolerancia,
        }

    }catch(error){
        console.log(error, ' : erro ao gerar a Dieta Docx')
    }
}