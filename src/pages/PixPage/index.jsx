import React, { useEffect } from "react";
import Header from "../../components/Header";
import axios from 'axios';

const PixPage = () => {
    
    return (
        <>
            

            <div>
              <iframe src={localStorage.getItem('@LinkPagamento:Nutrafity')} style={{width: '100%', height: '100vh'}}/>
            </div>
        </>
    )
}

export default PixPage