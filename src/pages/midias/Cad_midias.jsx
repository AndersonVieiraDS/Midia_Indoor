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
import CheckboxStatus from "../../components/CheckBox/CheckBoxStatus"
import Salas from "../salas/Salas";
import Empresas from "../empresas/Empresas";
import Select from "../../components/select/Select";
import { width } from "@mui/system";

const empresaOptions = [
  { value: 0, label: 'Softex' },
  { value: 1, label: 'Facilit' },
];

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
              <div className="form-flex-row">
              <CustomInput type="text" label="Titulo" inputProps={{ sx: { width: '250px' } }} />
              <Subtitle text="Status" />
                    <CheckboxStatus />
              </div>
              <div className="form-flex-row">
              <CustomInput type="text" label="Descrição" inputProps={{ sx: { width: '630px' ,height: '80px'} }}/>
              </div>
            <div className="form-flex-row">
            <SubTitle type="text" text="Tipo de Mídia" />
              </div>
            <div className="form-flex-row">
            <CheckboxMidia />
            <ButtonUpload label="Anexar" />
            <Label text1="*Formato máximo permitido imagem de até 150MB" text2="*Formato máximo permitido vídeo 4k 30fps de até 30 segundos." />
              </div>
              <div className="geral-salas">
              <Select type="text" label="Empresa vinculada a midia" options={empresaOptions} inputProps={{ sx: {width: '250'}}}/>
            </div> 
       
            <div className="form-flex-row">
              <Subtitle text="Período de exibição" />
              </div>
            <div className="data-pick">
              <ResponsiveDatePickers />
            </div>
            <div>
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
