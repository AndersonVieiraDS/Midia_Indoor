import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const CheckboxUser= () => {
const [isAdmin, setIsAdmin] = React.useState(false);

const handleAdminChange = (event) => {
setIsAdmin(event.target.checked);
};

return (
<>
<FormControlLabel
control={<Checkbox checked={isAdmin} onChange={handleAdminChange} />}
label="Administrador" className='checkBox'
/>
<FormControlLabel
control={<Checkbox checked={!isAdmin} onChange={() => setIsAdmin(!isAdmin)} />}
label="Operador" className='checkBox'
/>
</>
);
};

export default CheckboxUser;