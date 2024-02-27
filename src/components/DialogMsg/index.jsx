import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useWhitelabel } from '../../context/Whitelabel';
import { Button, TextField } from "@mui/material";
import {useNavigate} from 'react-router-dom'

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

export default function DialogMsg() {
  const [open, setOpen] = React.useState(false);
  const {openModalMsg, setOpenModalMsg, objModalMsg, setObjModalMsg} = useWhitelabel()
  const handleOpen = () => setOpenModalMsg(true);
  const handleClose = () => setOpenModalMsg(false);
  const navigate = useNavigate()

  return (
    <div>
      <Modal
        open={openModalMsg}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {objModalMsg.title ? objModalMsg.title : ''}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {objModalMsg.msg ? objModalMsg.msg : ''}
          </Typography>
          <div style={{width: '100%', paddingTop: 20}}>
            <Button variant="contained" color="error" onClick={()=>{
                setOpenModalMsg(false)
            }}>Fechar</Button>
            {objModalMsg.msg.includes('Aprovado') && 
                <Button variant="contained" onClick={()=>{
                    navigate('/menu')
                    setOpenModalMsg(false)
                }}>
                    Ir para o Menu
                </Button>
            }
          </div>
          
        </Box>
      </Modal>
    </div>
  );
}