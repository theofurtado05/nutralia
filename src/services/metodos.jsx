
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import firebaseConfig from '../firebaseConfig';
import 'firebase/auth';
import 'firebase/database';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { get, getDatabase, onValue, ref, set, child } from "firebase/database";

import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';

import DietaModelo from '../utils/DietaModelo.docx'

import {GerarDietaPrompt} from "./openai";



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


function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
  }


export const GerarDietaDocx = async (infoUsuario) => {
    const dietaPartes = [
        { manha: [] }, 
        { meioDia: [] },
        { tarde: [] },
        { noite: [] },
        { valorTotal: [] }
    ]


    const dietaCompleta = await GerarDietaPrompt(infoUsuario)
    //const dietaCompleta = `MANHA
                            //     - 2 Ovos cozidos com cebola e azeite de oliva: R$7,80
                            //     - ½ Sanduiche de atuma na torrada integral com azeite: R$5,25
                            //     - ½ Xícara de chá preto: R$1,00
                            //     Total: R$14,05
                            // `


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

    loadFile(
        DietaModelo, (error, content) => {
            if(error){
                throw error;
            }
            var zip = new PizZip(content)
            var doc = new Docxtemplater(zip, {
                paragraphLoop: false,
                linebreaks: false,
            })

            doc.setData(objInfoUsuario)

            try{
                doc.render()
            } catch (error) {
                function replaceErrors(key, value) {
                    if(value instanceof Error) {
                        return Object.getOwnPropertyNames(value)
                        .reduce(function (error, key){
                            error[key] = value[key]
                            return error
                        }, {})
                    }
                    return value
                }
                console.log(JSON.stringify({error: error}, replaceErrors))

                if(error.properties && error.properties.errors instanceof Array){
                    const errorMessages = error.properties.errors
                    .map(function (error) {
                        return error.properties.explanation;
                    })
                    .join('\n');
                    console.log('errorMessages', errorMessages);
                }
                throw error;
            }
            var out = doc.getZip().generate({
                type: 'blob',
                mimeType:
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                }); //Output the document using Data-URI
                saveAs(out, 'PlanoAlimentarPersonalizado.docx');
            
        }
    )
}

