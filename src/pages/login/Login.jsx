import React, { useState } from "react";
import CustomInput from "../../components/input/input";
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import "./Login.css";
import InputAdornment from "@mui/material/InputAdornment";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { NavLink } from "react-router-dom";
import LogoLogin_softex from "../../components/logosLogin/Logo_softex";
import LogoLogin_itbc from "../../components/logosLogin/Logo_itbc";
import Title from '../../components/Texts/Title/Title'
import Linha from '../../imagens/Line1.svg'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    // ... (seu código de login)
  };

  const handleAdminChange = (event) => {
    setIsAdmin(event.target.value);
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
          <img src={ Linha }/>
        </div>

        <div className="form-container">
          {loggedIn ? (
            <h1>Usuário logado com sucesso!</h1>
          ) : (
            <form onSubmit={handleLogin}>
              <div>
                <Title  text='Login'/>
              </div>
              <CustomInput
                style={{ width: "100%" }}
                type="text"
                label="Usuário"
                variant="standard"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <NavLink to="/Home" className="buttonLogin">
                <ButtonSalve type="submit" text="Entrar" />
              </NavLink>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
