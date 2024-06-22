import React from "react";
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

function formatarCPF(cpf) {
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  return cpf.replace(cpfRegex, "$1.$2.$3-$4");
}

function Cad_usuarios() {
  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>

    <div className="cad-usuario">
      <div className="cad-usuario-container">
        <div className="cad-dados-usuario">
            <form>
              <div className="form-flex-row">
                <div>
                  <Subtitle text="Status" />
                  <CheckboxStatus />
                </div>
                <div>
                  <Subtitle text="Tipo de Usuário" />
                  <CheckboxUser />
                </div>
              </div>
              <div className="form-flex-row">
                <CustomInput type="text" label="Nome Completo" inputProps={{ sx: { width: '610px' } }}/>  
              </div>
              <div className="form-flex-row">
                <CustomInput type="text" label="CPF" onChange={formatarCPF} inputProps={{ sx: { width: '250px' } }}/>
                <CustomInput type="email" label="E-mail" inputProps={{ sx: { width: '250px' } }}/>
              </div>
              <div className="form-flex-row">
                <CustomInput type="text" label="Login" inputProps={{ sx: { width: '250px' } }}/>
                <CustomInput type="password" label="Senha" inputProps={{ sx: { width: '250px' } }}/>
              </div>
              <div className="form-flex-row">
              <CustomButton className="buttonAdd">
                <NavLink to="/usuarios" className='buttonAdd'>
                  Voltar
                  </NavLink>
                  </CustomButton>
                <ButtonSalve text="SALVAR" />
              </div>
            </form>
        </div>
      </div>
      </div>
    </>
  );
}
export default Cad_usuarios;
