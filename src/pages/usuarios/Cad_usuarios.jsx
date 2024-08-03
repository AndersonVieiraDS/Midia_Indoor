import React, { useState } from "react";
import axios from "axios";
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import Subtitle from "../../components/Texts/Subtitle/Subtitle";
import CustomInput from "../../components/input/input";
import "../Styles/stylesCadastros.css";
import Navbar from "../../components/navbar/Navbar";
import CustomButton from "../../components/button/button";
import { NavLink } from 'react-router-dom'

export default function Cad_usuarios() {

  const [user, setUser] = useState({
    status: '',
    tipo_usuario: '',
    nome_completo: '',
    cpf: '',
    email: '',
    login: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await axios.post("http://localhost:8000/usuarios", user);
      console.log("Usuário cadastrado com sucesso:", response.data);
      alert("Usuário criado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar o usuário:", error);
      alert(`Erro ao criar usuário: ${error.response?.data?.message || 'Erro desconhecido'}`);
    }
  };

  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>

      <div className="cad-usuario">
        <div className="cad-usuario-container">
          <div className="cad-dados-usuario">
            <form onSubmit={handleSubmit}>
              <div className="form-flex-row">
              <div>
                  <Subtitle text="Status" />
                  <select
                    name="status"
                    value={user.status}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Selecione o Status</option>
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                  </select>
                </div>
                <div>
                  <Subtitle text="Tipo de usuário" />
                  <select
                    name="tipo_usuario"
                    value={user.tipo_usuario}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Selecione o usuário</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Operador">Operador</option>
                  </select>
                </div>
              </div>
              <div className="form-flex-row">
                <CustomInput type="text" label="Nome Completo" name="nome_completo"
                  value={user.nome_completo} onChange={handleChange} inputProps={{ sx: { width: '710px' } }} />
              </div>
              <div className="form-flex-row">
                <CustomInput type="text" label="CPF" name="cpf"
                  value={user.cpf} onChange={handleChange} inputProps={{ sx: { width: '275px' } }} />
                <CustomInput type="email" label="E-mail" name="email"
                  value={user.email} onChange={handleChange} inputProps={{ sx: { width: '275px' } }} />
              </div>
              <div className="form-flex-row">
                <CustomInput type="text" label="Login" name="login"
                  value={user.login} onChange={handleChange} inputProps={{ sx: { width: '275px' } }} />
                <CustomInput type="password" label="Senha" name="senha"
                  value={user.senha} onChange={handleChange} inputProps={{ sx: { width: '275px' } }} />
              </div>
              <div className="form-flex-row">
                <CustomButton className="buttonAdd">
                  <NavLink to="/usuarios" className='buttonAdd'>
                    Cancelar
                  </NavLink>
                </CustomButton>
                <ButtonSalve text="SALVAR" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}