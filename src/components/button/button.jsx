import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F7934C',
      contrastText: '#FFFFFF',
    },
  },
});

export default function CustomButton({ children, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary" style={{margin: '10px', marginLeft: '70%'}}>
        {children}
      </Button>
    </ThemeProvider>
  );
}

