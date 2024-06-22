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
import Empresas from "../clientes/Clientes";
import Select from "../../components/select/Select";
import { width } from "@mui/system";
import CustomButton from "../../components/button/button";
import { Link, NavLink } from 'react-router-dom'

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
                <div>
                  <Subtitle text="Status" />
                  <CheckboxStatus />
                </div>
                <div>
                  <SubTitle type="text" text="Tipo de Mídia" />
                  <CheckboxMidia />
                </div>
              </div>
              <div className="form-flex-row">
                <CustomInput type="text" label="Titulo" inputProps={{ sx: { width: '630px' } }} />
              </div>
              <div className="form-flex-row">
              <CustomInput type="text" label="Descrição" inputProps={{ sx: { width: '630px' ,height: '60px'} }}/>
              </div>
              <div className="form-flex-row">
                <div className="input-salas">
                  <Select label="Empresa" options={empresaOptions} />
                </div>
                <div>
                  <ButtonUpload label="Anexar" />
                  <Label text1="*Máx. imagem 150MB" text2="*Máx. vídeo 4k 30fps de até 30 segundos." />
                </div>
              </div>
              <div className="form-flex-row">
                <Subtitle text="Período de exibição" />
              </div>
              <div className="data-pick">
                <ResponsiveDatePickers />
              </div>
              <div className="form-flex-row">
                <CustomButton className="buttonAdd">
                <NavLink to="/midias" className='buttonAdd'>
                  Voltar
                  </NavLink>
                  </CustomButton>
                <ButtonSalve text="SALVAR" />
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default Cad_midias;
