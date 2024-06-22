import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F7934C',
      contrastText: '#FFFFFF',
    },
  },
});

function AlertImage({ open, handleClose, title, imageUrl, confirmText }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        {imageUrl && <img src={imageUrl} alt="Dialog content" style={{ width: '100%' }} />}
      </DialogContent>
      <DialogActions>
        <Button theme={theme} onClick={handleClose} color="primary">
          {confirmText || 'Voltar'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

AlertImage.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  confirmText: PropTypes.string,
};

export default AlertImage;
