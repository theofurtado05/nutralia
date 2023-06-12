import Router from './routes'
import {WhitelabelProvider, useWhitelabel} from './context/Whitelabel'
import { useEffect } from 'react';

function App() {
  const {setarCores} = useWhitelabel();
  return (
    
        <>
          <WhitelabelProvider>
            <>
              <Router/>
            </>
          </WhitelabelProvider>
        </>
     
    
  );
}

export default App;
