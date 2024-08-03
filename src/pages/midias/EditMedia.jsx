import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditarMidia = () => {
  const { id } = useParams(); // Obtém o ID da mídia da URL
  const [midia, setMidia] = useState({});
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios.get(`http://localhost:8000/midias/${id}`)
  //     .then((response) => {
  //       setMidia(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Erro ao buscar a mídia:', error);
  //     });
  // }, [id]);

const handleChange = (e) => {
    const { name, value } = e.target;
    setMidia({...midia, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Atualiza os dados da mídia
    axios.put(`http://localhost:8000/midias/${id}`, midia)
      .then(() => {
        navigate('/midias'); // Redireciona para a lista de mídias após a edição
      })
      .catch((error) => {
        console.error('Erro ao atualizar a mídia:', error);
      });
  };

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            name="titulo"
            value={midia.titulo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Descrição:</label>
          <input
            type="text"
            name="descricao"
            value={midia.descricao}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tipo:</label>
          <input
            type="text"
            name="tipo"
            value={midia.tipo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            name="status"
            value={midia.status}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Data de Início:</label>
          <input
            type="date"
            name="data_inicio"
            value={midia.data_inicio}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Data de Fim:</label>
          <input
            type="date"
            name="data_fim"
            value={midia.data_fim}
            onChange={handleChange}
          />
        </div>
          <button type="submit">Salvar</button>
        </form>
  );
};

export default EditarMidia;