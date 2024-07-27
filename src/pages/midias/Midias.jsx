import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import CustomButton from "../../components/button/button";
import DataTable from "../../components/tabela/tabela";
import { NavLink, useNavigate } from "react-router-dom";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { IconButton } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "../Styles/stylesPages.css";
import Navbar from "../../components/navbar/Navbar";
import Alert from '../../components/alerts/Alert';
import AlertImage from '../../components/alerts/AlertImage';
import imagem1 from '../../imagens/testeCarousel/Teste1.png';
import imagem2 from '../../imagens/testeCarousel/Teste2.png';
import imagem3 from '../../imagens/testeCarousel/Teste3.png';
import imagem4 from '../../imagens/testeCarousel/Teste4.png';
import imagem5 from '../../imagens/testeCarousel/Teste5.png';
import SettingsIcon from '@mui/icons-material/Settings';

const handleEdit = (id, navigate) => {
  navigate(`/midias/edit/${id}`);
};

const handlePreview = (id) => {
  console.log(`Visualizar item com ID: ${id} `);
}

const handleDelete = (id) => {
  console.log(`Deletar item com ID: ${id}`);
};

/*const customRows = [
  {
    ativo: true,
    id: "Campanha Natal",
    cliente: "Softex",
    tm: "imagem",
    start: "01/10/2023",
    finale: "31/12/2023",
    preview: imagem1,
  },
  {
    ativo: false,
    id: "Campanha Teste1",
    cliente: "BR Voice",
    tm: "video",
    start: "01/10/2023",
    finale: "31/12/2023",
    preview: imagem2,
  },
  {
    ativo: true,
    id: "Campanha Teste2",
    cliente: "LanLink",
    tm: "imagem",
    start: "01/10/2023",
    finale: "31/12/2023",
    preview: imagem3,
  },
  {
    ativo: true,
    id: "Campanha Teste3",
    cliente: "di2Win",
    tm: "imagem",
    start: "01/10/2023",
    finale: "31/12/2023",
    preview: imagem4,
  },
  {
    ativo: true,
    id: "Campanha Teste4",
    cliente: "Avantia",
    tm: "video",
    start: "01/10/2023",
    finale: "31/12/2023",
    preview: imagem5,
  },
];*/

function Midias() {

  const [medias, setMedias] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedMidiaId, setSelectedMidiaId] = useState(null);
  const [openImage, setOpenImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/midias')
      .then((response) => {
        setMedias(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const formatDate = (date) => {
    return format(new Date(date), 'dd/MM/yyyy');
  };

  const handleClickOpen = (id) => {
    setSelectedMidiaId(id);
    setOpen(true);
  };

  const handleClickOpenImage = (id) => {
    setSelectedMidiaId(id);
    setOpenImage(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseImage = () => {
    setOpenImage(false);
    setSelectedImage('');
  }

  const handleCancel = () => {
    navigate ('/midias');
    handleClose();
  };

  /*const handleConfirmText = () => {
    navigate('/midias');
    handleCloseImage();
  }*/
  const handleConfig = () => {
    navigate('/midias/config');
    handleCloseImage();
  }

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
    { field: "titulo", headerName: "Título", flex: 2},
    { field: "cliente", headerName: "Cliente", flex: 2 },
    { field: "tipo", headerName: "TM", flex: 1 },
    { field: "data_inicio", headerName: "Período Inicial", flex: 1.3, renderCell: (params) => (
      <span>{formatDate(params.value)}</span>
    ),},
    { field: "data_fim", headerName: "Período Final", flex: 1.3, renderCell: (params) => (
      <span>{formatDate(params.value)}</span>
    ),},
    
    {
      field: "config",
      headerName: "",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => (
        <IconButton
          aria-label="config"
          size="small"
          onClick={() => handleConfig(params.row.id, navigate)}
        >
          <SettingsIcon />
        </IconButton>
      ),
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
          onClick={() => handleEdit(params.row.id, navigate)}
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
          onClick={() => handleClickOpenImage(params.row.preview)}
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

      <div className="midia">
      <div className="midia-container">
        <div className="dados-midia">
        <CustomButton className="buttonAdd">
                <NavLink to="/midias/cadastromidias" className='buttonAdd'>
                  ADICIONAR
                  </NavLink>
                  </CustomButton>
                  <Alert
                    open={open}
                    handleClose={handleClose}
                    title="Excluir Mídia"
                    content="Tem certeza que deseja excluir a mídia?"
                    agreeText={() => handleDelete(selectedMidiaId)}
                    disagreeText={handleCancel}
                  />
                  <AlertImage
                    open={openImage}
                    handleClose={handleCloseImage}
                    title="Visualizar Mídia"
                    imageUrl={selectedMidiaId}
                    confirmText="Voltar"
                  />
          <div className="tabela-midia">
            <DataTable
              rows={medias}
              columns={customColumns}
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Midias;
