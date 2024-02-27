import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from 'axios';
import { useAssinatura } from "../../context/Assinatura.context";

import { Button, TextField } from "@mui/material";
import {useNavigate} from 'react-router-dom'
import { useWhitelabel } from "../../context/Whitelabel";
import DialogMsg from "../../components/DialogMsg";


const PixPage = () => {
    const {paymentObject, setPaymentObject} = useAssinatura()
    const navigate = useNavigate()
    const {objModalMsg, setObjModalMsg, setOpenModalMsg} = useWhitelabel()

    const [codigoPix, setCodigoPix] = useState()
    
    function formatarData(dataString) {
        const meses = [
          "janeiro", "fevereiro", "março", "abril", "maio", "junho",
          "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
        ];
      
        const data = new Date(dataString);
      
        const dia = data.getDate();
        const mes = meses[data.getMonth()];
        const horas = data.getHours().toString().padStart(2, '0');
        const minutos = data.getMinutes().toString().padStart(2, '0');
      
        return `${dia} de ${mes} às ${horas}:${minutos} h.`;
      }

    useEffect(() => {
        console.log(paymentObject)
        if(!paymentObject){
            navigate('/planos')
        }
    }, [])

    const handleCard = () => {
        window.open(
            paymentObject.transaction_amount == 5.99 ? 
            `https://pay.kirvano.com/0c32923e-b1d7-488c-b9a9-182cf35f93f9?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3` : 
            paymentObject.transaction_amount == 7.99 ? `https://pay.kirvano.com/76d4e557-bb44-4ee5-ae16-ffd80e6150ec?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3` : 
            `https://pay.kirvano.com/ae517256-9823-43d5-95e5-91ac4560a97c?utm_content=${localStorage.getItem('@UserId:Nutrafity')}&src=3`, 
            'blank')
    }
    
    const handleStatus = async (id) => {
        return await axios.get(`https://api.nutrafity.com/payment/${id}`).then((response) => {
            console.log(response.data.response.status)
            setOpenModalMsg(true)
            setObjModalMsg({
                title: 'Status do Pagamento',
                msg: `Status do pagamento: ${response.data.response.status == 'pending' ? ' Pendente' : response.data.response.status == 'approved' ? 'Aprovado' : 'Rejeitado'}`
            })

        }).catch((err) => {
            console.log("Erro: ", err)
        })
    }

        return paymentObject &&
                (
                    <>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, paddingBottom: 10}}>
                        <Header/>
                        {paymentObject && paymentObject.point_of_interaction.transaction_data &&
                            <><div style={{width: '100%', display:"flex", alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                            <div style={{width: '90%', display: 'flex', flexDirection: 'column', gap: 10}}>
                                <h1 style={{marginBottom: '0px'}}>Pagamento Pix</h1>
                                
                                <span>Pague R$ {paymentObject.transaction_amount} via Pix</span>
                                <span>Vencimento: {formatarData(paymentObject.date_of_expiration)}</span>
                                <span>Compra: {paymentObject.description}</span>
                            </div>
                            
                            <div style={{display: 'flex', flexDirection: 'column', gap: 10, width: '90%', justifyContent: 'center', alignItems: 'center', paddingTop: 20}}>
                                <div style={{display: 'flex', flexDirection: 'column', paddingTop: 10}}>
                                    <label style={{width: '180px', fontSize: '12px'}}>Código QR</label>
                                    <img src={`data:image/png;base64, ${paymentObject.point_of_interaction.transaction_data.qr_code_base64}`} style={{width: '200px', height: '200px'}}/>
                                </div>
                                
                                <TextField label="Codigo de Pagamento Pix" value={paymentObject.point_of_interaction.transaction_data.qr_code} style={{width: '100%'}}/>

                                <Button variant="contained" style={{width: '100%', background: codigoPix && '#055200'}}onClick={async () => {
                                    await navigator.clipboard.writeText(paymentObject.point_of_interaction.transaction_data.qr_code);
                                    setCodigoPix(paymentObject.point_of_interaction.transaction_data.qr_code)
                                }}>{codigoPix ? 'Codigo Pix Copiado!' : 'Copiar Codigo Pix'}</Button>

                                {codigoPix && 
                                <Button variant="contained" style={{width: '100%', marginTop: 10}} onClick={async () => {
                                    await handleStatus(paymentObject.id)
                                }}>
                                    Verificar Status de Pagamento
                                </Button>}

                                <DialogMsg/>
                                
                                

                                <div style={{display: 'flex', flexDirection: 'column', width: '100%', gap: 15, border: '1px solid #d1d1d1', borderRadius: 4}}>
                                    <h3 style={{padding: 5}}>Como pagar?</h3>
                                    <div style={{display: 'flex', gap: 10, padding: 5}}>
                                        <span style={{color: 'var(--Primary-color)', border: '3px solid var(--Primary-color)', borderRadius: '100%', padding: 10, fontSize: '14px'}}>1</span>
                                        <span style={{fontSize: '14px'}}>Entre no app ou site do seu banco e escolha a opção de pagamento via Pix.</span>
                                    </div>
                                    <div style={{display: 'flex', gap: 10, padding: 5}}>
                                        <span style={{color: 'var(--Primary-color)', border: '3px solid var(--Primary-color)', borderRadius: '100%', padding: 10, fontSize: '14px'}}>2</span>
                                        <span style={{fontSize: '14px'}}>Escaneie o código QR ou copie e cole o código de pagamento.</span>
                                    </div>
                                    <div style={{display: 'flex', gap: 10, padding: 5}}>
                                        <span style={{color: 'var(--Primary-color)', border: '3px solid var(--Primary-color)', borderRadius: '100%', padding: 10, fontSize: '14px'}}>3</span>
                                        <span style={{fontSize: '14px'}}>Pronto! O pagamento será creditado na hora e você receberá um e-mail de confirmação.</span>
                                    </div>
                                </div>

                                <Button variant="contained" style={{width: '100%', marginTop: 10}} color="error" onClick={handleCard}>
                                    Pagar com Cartão
                                </Button>
                            </div>
                        </div>

                        </>   
                        }
                        
                    </div>
                    </>   
                )
                        
            
        
    
}

export default PixPage