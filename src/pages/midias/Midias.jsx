import React from "react";
import CustomButton from "../../components/button/button";
import DataTable from "../../components/tabela/tabela";
import Title from "../../components/Texts/Title/Title";
import { Link, NavLink } from "react-router-dom";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { IconButton } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "../Styles/stylesPages.css";
import Navbar from "../../components/navbar/Navbar";

const handleEdit = (id) => {
  console.log(`Editar item com ID: ${id}`);
};

const handlePreview = (id) => {
  console.log(`Visualizar item com ID: ${id} `);
}

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
  { field: "id", headerName: "Título", flex: 2},
  { field: "description", headerName: "Descrição", flex: 2.5 },
  { field: "tm", headerName: "TM", flex: 1 },
  { field: "start", headerName: "Período Inicial", flex: 1.5 },
  { field: "finale", headerName: "Período Final", flex: 1.5 },
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
    field: "preview",
    headerName: "",
    flex: 0.5,
    sortable: false,
    renderCell: (params) => (
      <IconButton
        aria-label="preview"
        size="small"
        onClick={() => handlePreview(params.row.id)}
      >
        <VisibilityOutlinedIcon />
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
    id: "Campanha Natal",
    description: "Campanha da Softex de Natal",
    tm: "imagem",
    start: "01/10/2023",
    finale: "31/12/2023",
  },
  {
    ativo: false,
    id: "Campanha Teste1",
    description: "Campanha da Softex de Natal2",
    tm: "video",
    start: "01/10/2023",
    finale: "31/12/2023",
  },
  {
    ativo: true,
    id: "Campanha Teste2",
    description: "Campanha da Softex de Natal3",
    tm: "imagem",
    start: "01/10/2023",
    finale: "31/12/2023",
  },
  {
    ativo: true,
    id: "Campanha Teste3",
    description: "Campanha da Softex de Natal4",
    tm: "imagem",
    start: "01/10/2023",
    finale: "31/12/2023",
  },
  {
    ativo: true,
    id: "Campanha Teste4",
    description: "Campanha da Softex de Natal5",
    tm: "video",
    start: "01/10/2023",
    finale: "31/12/2023",
  },
  // Adicione mais usuários conforme necessário
  // Preencha com os dados necessários do banco de dados
];

function Midias() {
  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>

      <div className="midia">
      <div className="midia-container">
        <div className="dados-midia">
        <CustomButton className="buttonAdd">
                <NavLink to="/midias/cadastromidias" className='buttonAdd'>
                  ADICIONAR
                  </NavLink>
                  </CustomButton>
          <div className="tabela-midia">
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

export default Midias;
