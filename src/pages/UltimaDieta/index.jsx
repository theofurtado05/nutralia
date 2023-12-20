import { VerifLogin } from "../../services/auth";
import Header from "../../components/Header";
import { Button, TextField } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { StyledButton } from "../LandingPage/styles";

import ModeloPDf from "../../components/ModeloPDF";
      
import { PDFViewer, Document, Page, PDFDownloadLink} from '@react-pdf/renderer';

export const UltimaDieta = () => {
    const [dietaSalva, setDietaSalva] = useState("")
    const [infoUsuarioSalvo, setInfoUsuarioSalvo] = useState("")

    const dietaContent = useRef(null);

    const copiarDieta = (conteudo) => {
        // Cria um elemento de input temporário para copiar o texto
        const input = document.createElement('input');
        input.value = conteudo;
        document.body.appendChild(input);
        input.select();
    
        // Tenta copiar o texto para a área de transferência
        try {
          document.execCommand('copy');
        } catch (err) {
          console.error('Erro ao copiar: ', err);
        }
    
        // Remove o elemento de input temporário
        document.body.removeChild(input);
      };

    useEffect(()=>{
        VerifLogin()

        if(localStorage.getItem("@UltimaDieta:Nutrafity")){
            setDietaSalva(localStorage.getItem("@UltimaDieta:Nutrafity"))
        } else {
            setDietaSalva("Você não possui dieta salva.")
        }

        if(localStorage.getItem("@InfoUsuario:Nutrafity")){
            console.log(JSON.parse(localStorage.getItem("@InfoUsuario:Nutrafity")))
            setInfoUsuarioSalvo(JSON.parse(localStorage.getItem("@InfoUsuario:Nutrafity")))
        } else {
            setInfoUsuarioSalvo("Você não possui dados salvo.")
        }
    }, [])
    return (
        <>
            <Header/>
            <div style={{width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: '600px', width: '90%'}}>
                    <h1>Sua ultima dieta</h1>
                    
                    <TextField ref={dietaContent}
                        style={{width: '100%', height: '500px', marginTop: 20, marginBottom: 10, color: '#000', opacity: 1}}
                        multiline
                        rows={20}
                        maxRows={20}
                        disabled
                        value={dietaSalva && dietaSalva}
                    />
                    {localStorage.getItem('@UltimaDieta:Nutrafity') &&
                    <div style={{width: '90vw', maxWidth: '600px', display: 'flex', paddingBottom: 40, gap: 10}}>
                    <StyledButton variant="contained" style={{width: '100%'}} onClick={()=>{
                        copiarDieta(dietaSalva)
                            alert('Dieta copiada na area de transferência.')
                        
                    }}>
                        Copiar Dieta
                    </StyledButton>

                    <PDFDownloadLink style={{width: '100%', textDecoration: 'none'}} document={
                        <ModeloPDf 
                            dieta={dietaSalva}
                            objInfosPessoais={infoUsuarioSalvo}
                            />

                    } fileName="DietaNutrafity.pdf">

                    {({ blob, url, loading, error }) =>
                        loading ? 'Carregando PDF...' : 
                        
                        <StyledButton variant="contained" style={{
                            width: '100%',
                            background: 'var(--Secondary-color)',
                            fontWeight: 'bold'
                        }} onClick={()=>{
                            //SalvarDieta(url)
                        }}>Baixar Dieta em PDF</StyledButton>
                    }
                    </PDFDownloadLink>
                </div>
                    }
                    
                    
                    
                </div>    
            </div>

            
        </>
    )
}