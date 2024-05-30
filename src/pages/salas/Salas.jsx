import React, { useState } from "react";
import CustomButton from "../../components/button/button";
import Title from "../../components/Texts/Title/Title";
import DataTable from "../../components/tabela/tabela";
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import { Link, NavLink } from "react-router-dom";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "../Styles/stylesPages.css";
import Navbar from "../../components/navbar/Navbar";
import Select from "../../components/select/Select";

const handleEdit = (id) => {
  console.log(`Editar item com ID: ${id}`);
};

const handleDelete = (id) => {
  console.log(`Deletar item com ID: ${id}`);
};

const customColumns = [
  { field: "andar", headerName: "Andar", flex: 2 },
  { field: "id", headerName: "Sala", flex: 1 },
  { field: "empresa", headerName: "Empresa", flex: 2 },
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
  { id: 102, andar: "1º Andar", empresa: "Softex" },
  { id: 3, andar: "Mezanino", empresa: "UniBTA" },
  { id: 305, andar: "3º Andar", empresa: "Avantia" },
  { id: 501, andar: "5º Andar", empresa: "Noxtec" },
  { id: 603, andar: "6º Andar", empresa: "Consenso" },
  // Adicione mais usuários conforme necessário
  // Preencha com os dados necessários
  // ...
];

const andarOptions = [
  { value: 0, label: 'Mezanino' },
  { value: 1, label: '1º andar' },
];

const salaOptions = [
  { value: 0, label: '405' },
  { value: 1, label: '101' },
];

const empresaOptions = [
  { value: 0, label: 'Softex' },
  { value: 1, label: 'Facilit' },
];


function Salas() {
  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>
      
      <div className="salas">
      <div className="salas-container">
        <div className="dados-salas">
        <CustomButton >
                <NavLink to="/salas/cadastrosalas" className='buttonAdd'>
                  ADICIONAR
                  </NavLink>
                  </CustomButton>
          <div className="geral-salas">
            <div className="input-salas">
              <Select label="Andar" options={andarOptions} />
              <Select label="Sala" options={salaOptions} />
              <Select label="Empresa" options={empresaOptions} />
              <ButtonSalve text="Assossiar" />
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
        </div>
      </div>
      </div>
    </>
  );
}

export default Salas;
