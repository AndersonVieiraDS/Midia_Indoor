import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomButton from '../../components/button/button';
import DataTable from '../../components/tabela/tabela';
import { NavLink } from 'react-router-dom';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "../Styles/stylesPages.css";
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Alert from '../../components/alerts/AlertDelete';

const Midias = () => {
  const [midias, setMidias] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedMidiaId, setSelectedMidiaId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/midias')
      .then((response) => {
        console.log(response.data);
        setMidias(response.data);
      })
      .catch((error) => {
        console.error('Error fetching media:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/midias/${id}`)
      .then(() => {
        setMidias(midias.filter(midia => midia.id !== id));
        setOpen(false);
        navigate('/midias');
      })
      .catch((error) => {
        console.error('Error deleting media:', error);
      });
  };

  const handleClickOpen = (id) => {
    setSelectedMidiaId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    navigate('/midias');
    handleClose();
  };

  const customColumns = [
    {
      field: 'status',
      headerName: 'Status',
      flex: 0.7,
      renderCell: (params) => (
        <IconButton disabled>
          {params.row.status ? <CheckCircleIcon style={{ color: 'green' }} /> : <CancelIcon style={{ color: 'gray' }} />}
        </IconButton>
      ),
    },
    { field: 'titulo', headerName: 'Título', flex: 1.5 },
    { field: 'descricao', headerName: 'Descrição', flex: 1.5 },
    { field: 'caminho', headerName: 'Caminho', flex: 2 },
    { field: 'tipo', headerName: 'Tipo', flex: 1 },
    {
      field: 'edit',
      headerName: '',
      flex: 0.5,
      sortable: false,
      renderCell: (params) => (
        <NavLink to={`/editar-midia/${params.row.id}`}>
          <IconButton
            aria-label="edit"
            size="small"
          >
            <EditOutlined />
          </IconButton>
        </NavLink>
      ),
    },
    {
      field: 'delete',
      headerName: '',
      flex: 0.5,
      sortable: false,
      renderCell: (params) => (
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => handleClickOpen(params.row.id)}
        >
          <DeleteOutline />
        </IconButton>
      ),
    },
  ];

  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>

      <div className='midias'>
        <div className="midias-container">
          <div className="dados-midia">
          <CustomButton className="buttonAdd">
              <NavLink to="/cadastrar-midia" className='buttonAdd'>
                ADICIONAR
              </NavLink>
            </CustomButton>
            <Alert
              open={open}
              handleClose={handleClose}
              title="Excluir Mídia"
              content="Tem certeza que deseja excluir a mídia?"
              onAgree={() => handleDelete(selectedMidiaId)}
              onDisagree={handleCancel}
            />
            <div className="tabela-midia">
              <DataTable
                rows={midias}
                columns={customColumns}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Midias;