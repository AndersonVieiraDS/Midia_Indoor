import React, { useState } from "react";
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import CustomInput from "../../components/input/input";
import "../Styles/stylesCadastros.css";
import DataTable from "../../components/tabela/tabela";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import CustomButton from "../../components/button/button";
import { Link, NavLink } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckboxStatus from "../../components/CheckBox/CheckBoxStatus"
import Subtitle from "../../components/Texts/Subtitle/Subtitle";
import { useNavigate } from 'react-router-dom';
import Alert from '../../components/alerts/Alert';

const handleEdit = (id) => {
  console.log(`Editar item com ID: ${id}`);
};

const handleDelete = (id) => {
  console.log(`Deletar item com ID: ${id}`);
};

const customRows = [
  {ativo: true, id: "01", nome: "Tv 001", andar: "Mezanino" },
  {ativo: false, id: "02", nome: "Tv 101", andar: "1º Andar" },
  {ativo: true, id: "03", nome: "Tv 302", andar: "3º Andar" },
  {ativo: false, id: "04", nome: "Tv 501", andar: "5º Andar" },
  {ativo: true, id: "05", nome: "Tv 603", andar: "6º Andar" },
  // Adicione mais usuários conforme necessário
  // Preencha com os dados necessários
  // ...
];

export default function Equipamentos() {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    navigate ('/equipamentos');
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
    { field: "andar", headerName: "Andar", flex: 1.5 },
    { field: "id", headerName: "Equipamento", flex: 1 },
    { field: "nome", headerName: "Descrição", flex: 1 },
    {
      field: "edit",
      headerName: "",
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
      field: "delete",
      headerName: "",
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
      <div className="cad-equipamento">
        <div className="cad-equipamento-container">
          <div className="cad-dados-equipamento">
                <div className="geral-equipamento-cad" >
                  <div > 
                    <div className="input-equipamento-cad">
                    <div>
                  <Subtitle text="Status" />
                  <CheckboxStatus />
                </div>
                      <CustomInput type="text" label="Andar" inputProps={{ sx: { width: '250px' } }} />
                      <CustomInput type="text" label="Equipamento" inputProps={{ sx: { width: '250px' } }} />
                      <CustomInput type="text" label="Descrição" inputProps={{ sx: { width: '250px' } }} />
                      <ButtonSalve text="SALVAR" />
                     
                    </div>
                  </div>
                  <Alert
                    open={open}
                    handleClose={handleClose}
                    title="Excluir Equipamento"
                    content="Tem certeza que deseja excluir o equipamento?"
                    agreeText={handleDelete}
                    disagreeText={handleCancel}
                  />
                  <div className="tabela-equipamento-cad">
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
      </div>
    </>
  );
}
