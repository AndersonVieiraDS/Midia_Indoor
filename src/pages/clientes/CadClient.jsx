import React, { useState } from "react";
import axios from "axios";
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import Subtitle from "../../components/Texts/Subtitle/Subtitle";
import CustomInput from "../../components/input/input";
import "../Styles/stylesCadastros.css";
import Navbar from "../../components/navbar/Navbar";
import CustomButton from "../../components/button/button";
import { NavLink } from 'react-router-dom';

export default function Cad_clientes() {
  const [tipoCliente, setTipoCliente] = useState(""); // PF ou PJ
  const [cliente, setCliente] = useState({
    nome: "",
    cpf_cnpj: "",
    email: "",
    contato: "",
    telefone: "",
    status: "",
    logo: "",
    razao_social: "",
  });

  const handleTipoChange = (e) => {
    setTipoCliente(e.target.value);
    setCliente({
      ...cliente,
      cpf_cnpj: "",
      razao_social: "",
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCliente((prev) => ({
          ...prev,
          logo: reader.result, // Base64 string do arquivo
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/clientes", cliente);
      console.log("Cliente cadastrado com sucesso:", response.data);
      alert("Cliente criado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar o cliente:", error);
      alert(`Erro ao criar cliente: ${error.response?.data?.message || 'Erro desconhecido'}`);
    }
  };

  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>

      <div className="cad-cliente">
        <div className="cad-cliente-container">
          <div className="cad-dados-cliente">
            <form onSubmit={handleSubmit}>
              <div className="form-flex-row">
                <div>
                  <Subtitle text="Tipo de Cliente" />
                  <select
                    name="tipoCliente"
                    value={tipoCliente}
                    onChange={handleTipoChange}
                    required
                  >
                    <option value="" disabled>Selecione</option>
                    <option value="PF">Pessoa Física</option>
                    <option value="PJ">Pessoa Jurídica</option>
                  </select>
                </div>
                <div>
                  <Subtitle text="Status" />
                  <select
                    name="status"
                    value={cliente.status}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Selecione o Status</option>
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                  </select>
                </div>
              </div>
              <div className="form-flex-row">
                <CustomInput
                  type="text"
                  label={tipoCliente === "PF" ? "Nome Completo" : "Razão Social"}
                  name="nome"
                  value={cliente.nome}
                  onChange={handleChange}
                  inputProps={{ sx: { width: '710px' } }}
                  required
                />
              </div>
              {tipoCliente === "PF" ? (
                <div className="form-flex-row">
                  <CustomInput
                    type="text"
                    label="CPF"
                    name="cpf_cnpj"
                    value={cliente.cpf_cnpj}
                    onChange={handleChange}
                    inputProps={{ sx: { width: '275px' } }}
                    required
                  />
                </div>
              ) : (
                <>
                  <div className="form-flex-row">
                    <CustomInput
                      type="text"
                      label="CNPJ"
                      name="cpf_cnpj"
                      value={cliente.cpf_cnpj}
                      onChange={handleChange}
                      inputProps={{ sx: { width: '275px' } }}
                      required
                    />
                    <CustomInput
                      type="text"
                      label="Razão Social"
                      name="razao_social"
                      value={cliente.razao_social}
                      onChange={handleChange}
                      inputProps={{ sx: { width: '275px' } }}
                      required
                    />
                  </div>
                </>
              )}
              <div className="form-flex-row">
                <CustomInput
                  type="email"
                  label="E-mail"
                  name="email"
                  value={cliente.email}
                  onChange={handleChange}
                  inputProps={{ sx: { width: '275px' } }}
                  required
                />
                <CustomInput
                  type="text"
                  label="Contato"
                  name="contato"
                  value={cliente.contato}
                  onChange={handleChange}
                  inputProps={{ sx: { width: '275px' } }}
                  required
                />
              </div>
              <div className="form-flex-row">
                <CustomInput
                  type="text"
                  label="Telefone"
                  name="telefone"
                  value={cliente.telefone}
                  onChange={handleChange}
                  inputProps={{ sx: { width: '275px' } }}
                  required
                />
                <div>
                  <Subtitle text="Logo" />
                  <input
                    type="file"
                    name="logo"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                </div>
              </div>
              <div className="form-flex-row">
                <CustomButton className="buttonAdd">
                  <NavLink to="/clientes" className='buttonAdd'>
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