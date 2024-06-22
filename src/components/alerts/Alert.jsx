import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#F7934C',
        contrastText: '#FFFFFF',
      },
    },
  });

function Alert({ open, handleClose, title, content, disagreeText, agreeText }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
      </DialogContent>
      <DialogActions >
        <Button theme={theme} onClick={disagreeText} color="primary">
            Cancelar
        </Button>
        <Button theme={theme} onClick={agreeText} color="primary">
            Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

Alert.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  disagreeText: PropTypes.string,
  agreeText: PropTypes.string,
};


export default Alert;
