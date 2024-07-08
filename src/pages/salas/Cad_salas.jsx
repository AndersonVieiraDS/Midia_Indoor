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
import { useNavigate } from 'react-router-dom';
import Alert from '../../components/alerts/Alert';

const handleEdit = (id) => {
  console.log(`Editar item com ID: ${id}`);
};

const handleDelete = (id) => {
  console.log(`Deletar item com ID: ${id}`);
};



const customRows = [
  {ativo: true, id: 102, andar: "1º Andar" },
  {ativo: false, id: 3, andar: "Mezanino" },
  {ativo: true, id: 305, andar: "3º Andar" },
  {ativo: false, id: 501, andar: "5º Andar" },
  {ativo: true, id: 603, andar: "6º Andar" },
  // Adicione mais usuários conforme necessário
  // Preencha com os dados necessários
  // ...
];

export default function Cad_salas() {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    navigate ('/salas/cadastrosalas');
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
    { field: "id", headerName: "Sala", flex: 1 },
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
      <div className="cad-sala">
        <div className="cad-salas-container">
          <div className="cad-dados-salas">
                <div className="geral-salascad" >
                  <div className="ttt" > 
                    <div className="input-salascad">
                      <CustomInput type="text" label="Andar" inputProps={{ sx: { width: '250px' } }} />
                      <CustomInput type="text" label="Salas" inputProps={{ sx: { width: '250px' } }} />
                      <div className="form-flex-row">
                       
                       
                        <div className="td">
                          <NavLink to="/salas" className="buttonAdd">
                            Cancelar
                          </NavLink>
                          </div>
                      
                        <ButtonSalve text="SALVAR" />
                        </div>
                      </div>
                    </div>
                 
                  <Alert
                    open={open}
                    handleClose={handleClose}
                    title="Excluir Sala"
                    content="Tem certeza que deseja excluir a sala?"
                    agreeText={handleDelete}
                    disagreeText={handleCancel}
                  />
                  <div className="tabela-salascad">
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
