import Router from './routes'
import {WhitelabelProvider, useWhitelabel} from './context/Whitelabel'
import { DietaProvider, useDieta } from './context/Dieta';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactDOM from 'react-dom'
import theme from './theme'

import { useEffect } from 'react';

function App() {
  const {setarCores} = useWhitelabel();
  return (
    
        <ThemeProvider theme={theme}>
          <WhitelabelProvider>
            <DietaProvider>
              <>
                <Router/>
              </>
            </DietaProvider>
          </WhitelabelProvider>
        </ThemeProvider>
        

  );
}

export default App;
