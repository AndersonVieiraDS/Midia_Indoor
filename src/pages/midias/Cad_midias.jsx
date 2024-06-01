import React from "react";
import ButtonUpload from "../../components/buttonupload/ButtonUpload";
import Label from "../../components/Texts/label/Label";
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import Title from "../../components/Texts/Title/Title";
import SubTitle from "../../components/Texts/Subtitle/Subtitle";
import CheckboxMidia from "../../components/CheckBox/CheckBoxMidia";
import Subtitle from "../../components/Texts/Subtitle/Subtitle";
import ResponsiveDatePickers from "../../components/Calendar/Calendar";
import CustomInput from "../../components/input/input";
import "../Styles/stylesCadastros.css";
import Navbar from "../../components/navbar/Navbar";

function Cad_midias() {
  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>

    <div className="cad-midia">
      <div className="cad-midia-container">
        <div className="cad-dados-midia">
          <div>
            <form>
            <CustomInput label="Titulo" />
            <CustomInput label="Descrição" />
            <SubTitle text="Tipo de Mídia" />
            <CheckboxMidia />
            <ButtonUpload label="Anexar" />
            <Label text1="*Formato máximo permitido imagem de até 150MB" text2="*Formato máximo permitido vídeo 4k 30fps de até 30 segundos." />
            <Subtitle text="Período de exibição" />
            <div className="data-pick">
              <ResponsiveDatePickers />
            </div>
            <ButtonSalve text="SALVAR" />
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default Cad_midias;
