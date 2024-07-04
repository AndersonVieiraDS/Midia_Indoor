import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo_softex from "../logos/Logo_softex";
import Logo_itbc from "../logos/logo_itbc";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import SettingsIcon from '@mui/icons-material/Settings';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const handleSettingsClick = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <nav>
      <div className="logo">
        <Logo_softex />
        <Logo_itbc />
      </div>

      {/* <Link to="/" className='tittle'>Website</Link> */}
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
        <Tooltip title="Home" placement="bottom">
          <NavLink to="/Home"><HomeIcon /></NavLink>
          </Tooltip>
        </li>
        <li>
  <Tooltip
    title={
      <div className="setting-user">
        <div>
          <NavLink to="/clientes">Clientes</NavLink>
        </div>
        <div>
          <NavLink to="/equipamentos">Equipamentos</NavLink>
        </div>
        <div>
          <NavLink to="/midias">Mídias</NavLink>
        </div>
        <div>
          <NavLink to="/salas">Salas</NavLink>
        </div>
        <div>
          <NavLink to="/usuarios">Usúarios</NavLink>
        </div>
      </div>
    }
    placement="bottom"
    interactive
    open={settingsOpen}
    onClose={() => setSettingsOpen(false)}
    onOpen={handleSettingsClick}
  >
    <SettingsIcon className="settings-icon" />
  </Tooltip>
</li>

        <li>
          <NavLink to="/">
            <LogoutIcon />
          </NavLink>
        </li>

      </ul>
      
    </nav>
  );
};

export default Navbar;
