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
import { useDieta } from '../../context/Dieta';


export default function Drawer() {
  const {GetNumTickets, numTickets, planoAtual} = useDieta()
  
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
    window.open('https://api.whatsapp.com/send?phone=5524981207959&text=Ol%C3%A1,%20preciso%20de%20ajuda%20no%20Nutrifity', '_blank')
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
      <List style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        
      }}>
        {['Gerar Dieta', 'Planos','Sair'].map((text, index) => (
          <Link to={`/${index == 0 ? "Menu" : index == 1 ? "Planos" : ""}`}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            width: '100%'
          }}>
          <ListItem key={text} disablePadding onClick={text === 'Sair' && SignOut}>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <AssignmentIcon /> : 
                index === 1 ? <Diversity3Icon/> : <LogoutIcon/>}
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <ResumosRestantes>
          <TituloResumoRestante>
              Dietas Restantes
          </TituloResumoRestante>
          <NumeroResumoRestantes>
            <DescriptionIcon 
            style={{
              fontSize: '32px',

            }}/> {numTickets}
          </NumeroResumoRestantes>

      </ResumosRestantes>
      <Divider />
      <ResumosRestantes style={{backgroundColor: 'var(--Secondary-color)'}}>
          <TituloResumoRestante>
              Plano Atual
          </TituloResumoRestante>
          <NumeroResumoRestantes>
            {planoAtual}
          </NumeroResumoRestantes>

      </ResumosRestantes>
      <Divider />
      <DivButtons>
            <Button variant="contained"
            style={{
              width: '100%',
              background: '#017b01',
              fontWeight: 'bold'

            }} onClick={faleConosco}>
              Fale conosco</Button>
        </DivButtons>
     
            <Usuario>
              Usuario:  {localStorage.getItem('@Email:Nutrafity')}
            </Usuario>
      
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