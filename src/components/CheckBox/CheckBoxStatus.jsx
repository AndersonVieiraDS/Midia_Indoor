import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const CheckboxStatus= () => {
const [isAtivo, setIsAtivo] = React.useState(false);

const handleAtivoChange = (event) => {
setIsAtivo(event.target.checked);
};

const theme = createTheme({
    palette: {
      primary: {
        main: '#F7934C',
        contrastText: '#FFFFFF',
      },
    },
});

return (
<>
<FormControlLabel
control={<Checkbox checked={isAtivo} onChange={handleAtivoChange} theme={theme} color="primary"/>}
label="Ativo" className='checkBox'
/>
<FormControlLabel
control={<Checkbox checked={!isAtivo} onChange={() => setIsAtivo(!isAtivo)} theme={theme} color="primary"/>}
label="Inativo" className='checkBox'
/>
</>
);
};

export default CheckboxStatus;