import React, { useState } from 'react'
import CustomButton from '../../components/button/button'
import DataTable from '../../components/tabela/tabela'
import Title from '../../components/Texts/Title/Title';
import { Link, NavLink } from 'react-router-dom'
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import "../Styles/stylesPages.css";
import Navbar from '../../components/navbar/Navbar';


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

const customColumns = [
  {
    field: 'id', headerName: 'CPF', type: 'number', flex: 1,
    valueFormatter: (params) => formatarCPF(params.value.toString())
  },
  { field: 'fullName', headerName: 'Nome Completo', flex: 1.5 },
  { field: 'email', headerName: 'E-mail', flex: 1.5 },
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
      onClick={() => handleDelete(params.row.id)} 
      >
        <DeleteOutline />
      </IconButton>
    ),
  },
];

const customRows = [
  { id: 12345678900, fullName: 'Usuário de Teste 01', email: 'xxxxxx@gmail.com', tp: 'ADM', userName: 'usuario01' },
  { id: 87654321899, fullName: 'Usuário de Teste 02', email: 'xxxxx@hotmail.com', tp: 'ADM', userName: 'usuario02' },
  { id: 87654321891, fullName: 'Usuário de Teste 03', email: 'xxxxxxx@uol.com.br', tp: 'USR', userName: 'usuario03' },
  { id: 97654321899, fullName: 'Usuário de Teste 04', email: 'xxxxxx@globo.com', tp: 'USR', userName: 'usuario04' },
  { id: 89654321899, fullName: 'Usuário de Teste 05', email: 'xxxxxxx@ig.com.br', tp: 'USR', userName: 'usuario05' },
  { id: 89654321849, fullName: 'Usuário de Teste 06', email: 'xxxxxxx@gmail.com', tp: 'USR', userName: 'usuario06' },
  { id: 89654321869, fullName: 'Usuário de Teste 07', email: 'xxxxxxx@globo.com', tp: 'USR', userName: 'usuario07' },
  // Adicione mais usuários conforme necessário
  // Preencha com os dados necessários do banco de dados
];


function Usuarios() {

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
            <div className="tabela-usuario">
              <DataTable
                rows={customRows}
                columns={customColumns}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );

}



export default Usuarios
