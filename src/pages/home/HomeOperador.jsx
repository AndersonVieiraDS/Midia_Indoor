import React from "react";
import Saudacao from "/src/components/saudacao/Saudacao";
import "./Home.css";
import NavbarOperador from "../../components/navbar/Navbar";
import "../../components/basecss/base.css"


const Home = () => {
  return (
    <>
      <div className="NavBar">
        <NavbarOperador/>
      </div>

      <section className="hidden">
      <div className="saudacao">
        <Saudacao />
      </div>
      </section>

    </>
  );
};

export default Home;
