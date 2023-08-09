import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { usePerfil } from '../../../context/Perfil.context';
import { TextField } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import { StyledButton } from '../../CardPerfil/styles';
import InputMask from 'react-input-mask';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const objetivos = [
    { label: 'Emagrecimento', value: 'Emagrecimento' },
    { label: 'Ganho de massa muscular', value: 'Ganho de massa muscular' },
    { label: 'Definição de musculos', value: 'Definição de musculos' },
    { label: 'Melhorar a alimentação', value: 'Melhorar a alimentação' },
    { label: 'Aumentar a performance física', value: 'Aumentar a performance física' },
]



export default function AtualizaDadosModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setAtualizaDadosModalState(true);
  const handleClose = () => setAtualizaDadosModalState(false);
  const {setAtualizaDadosModalState, atualizaDadosModalState, infoAtual, UpdateInfo, objetivo, primeiroAcesso} = usePerfil()

  //Dados
  const [altura, setAltura] = useState(infoAtual.altura);
  const [peso, setPeso] = useState(infoAtual.kg)
  const [newObjetivo, setObjetivo] = useState(objetivos[0])
  const [intolerancia, setIntolerancia] = useState(infoAtual.intolerancia)
  const [imc, setImc] = useState(infoAtual.IMC)
  const [idade, setIdade] = useState(infoAtual.idade)

  

  const handleSelecao = (event, newValue) => {
    setObjetivo(newValue);
  };

  const handleNewInfo = () => {
    const newData = {
        altura: altura,
        kg: peso,
        objetivo: newObjetivo.value,
        intolerancia: intolerancia,
        IMC: peso * (altura * altura),
        idade: idade
    }
    UpdateInfo(newData)
  }

  return (
    <div>
      <Modal
        open={atualizaDadosModalState || primeiroAcesso}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Atualizar Dados
          </Typography>

          <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', gap: '10px', paddingTop: '20px', paddingBottom: '20px'}}>
            <InputMask
              mask="9.99"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              // maskChar="_" // Optional: You can use any character you want to indicate a placeholder
              >
              {() => (
                  <TextField
                  label="Altura (m)"
                  value={altura}
                 
                  />
              )}
            </InputMask>
            
            <TextField label="Peso (kg)" value={peso} 
            onChange={(e) => setPeso(e.target.value)}/>

            <TextField label="Idade" value={idade} 
            onChange={(e) => setIdade(e.target.value)}/>
            
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={objetivos}
                getOptionLabel={(option) => option.label}
                value={newObjetivo}
                onChange={handleSelecao}
                renderInput={(params) => (
                    <TextField {...params} label="Objetivo" />
                )}
                style={{width: '100%'}}
                />
            <TextField label="Intolerância"  value={intolerancia} 
            onChange={(e) => setIntolerancia(e.target.value)}/>

          </div>
          <StyledButton style={{background: 'var(--Primary-color)'}}
          onClick={handleNewInfo}
          >Atualizar</StyledButton>
        </Box>
      </Modal>
    </div>
  );
}