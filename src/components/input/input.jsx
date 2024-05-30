import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function CustomInput(props) {
  const { id, variant, inputProps, ...otherProps } = props;

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {marginTop:"1em" }, 
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id={id} variant={variant} {...otherProps} inputProps={{ sx: { width: '100%' }, ...inputProps }}/>
    </Box>
  );
}
