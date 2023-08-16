import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import PDFDocument from 'pdfkit';
import blobStream from 'blob-stream';

const PDF = () => {
    const [urlPdf, setUrlPdf] = useState()

    

      useEffect(()=>{
        const fetchData = async () => {

        }

        fetchData()
      }, [])


    return(
    <>
        <Header/>

        <iframe src={urlPdf} style={{width: '90%', height: '90vh', alignSelf: 'center'}}/>
    
    </>
    
    )
}

export default PDF