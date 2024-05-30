import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo_softex from "../logos/Logo_softex";
import Logo_itbc from "../logos/logo_itbc";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/telas">Telas</NavLink>
        </li>
        <li>
          <NavLink to="/">Logout</NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
