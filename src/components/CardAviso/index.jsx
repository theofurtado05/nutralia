import React from "react";

const CardAviso = ({numDietasRestantes}) => {
    return (
    <>
        <div class="warning">
            <div class="warning__icon">
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13 14h-2v-5h2zm0 4h-2v-2h2zm-12 3h22l-11-19z" fill="#393a37"></path></svg>
            </div>
                <div class="warning__title">Dietas promocionais restantes: 
                <strong>
                    {numDietasRestantes} tickets de R$19,90 
                </strong></div>
            <div class="warning__close"></div>
        </div>
        <style>
            {`
            .warning {
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                width: 90%;
                padding: 12px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: start;
                background: #F7C752;
                border-radius: 8px;
                box-shadow: 0px 0px 5px -3px #111;
              }
              
              .warning__icon {
                width: 20px;
                height: 20px;
                transform: translateY(-2px);
                margin-right: 8px;
              }
              
              .warning__icon path {
                fill: #393A37;
              }
              
              .warning__title {
                font-weight: 500;
                font-size: 14px;
                color: #393A37;
                display: flex;
                justify-content: space-between;
                width: 100%;
                
              }
              
              .warning__close {
                width: 20px;
                height: 20px;
                margin-left: auto;
                cursor: pointer;
              }
              
              .warning__close path {
                fill: #393A37;
              }
            `}
        </style>
    </>)
}

export default CardAviso