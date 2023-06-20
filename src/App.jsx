import Router from './routes'
import {WhitelabelProvider, useWhitelabel} from './context/Whitelabel'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactDOM from 'react-dom'
import theme from './theme'

import { useEffect } from 'react';

function App() {
  const {setarCores} = useWhitelabel();
  return (
    
        <ThemeProvider theme={theme}>
          <WhitelabelProvider>
            <>
              <Router/>
            </>
          </WhitelabelProvider>
        </ThemeProvider>
        

  );
}

export default App;
