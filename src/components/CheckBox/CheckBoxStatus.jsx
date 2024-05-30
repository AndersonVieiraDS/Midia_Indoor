import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './checkBox.css'

const CheckboxStatus= () => {
const [isAtivo, setIsAtivo] = React.useState(false);

const handleAtivoChange = (event) => {
setIsAtivo(event.target.checked);
};

return (
<>
<FormControlLabel
control={<Checkbox checked={isAtivo} onChange={handleAtivoChange} className='checkStatus'/>}
label="Ativo" className='checkBox'
/>
<FormControlLabel
control={<Checkbox checked={!isAtivo} onChange={() => setIsAtivo(!isAtivo)} />}
label="Inativo" className='checkBox'
/>
</>
);
};

export default CheckboxStatus;