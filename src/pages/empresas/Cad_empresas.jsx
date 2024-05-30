import React from "react";
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import Title from "../../components/Texts/Title/Title";
import ButtonUpload from "../../components/buttonupload/ButtonUpload";
import Label from "../../components/Texts/label/Label";
import CustomInput from "../../components/input/input";
import "../Styles/stylesCadastros.css";
import Navbar from "../../components/navbar/Navbar";

export default function Cad_empresas() {
  return (
    <>
      <div className="NavBar">
        <Navbar />
        </div>

        <div className="cad-empresa">
        <div className="cad-empresa-container">
          <div className="cad-dados-empresa">
            <div>
              <form>
                <CustomInput type="text" label="CNPJ" />
                <CustomInput type="text" label="Razão social" />
                <CustomInput type="text" label="Nome fantasia" />
                <CustomInput type="password" label="Senha" />
                <CustomInput type="text" label="Contato" />
                <ButtonUpload label="Anexar Logo" className="buttonLogo" />
                <Label text1="*Formato PNG" text2="*até 50MB" /><br/>
                <ButtonSalve text="SALVAR" />
              </form>
            </div>
          </div>
        </div>
        </div>
      
    </>
  );
}
