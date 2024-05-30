import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Select({ label, options }) {
  const defaultProps = {
    options: options,
    getOptionLabel: (option) => option.label,
  };

  const [value, setValue] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={1} sx={{ margin: '10px', marginLeft: '15%', width: '70%' }}>
      <Autocomplete
        {...defaultProps}
        id="auto-complete"
        autoComplete
        includeInputInList
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField {...params} label={label} variant="outlined" />
        )}
      />
    </Stack>
  );
}
