import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const CheckboxUser= () => {
const [isAdmin, setIsAdmin] = React.useState(false);

const handleAdminChange = (event) => {
setIsAdmin(event.target.checked);
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
control={<Checkbox checked={isAdmin} onChange={handleAdminChange} theme={theme} color="primary"/>}
label="Administrador" className='checkBox'
/>
<FormControlLabel
control={<Checkbox checked={!isAdmin} onChange={() => setIsAdmin(!isAdmin)} theme={theme} color="primary"/>}
label="Operador" className='checkBox'
/>
</>
);
};

export default CheckboxUser;