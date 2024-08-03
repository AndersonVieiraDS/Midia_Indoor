import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditarClientes = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/clientes/${id}`)
      .then((response) => {
        setCliente(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar o cliente:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({...cliente, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Atualiza os dados do cliente
    axios.put(`http://localhost:8000/clientes/${id}`, cliente)
      .then(() => {
        navigate('/clientes'); // Redireciona para a lista de clientes após a edição
      })
      .catch((error) => {
        console.error('Erro ao atualizar o cliente:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={cliente.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>CPF/CNPJ:</label>
        <input
          type="text"
          name="cpf_cnpj"
          value={cliente.cpf_cnpj}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Contato:</label>
        <input
          type="text"
          name="contato"
          value={cliente.contato}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type="text"
          name="telefone"
          value={cliente.telefone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={cliente.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Razao Social:</label>
        <input
          type="text"
          name="razao_social"
          value={cliente.razao_social}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default EditarClientes;