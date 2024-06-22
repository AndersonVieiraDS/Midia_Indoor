import React from "react";
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import CustomInput from "../../components/input/input";
import "../Styles/stylesCadastros.css";
import DataTable from "../../components/tabela/tabela";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import CustomButton from "../../components/button/button";
import { Link, NavLink } from 'react-router-dom'

const handleEdit = (id) => {
  console.log(`Editar item com ID: ${id}`);
};

const handleDelete = (id) => {
  console.log(`Deletar item com ID: ${id}`);
};

const customColumns = [
  { field: "andar", headerName: "Andar", flex: 2 },
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
        onClick={() => handleDelete(params.row.id)}
      >
        <DeleteOutline />
      </IconButton>
    ),
  },
];

const customRows = [
  { id: 102, andar: "1º Andar"},
  { id: 3, andar: "Mezanino"},
  { id: 305, andar: "3º Andar"},
  { id: 501, andar: "5º Andar"},
  { id: 603, andar: "6º Andar"},
  // Adicione mais usuários conforme necessário
  // Preencha com os dados necessários
  // ...
];

export default function Cad_salas() {

  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="cad-sala">
      <div className="cad-salas-container">
        <div className="cad-dados-salas">
          <div>
            <form>
              <div className="form-flex-row" >
                <div>
                <div className="input-salas">
                  <CustomInput type="text" label="Andar" inputProps={{ sx: { width: '250px' } }}/>
                  <CustomInput type="text" label="Salas" inputProps={{ sx: { width: '250px' } }}/>
                <div className="form-flex-row">
                  <CustomButton className="buttonAdd">
                  <NavLink to="/salas" className='buttonAdd'>
                    Voltar
                  </NavLink>
                  </CustomButton>
                  <ButtonSalve text="SALVAR" />
                  </div>
                </div>
                </div>
                <div className="tabela-salas">
                <DataTable
                  rows={customRows}
                  columns={customColumns}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
                </div>
              </div> 
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
