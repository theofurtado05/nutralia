import styled from 'styled-components'
import Button from '@mui/material/Button';

export const DivPai = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;


    
    
`;

export const DivFormPai = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding-bottom: 10px;
    h1{
        font-family: 'Montserrat', sans-serif;
    }
    h2{
        font-family: 'Montserrat', sans-serif;
        text-align: left;
        width: 100%;
    }
`;

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 600px;
    padding-bottom: 5px;

    @media screen and (max-width: 770px){
        width: 90vw;
    }
`;



export const StyledButton = styled(Button)`
    width: 100%;
    cursor: pointer;
    border-radius: 50px !important;
    background: var(--Primary-color);

`;

export const BannerStyled = styled.img`
    width: 600px;

    @media screen and (max-width: 770px){
        width: 90vw;
    }

    cursor: pointer;

`;

export const DivLoading = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

`