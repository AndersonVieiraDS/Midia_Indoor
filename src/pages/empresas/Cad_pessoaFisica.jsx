import React from "react";
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import Title from "../../components/Texts/Title/Title";
import ButtonUpload from "../../components/buttonupload/ButtonUpload";
import CheckboxStatus from "../../components/CheckBox/CheckBoxStatus"
import Subtitle from "../../components/Texts/Subtitle/Subtitle";
import Label from "../../components/Texts/label/Label";
import CustomInput from "../../components/input/input";
import "../Styles/stylesCadastros.css";
import Navbar from "../../components/navbar/Navbar";

export default function Cad_pessoaFisica() {
  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>

        <div className="cad-empresa">
          <div className="cad-empresa-container">
            <div className="cad-dados-empresa">
              <form>
                <div className="form-flex-row">
                  <div>
                    <Subtitle text="Status" />
                    <CheckboxStatus />
                  </div>
                  <CustomInput type="text" label="CPF" inputProps={{ sx: { width: '350px' } }}/>
                </div>
                <div className="form-flex-row">
                  <CustomInput type="text" label="Nome" inputProps={{ sx: { width: '610px' } }}/>
                </div>
                <div className="form-flex-row">
                  <CustomInput type="text" label="E-mail" inputProps={{ sx: { width: '610px' } }}/>
                </div>
                <div className="form-flex-row">
                  <CustomInput type="text" label="Contato" inputProps={{ sx: { width: '250px' } }}/>
                  <CustomInput type="text" label="Telefone" inputProps={{ sx: { width: '250px' } }}/>
                </div>
                <div className="anexos-right">
                <ButtonUpload label="Anexar Logo" className="buttonLogo" />
                <Label text1="*Formato PNG" text2="*até 50MB" /><br/>
                </div>
                <ButtonSalve text="SALVAR" />
              </form>
            </div>
          </div>
        </div>
      
    </>
  );
}
