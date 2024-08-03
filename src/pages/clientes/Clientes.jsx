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

function formatarCPForCNPJ(value) {
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  const cnpjRegex = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/;
  
  if (value.length === 11) {
    return value.replace(cpfRegex, '$1.$2.$3-$4');
  } else if (value.length === 14) {
    return value.replace(cnpjRegex, '$1.$2.$3/$4-$5');
  }
  return value;
}

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedClienteId, setSelectedClienteId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/clientes')
      .then((response) => {
        console.log(response.data);
        setClientes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching clients:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/clientes/${id}`)
      .then(() => {
        setClientes(clientes.filter(cliente => cliente.id !== id));
        setOpen(false);
        navigate('/clientes');
      })
      .catch((error) => {
        console.error('Error deleting client:', error);
      });
  };

  const handleClickOpen = (id) => {
    setSelectedClienteId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    navigate('/clientes');
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
    {
      field: 'cpf_cnpj',
      headerName: 'CPF/CNPJ',
      type: 'number',
      flex: 1,
      valueFormatter: (params) => formatarCPForCNPJ(params.value.toString())
    },
    { field: 'nome', headerName: 'Nome', flex: 1.5 },
    { field: 'contato', headerName: 'Contato', flex: 1 },
    { field: 'telefone', headerName: 'Telefone', flex: 1 },
    {
      field: 'edit',
      headerName: '',
      flex: 0.5,
      sortable: false,
      renderCell: (params) => (
        <NavLink to={`/editar-cliente/${params.row.id}`}>
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

      <div className='clientes'>
        <div className="clientes-container">
          <div className="dados-cliente">
            <CustomButton className="buttonAdd">
              <NavLink to="/cadastrar-cliente" className='buttonAdd'>
                ADICIONAR
              </NavLink>
            </CustomButton>
            <Alert
              open={open}
              handleClose={handleClose}
              title="Excluir Cliente"
              content="Tem certeza que deseja excluir o cliente?"
              onAgree={() => handleDelete(selectedClienteId)}
              onDisagree={handleCancel}
            />
            <div className="tabela-cliente">
              <DataTable
                rows={clientes}
                columns={customColumns}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clientes;