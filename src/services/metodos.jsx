
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
import jsPDF from 'jspdf';
import html2pdf from 'html2pdf.js';
import {getFontEmbedCSS, toBlob, toCanvas, toJpeg, toPixelData, toPng, toSvg} from 'html-to-image';


import DietaModelo from '../utils/DietaModelo.docx'

import {GerarDietaPrompt, TestePrompt, GerarMetaDiaria} from "./openai";



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
                saveAs(out, 'Nutrafity.docx');
            })
}

export const GerarMetaObj = async (infoUsuario) => {
    const metaDiariaBruto = await GerarMetaDiaria(infoUsuario)   

    const metaDiariaObj = {
        proteina: parseFloat(metaDiariaBruto.match(/Proteina: (\d+)/)[1]),
        carboidrato: parseFloat(metaDiariaBruto.match(/Carboidrato: (\d+)/)[1]),
        lipidio: parseFloat(metaDiariaBruto.match(/Lipídio: (\d+)/)[1]),
    }

    console.log(metaDiariaObj)
    console.log(metaDiariaBruto)
    //const dietaCompleta = await TestePrompt()
    return metaDiariaObj
       
}

export const GerarDietaDiaria = async (obj, objMetaDiaria) => {
    const dietaDiariaBruto = await TestePrompt(obj, objMetaDiaria)

    console.log(dietaDiariaBruto)
    
}



window.onload = () => {
    const objMetaDiaria = GerarMetaObj({altura: '1,76', kg: '74', objetivo: 'Hipertrofia', intolerancia: 'Sem intolerancia'})
    
    GerarDietaDiaria({altura: '1,76', kg: '74', objetivo: 'Hipertrofia', intolerancia: 'Sem intolerancia'}, objMetaDiaria)
}