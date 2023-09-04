
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const CardPlano = ({tituloPlano, valorPlano, numDietas, link, frequencia, adicional, adicionalAnual, avulso = false}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        localStorage.setItem('@PlanoEscolhido:Nutrafity', tituloPlano)
        // window.open(link, 'blank')
        navigate('/pixpage')
    }

    return(
        <>
        <div class="card">
            <div class="content">
                    {adicionalAnual == true && <div class="bestPrice">MELHOR VALOR</div>}
                    <div class="title">{tituloPlano}</div>
                    <div class="price">R${valorPlano}<span id="mes">/{frequencia}</span></div>
                    <hr></hr>
                    <div class="description">
                        {!avulso ? 
                        <>
                        <span>
                        - {numDietas} Dietas por mês {adicionalAnual}
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
                            
                            <span>
                                - Treino personalizado 
                            </span>
                            
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
                                - Suporte por E-mail e Whatsapp
                            </span>

                        
                        </>}
                        
                    </div>
            </div>
            
                <button onClick={handleClick} className="btPlanos">
                    Assinar agora
                </button>
          
        </div>
        <style>
            {`
            .bestPrice{
                background: black;
                width: 100%;
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