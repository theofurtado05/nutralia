import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { usePerfil } from '../../../context/Perfil.context';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid var(--Secondary-color)',
  boxShadow: 24,
  borderRadius: '8px',
  p: 4,
  outline: 'none'
};

export default function InfoModal({titulo, texto}) {
  const [open, setOpen] = React.useState(false);

  const {infoModalState, setInfoModalState, 
    setAtualizarDados,
    atualizarDados, volteAmanha, setVolteAmanha} = usePerfil()

  const handleOpen1 = () => setInfoModalState(true);
  const handleClose1 = () => {
    setInfoModalState(false)
    setVolteAmanha(false)
  };

  const handleOpen2 = () => setVolteAmanha(true)
  

  return (
    <div>
      <Modal
        open={handleOpen1 || handleOpen2}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{fontFamily: 'var(--Primary-font)', fontWeight: '600'}}>
            {titulo}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{fontFamily: 'var(--Secondary-font)'}}>
            {texto}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}