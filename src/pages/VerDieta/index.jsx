import React from 'react';
import Header from '../../components/Header';
import ModeloPDf from '../../components/ModeloPDF';
import { PDFViewer, Canvas, PDFDownloadLink } from '@react-pdf/renderer';
import { StyledButton } from '../../components/CardLogin/styles';

export const VerDieta = () => {
    return (
        <>
            <Header/>
            

            <div style={{width: '100%', maxWidth: '95vw', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10, flexDirection: 'column'}}>
            <PDFViewer showToolbar={true} style={{
                width: '90%',
                height: '70vh',
                alignSelf: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflowX: 'hidden',
                overflowY: 'scroll',
                margin: 0,
                padding: 0.
            }}>
                <ModeloPDf 
                dieta={JSON.parse(localStorage.getItem('dietaGerada'))}
                treino={JSON.parse(localStorage.getItem('treino'))}
                objInfosPessoais={JSON.parse(localStorage.getItem('infoUsuario'))}
                />
                
            </PDFViewer>

            <PDFDownloadLink style={{width: '100%', textDecoration: 'none', paddingTop: '5px'}} document={
                                <ModeloPDf 
                                dieta={JSON.parse(localStorage.getItem('dietaGerada'))}
                                treino={JSON.parse(localStorage.getItem('treino'))}
                                objInfosPessoais={JSON.parse(localStorage.getItem('infoUsuario'))}
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
        </>
    )
}
