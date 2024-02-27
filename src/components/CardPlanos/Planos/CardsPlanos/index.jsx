
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useAssinatura } from "../../../../context/Assinatura.context";


const CardPlano = ({tituloPlano, valorPlano, numDietas, link, frequencia, adicional, adicionalAnual, avulso = false, linkPagamento, treino = false, numTreinos = 0, value=0, qntd=0, type=0}) => {
    const navigate = useNavigate()

    // const handleClick = () => {
    //     localStorage.setItem('@PlanoEscolhido:Nutrafity', tituloPlano)
    //     window.open(link, !link.includes('utrafity.com') && !link.includes('localhost') && 'blank')
    //     if(linkPagamento){
    //         localStorage.setItem('@LinkPagamento:Nutrafity', linkPagamento)
    //     }
        
    //     // navigate('/pixpage')

    // }

    const {paymentObject, setPaymentObject} = useAssinatura()

    const handleClick = async () => {
        console.log(window.location.pathname.includes('planos'))
        if(window.location.pathname.includes("planos")){
            return await axios.post('https://api.nutrafity.com/payment/createPaymentOnMercadoPago', {
                value: value,
                qntd: qntd,
                userEmail: localStorage.getItem('@Email:Nutrafity'),
                type: type,
                uid: localStorage.getItem('@UserId:Nutrafity')
            }).then((response) => {
                // console.log(response.data.response.point_of_interaction.transaction_data)
                setPaymentObject(response.data.response)
                navigate('/pixpage')
            }).catch((err) => {
                console.log("Erro: ", err)
            })
        } else {
            navigate('/registro')
        }
        
    }

    // {
    //     "value": 5.99,
    //     "qntd": 1,
    //     "userEmail": "theofurtado05@gmail.com",
    //     "uid": "qz51JKif41e8fMTzcqYRxbwi0rk2",
    //     "type": "Dieta Semanal"
    // }


    return(
        <>
        <div className="card">
            <div className="content">
                    {adicionalAnual == true && <div className="bestPrice">MELHOR VALOR</div>}
                    <div className="title">{tituloPlano}</div>
                    <div className="price">R${valorPlano}<span id="mes">/{frequencia}</span></div>
                    <hr></hr>
                    <div className="description">
                        {!avulso ? 
                        <>
                        <span>
                        - {numDietas} Dietas
                        </span> 
                        
                        <span>
                            - Acompanhamento de evolução 
                        </span>
                        
                        <span>
                            - Visualização com gráficos  
                        </span>
                        
                        <span>
                            - Suporte por E-mail e Whatsapp
                        </span>
                        
                        
                        {adicional && <><span>- {adicional}</span> </>}
                        
                        </> : 
                        <>
                            <span>
                                - Dieta personalizada
                            </span> 
                            {treino && 
                                <span>
                                    - {numTreinos} Treino personalizado 
                                </span>
                            }
                            
                            
                            <span>
                                - Suco detox  
                            </span>

                            <span>
                                - Acompanhamento de evolução 
                            </span>

                            <span>
                                - Envio imediato  
                            </span>
                            
                            <span>
                                - Suporte por E-mail
                            </span>

                        
                        </>}
                        
                    </div>
            </div>
            
                <button onClick={handleClick} className="btPlanos">
                    Comprar agora
                </button>
          
        </div>
        <style>
            {`
            .bestPrice{
                background: black;
                width: 90%;
                padding: 2px 10px;
                align-self: center;
                color: white;
                font-weight: regular;
                box-shadow: 0 1px 1px 0 grey;
                border-radius: 6px;
                margin-bottom: 5px;
            }
            .card {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                width: 300px;
                padding: 20px 1px;
                margin: 10px 0;
                text-align: center;
                position: relative;
                
                box-shadow: 0 10px 15px -3px rgba(33,150,243,.4),0 4px 6px -4px rgba(33,150,243,.4);
                border-radius: 10px;
                background-color: #6B6ECC;
                background: linear-gradient(45deg, var(--Primary-color) 0%, var(--Secondary-color) 100%);
                gap: 20px;
            }

            .content {
               display: flex;
               flex-direction: column;
               gap: 5px;
               padding: 0 10px;
            }

            .content .price {
            color: white;
            font-weight: 800;
            font-size: 46px;
            text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);
            }

            .content .description {
            color: rgba(255, 255, 255, 1);
            display: flex;
            flex-direction: column;
            margin-top: 10px;
            font-size: 14px;
            text-align: left;
            gap: 8px;
            }

            .content .description span{
                font-size: 16px;
            }

            #mes{
                font-size: 14px;
            }

            .content .title {
            font-weight: 800;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.64);
            
            font-size: 25px;
            letter-spacing: 1px;
            }

            .btPlanos {
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
                border: none;
                outline: none;
                color: var(--Primary-color);
                text-transform: uppercase;
                font-weight: 700;
                font-size: .75rem;
                padding: 0.75rem 1.5rem;
                background-color: rgb(33 150 243);
                border-radius: 0.5rem;
                width: 90%;
                text-shadow: 0px 4px 18px var(--Secondary-color);
                background: white;
            }
            .btPlanos:hover{
                cursor: pointer;
                background: #eeeded;
            }


            `}
        </style>
        </>
    )
}

export default CardPlano