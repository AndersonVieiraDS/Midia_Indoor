import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ButtonUpload from "../../components/buttonupload/ButtonUpload";
import Label from "../../components/Texts/label/Label";
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import SubTitle from "../../components/Texts/Subtitle/Subtitle";
import CheckboxMidia from "../../components/CheckBox/CheckBoxMidia";
import ResponsiveDatePickers from "../../components/Calendar/Calendar";
import CustomInput from "../../components/input/input";
import Navbar from "../../components/navbar/Navbar";
import CheckboxStatus from "../../components/CheckBox/CheckBoxStatus";
import Select from "../../components/select/Select";
import CustomButton from "../../components/button/button";
import { NavLink } from 'react-router-dom';
import "../Styles/stylesCadastros.css";

const empresaOptions = [
  { value: 0, label: 'Softex' },
  { value: 1, label: 'Facilit' },
];

function EditMedia() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [media, setMedia] = useState({
    ativo: false,
    titulo: '',
    descricao: '',
    tm: '',
    empresa: '',
    start: '',
    finale: '',
    preview: ''
  });

  useEffect(() => {

    const fetchedMedia = {
      ativo: true,
      titulo: 'Campanha Natal',
      descricao: 'Descrição da Campanha Natal',
      tm: 'imagem',
      empresa: 'Softex',
      start: '01/10/2023',
      finale: '31/12/2023',
      preview: ''
    };
    setMedia(fetchedMedia);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedia((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Salvar as alterações
    console.log(media);
    navigate('/midias');
  };

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
                    <SubTitle text="Status" />
                    <CheckboxStatus checked={media.ativo} onChange={(e) => setMedia({ ...media, ativo: e.target.checked })} />
                  </div>
                  <div>
                    <SubTitle type="text" text="Tipo de Mídia" />
                    <CheckboxMidia value={media.tm} onChange={(e) => handleChange(e)} />
                  </div>
                </div>
                <div className="form-flex-row">
                  <CustomInput type="text" label="Titulo" value={media.titulo} name="titulo" onChange={handleChange} inputProps={{ sx: { width: '710px' } }} />
                </div>
                <div className="form-flex-row">
                  <CustomInput type="text" label="Descrição" value={media.descricao} name="descricao" onChange={handleChange} inputProps={{ sx: { width: '710px', height: '60px' } }} />
                </div>
                <div className="form-flex-row">
                  <div className="input-salas">
                    <Select label="Empresa" options={empresaOptions} value={media.empresa} name="empresa" onChange={handleChange} />
                  </div>
                  <div>
                    <ButtonUpload label="Anexar" />
                    <Label text1="*Máx. imagem 150MB" text2="*Máx. vídeo 4k 30fps de até 30 segundos." />
                  </div>
                </div>
                <div className="form-flex-row">
                  <CustomButton className="buttonAdd">
                    <NavLink to="/midias" className='buttonAdd'>
                      Cancelar
                    </NavLink>
                  </CustomButton>
                  <ButtonSalve text="SALVAR" onClick={handleSave} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditMedia;
