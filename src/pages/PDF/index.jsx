import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import axios from 'axios';
import ModeloPDf from "../../components/ModeloPDF";
import { PDFViewer } from '@react-pdf/renderer';

axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';


const PDF = () => {
    


    return(
    <>
        <Header/>
        <div style={{width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <PDFViewer style={{
                width: '95%',
                height: '90vh'
            }}>
                <ModeloPDf/>
            </PDFViewer>

        </div>
    </>
    
    )
}

export default PDF