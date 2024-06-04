import React from "react";
import CustomButton from "../../components/button/button";
import DataTable from "../../components/tabela/tabela";
import Title from "../../components/Texts/Title/Title";
import { Link, NavLink } from "react-router-dom";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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
    field: "id",
    headerName: "CPF / CNPJ",
    type: "number",
    flex: 2,
    valueFormatter: (params) => formatarCNPJ(params.value.toString()),
  },
  { field: "fantasyName", headerName: "Nome / Nome Fantasia", flex: 3 },
  { field: "contato", headerName: "Contato", flex: 1.5 },
  {
    field: "celNumber",
    headerName: "Telefone",
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
    ativo: true,
    id: 12345678901234,
    fantasyName: "Br Voice",
    contato: "Rafael",
    celNumber: 8112345678,
  },
  {
    ativo: true,
    id: 87654321930899,
    fantasyName: "Softex",
    contato: "Isabela",
    celNumber: 8212354378,
  },
  {
    id: 87654350621891,
    fantasyName: "LanLink",
    contato: "Felipe",
    celNumber: 8112345578,
  },
  {
    ativo: false,
    id: 97654302521899,
    fantasyName: "di2win",
    contato: "Paulo",
    celNumber: 8112325678,
  },
  {
    ativo: true,
    id: 89654304921899,
    fantasyName: "Avantia",
    contato: "Priscila",
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
                <NavLink className='buttonAdd' to="/empresas/cadastrofisica" >
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
