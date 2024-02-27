import Router from './routes'
import {WhitelabelProvider, useWhitelabel} from './context/Whitelabel'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactDOM from 'react-dom'
import theme from './theme'

import { useEffect } from 'react';
import { AssinaturaProvider } from './context/Assinatura.context';
import { PerfilProvider } from './context/Perfil.context';

// import Tour from 'reactour'
// import { steps } from './steps.js'

function App() {
  const {setarCores} = useWhitelabel();
  useEffect(() => {
    // Função para desabilitar o botão direito do mouse
    if(localStorage.getItem('@Email:Nutrafity') != 'theofurtado05@gmail.com'){
      const disableRightClick = (event) => {
        event.preventDefault();
      };
  
      // Função para desabilitar a tecla F12
      const disableF12 = (event) => {
        if (event.key === 'F12') {
          event.preventDefault();
        }
      };
  
      // Adicionar os event listeners
      document.addEventListener('contextmenu', disableRightClick);
      document.addEventListener('keydown', disableF12);
  
      // Remover os event listeners quando o componente é desmontado
      return () => {
        document.removeEventListener('contextmenu', disableRightClick);
        document.removeEventListener('keydown', disableF12);
      };

    }
    
  }, []);
  
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
