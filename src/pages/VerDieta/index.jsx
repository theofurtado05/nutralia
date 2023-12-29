import React from 'react';
import Header from '../../components/Header';
import ModeloPDf from '../../components/ModeloPDF';
import { PDFViewer } from '@react-pdf/renderer';

export const VerDieta = () => {
    return (
        <>
            <Header/>
            

            <div style={{width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <PDFViewer style={{
                width: '95%',
                height: '90vh'
            }}>
                <ModeloPDf 
                dieta={JSON.parse(localStorage.getItem('dietaGerada'))}
                treino={JSON.parse(localStorage.getItem('treino'))}
                objInfosPessoais={JSON.parse(localStorage.getItem('infoUsuario'))}
                />
            </PDFViewer>

        </div>
        </>
    )
}
