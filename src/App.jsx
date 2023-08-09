import Router from './routes'
import {WhitelabelProvider, useWhitelabel} from './context/Whitelabel'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactDOM from 'react-dom'
import theme from './theme'

import { useEffect } from 'react';
import { AssinaturaProvider } from './context/Assinatura.context';
import { PerfilProvider } from './context/Perfil.context';

function App() {
  const {setarCores} = useWhitelabel();
  
  return (
    
        <ThemeProvider theme={theme}>
          <WhitelabelProvider>
            <AssinaturaProvider>
              <PerfilProvider>
                <>
                  <Router/>
                </>
              </PerfilProvider>
            </AssinaturaProvider>
          </WhitelabelProvider>
        </ThemeProvider>
        

  );
}

export default App;
