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

function formatarCPF(cpf) {
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  return cpf.replace(cpfRegex, '$1.$2.$3-$4');
}

const Usuarios = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/usuarios')
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/usuarios/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
        setOpen(false);
        navigate('/usuarios'); // Redireciona para a tela de usuários após a exclusão
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  const handleClickOpen = (id) => {
    setSelectedUserId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
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
      field: 'cpf', headerName: 'CPF', type: 'number', flex: 1,
      valueFormatter: (params) => formatarCPF(params.value.toString())
    },
    { field: 'nome_completo', headerName: 'Nome Completo', flex: 1.5 },
    { field: 'email', headerName: 'E-mail', flex: 1.2 },
    { field: 'tipo_usuario', headerName: 'Tipo', flex: 0.5 },
    { field: 'login', headerName: 'Usuário', flex: 0.8 },
    {
      field: 'edit',
      headerName: '',
      flex: 0.5,
      sortable: false,
      renderCell: (params) => (
        <NavLink to={`/editar-usuario/${params.row.id}`}>
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

      <div className='usuarios'>
        <div className="usuarios-container">
          <div className="dados-usuario">
            <CustomButton className="buttonAdd">
              <NavLink to="/cadastrar-usuario" className='buttonAdd'>
                ADICIONAR
              </NavLink>
            </CustomButton>
            <Alert
              open={open}
              handleClose={handleClose}
              title="Excluir Usuário"
              content="Tem certeza que deseja excluir o usuário?"
              onAgree={() => handleDelete(selectedUserId)} // Função ao clicar em "Confirmar"
              onDisagree={handleCancel} // Função ao clicar em "Cancelar"
            />
            <div className="tabela-usuario">
              <DataTable
                rows={users}
                columns={customColumns}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Usuarios;