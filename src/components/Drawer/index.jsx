import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import MenuIcon from '@mui/icons-material/Menu';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LogoutIcon from '@mui/icons-material/Logout';
import DescriptionIcon from '@mui/icons-material/Description';
import { ResumosRestantes, TituloResumoRestante, NumeroResumoRestantes, DivButtons, Usuario } from './styles';
import {Link} from  'react-router-dom'

import { useNavigate } from 'react-router-dom';
import { Logout } from '@mui/icons-material';
import { useEffect } from 'react';
import LogoDefault from '../../assets/logo.png'
import { SignOut } from '../../services/auth';
import { useAssinatura } from '../../context/Assinatura.context';



export default function Drawer() {
  const {GetNumTickets, numTickets, planoAtual} = useAssinatura()

  const [ticketsUsados, setTicketsUsados] = useState()

  const [state, setState] = React.useState({
    left: false, 
  });

  const [userId, setUserId] = useState();

  
  useEffect(()=>{
    GetNumTickets()
  }, [])


  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar se o modal está aberto
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const faleConosco = () => {
    window.open('https://api.whatsapp.com/send?phone=5524981207959&text=Ol%C3%A1,%20preciso%20de%20ajuda%20no%20Nutrafity', '_blank')
  }

  
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

      }}
    >
       <img src={LogoDefault} style={{
        width: '150px',
        alignSelf: 'center',
       }} />
      
        <div className='divMenu'>
            <a href="/perfil">
              <AccountBoxIcon/> Perfil 
            </a>
            <a href="/menu">
              <RestaurantMenuIcon/> Gerar Receita 
            </a>
            {/* <a href="/menu">
              <MenuBookIcon/> Receita Semanal 
            </a> */}

        </div>

        <div className='infos'>
            <span className='tickets'>{numTickets}</span>
            <h3>Dietas Restantes</h3>

            <p>Quer aumentar seus resultados? <br/>
              Precisa de mais dietas?</p>
            
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '-10px'}}>
                <a href="/planos">Evoluir plano</a>
            </div>
        </div>

        
        
        <div className='footer'>
          <button className='btSuporte' onClick={faleConosco}>Fale conosco</button>

          <hr/>

          <div>
            <div className='infoUser'>
              <span className='email'>{localStorage.getItem('@Email:Nutrafity')}</span>
              <span className='plano'>Plano: {planoAtual}</span>
            </div>
            <button onClick={SignOut}>
              <LogoutIcon/>
            </button>
            
          </div>
        </div>

        <style>
          {`
            .btSuporte{
              background: var(--Primary-color);
              color: #FFF;
              font-weight: 700;
              padding: 10px;
              width: 90%;
            }
            button{
              background: rgba(0,0,0,0);
              border: none;
              border-radius: 8px;
            }
            button:hover{
              cursor: pointer;
              background: #d0d0d0;
            }
            .btSuporte:hover{
              cursor: pointer;
              background: var(--Secondary-color);
            }
            .infoUser{
              display: flex;
              flex-direction: column;
              align-items: left;
              justify-content: flex-start;
              width: 80%;
            }

            .infoUser .plano{
              font-weight: bold;
              font-size: 12px;
            }

            .infoUser span{
              text-align: left;
            }

            .infoUser email{
              font-weight: 500;
            }

            .footer{
              width: 100%;
              position: absolute;
              bottom: 15px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;

            }

            .footer div{
              display: flex;
              
              justify-content: space-between;
              width: 95%;
            }

            hr{
              color: grey;
              width: 90%;
            }

            .infos{
              width: 90%;
              background: #8ecc9b;
              border-radius: 8px;
              padding: 10px;

              display: flex;
              flex-direction: column;
              align-items: left;
              
            }

            .infos .tickets{
              border: 10px var(--Secondary-color) solid;
              border-radius: 55%;
              padding: 10px;
              
              width: 10%;
              display: flex;
              align-items: center;
              self-align: center;
              text-align: center;
              justify-content: center;
            }

            .infos h3{
              font-size: 14px;
              
            }

            .infos p{
              font-size: 14px;
              font-weight: 500;
            }

            .infos div a{
              font-weight: 600;
              text-decoration: underline;
              color: #000;
            }


            .divMenu{
              padding-top: 20px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              gap: 5px;
              width: 100%;
              padding-bottom: 50px;
            }
            .divMenu a{
              text-align: left;
              padding: 10px;
              border-radius: 8px;
              font-weight: 600;
              text-decoration: none;
              color: #000;
              display: flex;
              align-items: center;
              gap: 10px;
              
            }
            .divMenu a:hover{
              background: #d0d0d0;
              cursor: pointer;
            }

          `}

        </style>

    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{
                fontSize: '42px',
            }}/>
          </Button>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}