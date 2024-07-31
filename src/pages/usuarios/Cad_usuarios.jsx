import React, { useEffect, useState } from "react";
import axios from "axios";
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import Title from "../../components/Texts/Title/Title";
import CheckboxUser from "../../components/CheckBox/CheckBox";
import CheckboxStatus from "../../components/CheckBox/CheckBoxStatus"
import Subtitle from "../../components/Texts/Subtitle/Subtitle";
import CustomInput from "../../components/input/input";
import "../Styles/stylesCadastros.css";
import Navbar from "../../components/navbar/Navbar";
import CustomButton from "../../components/button/button";
import { Link, NavLink } from 'react-router-dom'


function Cad_usuarios() {

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    axios.post('api/usuarios', user)
      .then((response) => {
        console.log('Usuário cadastrado com sucesso:', response.data);
      })
      .catch((error) => {
        console.error('Erro ao cadastrar o usuário:', error);
      });
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
                  <CheckboxStatus name="status" checked={user.status} onChange={handleChange} />
                </div>
                <div>
                  <Subtitle text="Tipo de Usuário" />
                  <CheckboxUser name="tipo_usuario" checked={user.tipo_usuario} onChange={handleChange} />
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
export default Cad_usuarios;
