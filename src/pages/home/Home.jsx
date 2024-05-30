import React from "react";
import Saudacao from "/src/components/saudacao/Saudacao";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import "../../components/basecss/base.css"


const Home = () => {
  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>

      <section className="home">
      <div className="saudacao">
        <Saudacao />
      </div>
      </section>

    </>
  );
};

export default Home;
