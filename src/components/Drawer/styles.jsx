import styled from 'styled-components'

export const ResumosRestantes = styled.div`
    background: var(--Primary-color);
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column; 
    align-items: center;

`;

export const TituloResumoRestante = styled.h2`
    font-weight: 700;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    margin-left: -5px;
`;

export const NumeroResumoRestantes = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    font-weight: bold;
    justify-content: space-between;
    gap: 15px;
    align-items: center;
    font-size: 20px;
`;

export const DivButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    gap: 50px;
`;

export const Usuario = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
`;