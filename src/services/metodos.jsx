
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
                            // `..


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



const Template = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <title>Nutrafity</title>
</head>
<body>
    
    <style>
        :root{
            --Primary-font: 'Inter';
            --Secondary-font: 'Roboto';
            --Primary-color: #1C9E22;
            --Secondary-color: #0a730f;
            --Icon-Background: #8ee892b0;
            --Card-PrimaryBackground: #1c9e22d7;
        }
        body{
            display: flex;
            flex-direction: column;
            width: 100vw;
            height: 100%;
            justify-content: center;
            align-items: center;

        }
        .titulo{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFF;
            border-radius: 50px;
        }
        .titulo h1{
            background: var(--Primary-color);
            padding: 5px 60px;
            border-radius: 50px;
        }
        .infoPessoal{
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 15px;
            justify-content: center;
            align-items: center;
            padding-bottom: 50px;
        }
        
        .tituloInfo{
            font-weight: bold;
            font-family: var(--Primary-font);
        }
        .valorInfo{
            font-weight: 500;
        }
        .dietaPeriodo{
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: left;
            text-align: left;
            background-image: url(https://api-nutrafity.vercel.app/imagem/logoTemplateTransparente.png); 
            background-repeat: no-repeat; 
            background-size: 300px 300px;
            background-position: center;
            
            /* background-blend-mode:lighten; */
        }
        
        .dietaPeriodo .periodo h1{
            background-color: var(--Card-PrimaryBackground);
            width: 150px;
            text-align: center;
            border-radius: 50px;
            font-size: 20px;
            padding: 5px 10px;
            color: #fff;
            font-family: var(--Secondary-font);
        }

        .listaDieta{
            gap: 10px;
        }
        .listaDieta li{
            padding: 4px;
            font-family: sans-serif;
            font-weight: 500;
        }

        .dia{
            width: 90%;
            font-family: var(--Secondary-font);
            font-weight: 100;
            font-size: 16px;
            text-decoration: underline;
            color: var(--Primary-color)
        }
        .logo{
            width: 200px;    
            
        }

      </style>

    <div class="titulo" style="font-family: var(--Primary-font);">
        <h1>Plano Alimentar</h1>
    </div>

    <div class="infoPessoal" >
        <div style="display: flex; flex-direction: row; gap: 10px; width: 90%; align-self: center; align-items: center; justify-content: center;">
            <span class="tituloInfo">Altura: <span class="valorInfo">{altura}m</span></span>
            <span class="tituloInfo">Peso: <span class="valorInfo">{kg}kg</span></span>
            
        </div>
        
        
        <div  style="display: flex; flex-direction: column; gap: 10px; width: 90%; align-self: center; align-items: center; justify-content: center;">
        <span class="tituloInfo">Objetivo: <span class="valorInfo">{objetivo}</span></span>
        <span class="tituloInfo">Intolerância: <span class="valorInfo">{intolerancia}</span></span>
        </div>
    </div>
    <!-- <div class="dia">
        <h1>Segunda-feira</h1>
    </div> -->

    <div class="dietaPeriodo">
        <div class="periodo">
            <h1>Manhã</h1>
            <ul class="listaDieta">
                <li>{segundaManha1}</li>
                <li>{segundaManha2}</li>
                <li>{segundaManha3}</li>
                <li>{segundaManhaValor}</li>
            </ul>
        </div>

        <div class="periodo">
            <h1>Meio Dia</h1>
            <ul class="listaDieta">
                <li>{segundaMeioDia1}</li>
                <li>{segundaMeioDia2}</li>
                <li>{segundaMeioDia3}</li>
                <li>{segundaMeioDiaValor}</li>
            </ul>
        </div>

        <div class="periodo">
            <h1>Tarde</h1>
            <ul class="listaDieta">
                <li>{segundaTarde1}</li>
                <li>{segundaTarde2}</li>
                <li>{segundaTarde3}</li>
                <li>{segundaTardeValor}</li>
            </ul>
        </div>

        <div class="periodo">
            <h1>Noite</h1>
            <ul class="listaDieta">
                <li>{segundaNoite1}</li>
                <li>{segundaNoite2}</li>
                <li>{segundaNoite3}</li>
                <li>{segundaNoiteValor}</li>
            </ul>
        </div>
    </div>
 
    


    <!-- <script type="module" src="./script.js"></script> -->
</body>
</html>`