import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import './checkBox.css'

const CheckboxMidia= () => {
const [isImg, setIsImg] = React.useState(false);

const handleImgChange = (event) => {
setIsImg(event.target.checked);
};

return (
<>
<FormControlLabel
control={<Checkbox checked={isImg} onChange={handleImgChange} className='checkMidia'/>}
label="Imagem" className='checkBox'
/>
<FormControlLabel
control={<Checkbox checked={!isImg} onChange={() => setIsImg(!isImg)} />}
label="Video" className='checkBox'
/>
</>
);
};

export default CheckboxMidia;