import React from "react";
import CustomButton from "../../components/button/button";
import DataTable from "../../components/tabela/tabela";
import Title from "../../components/Texts/Title/Title";
import { Link, NavLink } from "react-router-dom";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "../Styles/stylesPages.css";
import Navbar from "../../components/navbar/Navbar";

function formatarCNPJ(cnpj) {
  cnpj = cnpj.replace(/\D/g, "");
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}

function formatarTelefone(numero) {
  numero = numero.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  return numero.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
}

const handleEdit = (id) => {
  console.log(`Editar item com ID: ${id}`);
};

const handleDelete = (id) => {
  console.log(`Deletar item com ID: ${id}`);
};

const customColumns = [
  {
    field: "id",
    headerName: "CNPJ",
    type: "number",
    flex: 1.7,
    valueFormatter: (params) => formatarCNPJ(params.value.toString()),
  },
  { field: "fullName", headerName: "Razão Social", flex: 2 },
  { field: "fantasyName", headerName: "Nome Fantasia", flex: 2 },
  {
    field: "celNumber",
    headerName: "Contato",
    type: "number",
   flex: 1.5,
    valueFormatter: (params) => formatarTelefone(params.value.toString()),
  },
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
  {
    id: 12345678901234,
    fullName: "BR Voice xxxxx",
    fantasyName: "Br Voice",
    celNumber: 8112345678,
  },
  {
    id: 87654321930899,
    fullName: "Softex Pernambuco",
    fantasyName: "Softex",
    celNumber: 8212354378,
  },
  {
    id: 87654350621891,
    fullName: "LanLink xxxxxxxxxxxxxxx",
    fantasyName: "LanLink",
    celNumber: 8112345578,
  },
  {
    id: 97654302521899,
    fullName: "di2win xxxxxxxxxxxxxx",
    fantasyName: "di2win",
    celNumber: 8112325678,
  },
  {
    id: 89654304921899,
    fullName: "Avantia xxxxxxx",
    fantasyName: "Avantia",
    celNumber: 8112348678,
  },
  // Adicione mais usuários conforme necessário
  // Preencha com os dados necessários do banco de dados
];

function Empresas() {
  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="empresa">
      <div className="empresa-container">
        <div className="dados-empresa">
        <CustomButton className="buttonAdd">
                <NavLink to="/empresas/cadastroempresas" className='buttonAdd'>
                  ADICIONAR
                  </NavLink>
                  </CustomButton>
          <div className="tabela-empresa">
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

export default Empresas;
