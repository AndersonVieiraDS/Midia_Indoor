import React from "react";
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import CustomInput from "../../components/input/input";
import "../Styles/stylesCadastros.css";
import Navbar from "../../components/navbar/Navbar";

export default function Cad_salas() {

  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="cad-sala">
      <div className="cad-salas-container">
        <div className="cad-dados-salas">
          <div>
            <form>
              <CustomInput type="text" label="Andar" />
              <CustomInput type="text" label="Salas" />
              <ButtonSalve text="SALVAR" />
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
