import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditarUsuario = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/usuarios/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/usuarios/${id}`, user)
      .then(() => {
        navigate('/usuarios');
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome Completo:</label>
        <input
          type="text"
          name="nome_completo"
          value={user.nome_completo || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Tipo:</label>
        <input
          type="text"
          name="tipo_usuario"
          value={user.tipo_usuario || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Login:</label>
        <input
          type="text"
          name="login"
          value={user.login || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Status:</label>
        <input
          type="checkbox"
          name="status"
          checked={user.status || false}
          onChange={(e) => handleChange({ target: { name: 'status', value: e.target.checked } })}
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default EditarUsuario;
