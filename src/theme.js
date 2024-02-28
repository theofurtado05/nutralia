import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA100', // Cor principal
    },
  },
  overrides: {
    MuiOutlinedInput: {
      
        styleOverrides: {
            root: {
                '&$focused $notchedOutline': {
                    borderColor: '#1C9E22',
                    borderRadius: '50px !important',
                    
            
            },

            borderRadius: '50px !important',
            padding: '0px',

            notchedOutline: {
                borderRadius: '50px !important',
                
            }
        },
      },
    },
    MuiButton: {
      outlined: {
        '&$focused': {
          borderColor: '#1C9E22',
        },
      },
    },
  },
});

export default theme;
