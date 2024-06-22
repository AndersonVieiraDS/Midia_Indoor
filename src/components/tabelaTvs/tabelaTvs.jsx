import React from 'react';
import { Box, Typography, Stack, Alert, ButtonBase } from '@mui/material';
import ConnectedTvOutlinedIcon from '@mui/icons-material/ConnectedTvOutlined';
import { Link } from 'react-router-dom';
import './tabelaTvs.css';

const TvsTab = ({ title, items }) => {
  return (
    <Box mb={3} className="colunas">
      <Typography variant="h6" gutterBottom className='tituloTela'>
        {title}
      </Typography>
      {items.map((item) => (
        <ButtonBase
          key={item.img}
          sx={{
            display: 'block',
            width: '90%',
            textAlign: 'left',
            mb: 1,
            p: 1,
            boxShadow: 1,
            borderRadius: 1,
            '&:hover': {
              boxShadow: 3,
            },
          }}
          className='caixaTela'
        >
          <Link to="/telas/monitoramento/exibicao" target="_blank" style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ConnectedTvOutlinedIcon style={{ fontSize: 35, marginRight: 5 }} />
              <Typography variant="subtitle1">{item.title}</Typography>
            </Box>
            <Stack sx={{ width: '100%', mt: 1 }} spacing={2}>
              {item.status === 'ativo' && <Alert severity="success">Conectado</Alert>}
              {item.status === 'manutencao' && <Alert severity="warning">Manutenção</Alert>}
              {item.status === 'inativo' && <Alert severity="error">Desconectado</Alert>}
            </Stack>
          </Link>
        </ButtonBase>
      ))}
    </Box>
  );
};

export default TvsTab;
