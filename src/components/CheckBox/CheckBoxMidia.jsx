import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const CheckboxMidia= () => {
const [isImg, setIsImg] = React.useState(false);

const handleImgChange = (event) => {
setIsImg(event.target.checked);
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
control={<Checkbox checked={isImg} onChange={handleImgChange} theme={theme} color="primary"/>}
label="Imagem" className='checkBox'
/>
<FormControlLabel
control={<Checkbox checked={!isImg} onChange={() => setIsImg(!isImg)} theme={theme} color="primary"/>}
label="Video" className='checkBox'
/>
</>
);
};

export default CheckboxMidia;