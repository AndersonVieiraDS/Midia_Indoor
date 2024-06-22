import React, { useState } from 'react'
import CustomButton from '../../components/button/button'
import DataTable from '../../components/tabela/tabela'
import Title from '../../components/Texts/Title/Title';
import { Link, NavLink } from 'react-router-dom'
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "../Styles/stylesPages.css";
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Alert from '../../components/alerts/Alert';


function formatarCPF(cpf) {
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  return cpf.replace(cpfRegex, '$1.$2.$3-$4');
}

const handleEdit = (id) => {
  console.log(`Editar item com ID: ${id}`);
};

const handleDelete = (id) => {
  console.log(`Deletar item com ID: ${id}`);
};


const customRows = [
  { ativo: true, id: 12345678900, fullName: 'Usuário de Teste 01', email: 'xxxxxx@gmail.com', tp: 'ADM', userName: 'usuario01' },
  { ativo: false, id: 87654321899, fullName: 'Usuário de Teste 02', email: 'xxxxx@hotmail.com', tp: 'ADM', userName: 'usuario02' },
  { ativo: true, id: 87654321891, fullName: 'Usuário de Teste 03', email: 'xxxxxxx@uol.com.br', tp: 'USR', userName: 'usuario03' },
  { ativo: false, id: 97654321899, fullName: 'Usuário de Teste 04', email: 'xxxxxx@globo.com', tp: 'USR', userName: 'usuario04' },
  { ativo: true, id: 89654321899, fullName: 'Usuário de Teste 05', email: 'xxxxxxx@ig.com.br', tp: 'USR', userName: 'usuario05' },
  { ativo: true, id: 89654321849, fullName: 'Usuário de Teste 06', email: 'xxxxxxx@gmail.com', tp: 'USR', userName: 'usuario06' },
  { ativo: true, id: 89654321869, fullName: 'Usuário de Teste 07', email: 'xxxxxxx@globo.com', tp: 'USR', userName: 'usuario07' },
  // Adicione mais usuários conforme necessário
  // Preencha com os dados necessários do banco de dados
];


function Usuarios() {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    navigate ('/usuarios');
    handleClose();
  };

  const customColumns = [
    {
      field: 'status',
      headerName: 'Status',
      flex: 0.7,
      renderCell: (params) => (
        <IconButton disabled>
          {params.row.ativo ? <CheckCircleIcon style={{ color: 'green' }} /> : <CancelIcon style={{ color: 'gray' }} />}
        </IconButton>
      ),
    },
    {
      field: 'id', headerName: 'CPF', type: 'number', flex: 1,
      valueFormatter: (params) => formatarCPF(params.value.toString())
    },
    { field: 'fullName', headerName: 'Nome Completo', flex: 1.2 },
    { field: 'email', headerName: 'E-mail', flex: 1.2 },
    { field: 'tp', headerName: 'TP',flex: 0.5 },
    { field: 'userName', headerName: 'Usuário', flex: 0.8 },
    {
      field: 'edit',
      headerName: '',
      flex: 0.5,
      sortable: false,
      renderCell: (params) => (
        <IconButton 
        aria-label="edit" 
        size="small" 
        onClick={() => handleEdit(params.row.id)} 
        >
          <EditOutlined />
        </IconButton>
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
                <NavLink to="/usuarios/cadastrousuarios" className='buttonAdd'>
                  ADICIONAR
                  </NavLink>
                  </CustomButton>
                  <Alert
                    open={open}
                    handleClose={handleClose}
                    title="Excluir Usuário"
                    content="Tem certeza que deseja excluir o usuário?"
                    agreeText={handleDelete}
                    disagreeText={handleCancel}
                  />
            <div className="tabela-usuario">
              <DataTable
                rows={customRows}
                columns={customColumns}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );

}



export default Usuarios
