
import React, { useEffect, useState } from "react";


const CardPlano = ({tituloPlano, valorPlano, numDietas, link, frequencia}) => {
    
    const handleClick = () => {
        window.open(link, 'blank')
    }

    return(
        <>
        <div class="card">
            <div class="content">
                    <div class="title">{tituloPlano}</div>
                    <div class="price">R${valorPlano}<span id="mes">/{frequencia}</span></div>
                    <div class="description">
                        <br/>- {numDietas} Dietas por mês;
                        <br/>- Acompanhamento de evolução (em breve)</div>
            </div>
            
                <button onClick={handleClick}>
                    Assinar agora
                </button>
          
        </div>
        <style>
            {`
            .card {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                width: 260px;
                padding: 20px 1px;
                margin: 10px 0;
                text-align: center;
                position: relative;
                
                box-shadow: 0 10px 15px -3px rgba(33,150,243,.4),0 4px 6px -4px rgba(33,150,243,.4);
                border-radius: 10px;
                background-color: #6B6ECC;
                background: linear-gradient(45deg, var(--Primary-color) 0%, var(--Secondary-color) 100%);
            }

            .content {
            padding: 20px;
            }

            .content .price {
            color: white;
            font-weight: 800;
            font-size: 46px;
            text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);
            }

            .content .description {
            color: rgba(255, 255, 255, 0.6);
            margin-top: 10px;
            font-size: 14px;
            }

            #mes{
                font-size: 14px;
            }

            .content .title {
            font-weight: 800;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.64);
            margin-top: 10px;
            font-size: 25px;
            letter-spacing: 1px;
            }

            button {
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
            button:hover{
                cursor: pointer;
                background: #eeeded;
            }


            `}
        </style>
        </>
    )
}

export default CardPlano