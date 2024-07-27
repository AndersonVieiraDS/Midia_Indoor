import React, { useState } from "react";
import axios from "axios";
import CustomInput from "../../components/input/input";
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { NavLink } from "react-router-dom";
import LogoLogin_softex from "../../components/logosLogin/Logo_softex";
import LogoLogin_itbc from "../../components/logosLogin/Logo_itbc";
import Title from '../../components/Texts/Title/Title'
import Linha from '../../imagens/Line1.svg'

const Login = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { login, senha });
    try {
      const response = await axios.post('http://localhost:8000/', {
        login,
        senha
      });

      if (response.status === 200) {
        setLoggedIn(true);
        navigate("/home");
      } else {
        alert('Login ou senha incorretos.')
        console.error('Erro no login:', response.statusText);
      }
    } catch (error) {
      alert('Por favor, faça login para continuar')
      console.error('Erro na requisição de login:', error);
    }
  };


  return (
    <div className="container">
      <div className="div-container">
        <div className="imagem">
          <div className="imagem1">
            <LogoLogin_softex />
          </div>
          <div className="imagem2">
            <LogoLogin_itbc />
          </div>
        </div>

        <div className="linha">
          <img src={Linha} />
        </div>

        <div className="form-container">
          {loggedIn ? (
            <h1>Usuário logado com sucesso!</h1>
          ) : (
            <form onSubmit={handleLogin}>
              <div>
                <Title text='Login' />
              </div>
              <CustomInput
                style={{ width: "100%" }}
                type="text"
                label="Usuário"
                variant="standard"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomInput
                style={{ width: "100%" }}
                type="password"
                label="Senha"
                variant="standard"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <br />
              <p className="text">Esqueceu a senha?</p>
              <br />
              <ButtonSalve type="submit" text="Entrar" />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
