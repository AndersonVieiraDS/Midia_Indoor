import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import SubTitle from "../../components/Texts/Subtitle/Subtitle";
import ResponsiveDatePickers from "../../components/Calendar/Calendar";
import Navbar from "../../components/navbar/Navbar";
import CustomButton from "../../components/button/button";
import { NavLink } from 'react-router-dom';
import "../Styles/stylesCadastros.css";

function ConfigMidias() {
  const navigate = useNavigate();

  const [config, setConfig] = useState({
    start: '',
    finale: '',
    diasSemana: {
      todosDias: false,
      segunda: false,
      terca: false,
      quarta: false,
      quinta: false,
      sexta: false,
      sabado: false,
      domingo: false,
    },
    locais: {
      geral: false,
      mezanino: false,
      primeiroAndar: false,
      segundoAndar: false,
      terceiroAndar: false,
      quartoAndar: false,
      quintoAndar: false,
    },
  });

  useEffect(() => {
    const fetchedConfig = {
      start: '01/01/2024',
      finale: '31/12/2024',
      diasSemana: {
        todosDias: false,
        segunda: false,
        terca: false,
        quarta: false,
        quinta: false,
        sexta: false,
        sabado: false,
        domingo: false,
      },
      locais: {
        geral: false,
        mezanino: false,
        primeiroAndar: false,
        segundoAndar: false,
        terceiroAndar: false,
        quartoAndar: false,
        quintoAndar: false,
        sextoAndar: false,
      },
    };
    setConfig(fetchedConfig);
  }, []);

  const handleCheckboxChange = (group, name, checked) => {
    setConfig((prev) => {
      const updatedGroup = { ...prev[group], [name]: checked };

      if (name === 'todosDias' && group === 'diasSemana') {
        Object.keys(updatedGroup).forEach((key) => {
          updatedGroup[key] = checked;
        });
      }

      if (name === 'geral' && group === 'locais') {
        Object.keys(updatedGroup).forEach((key) => {
          updatedGroup[key] = checked;
        });
      }

      return { ...prev, [group]: updatedGroup };
    });
  };

  const handleSave = () => {
    console.log(config);
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
            <form>
              <div className="form-flex-row">
                <SubTitle text="Período de exibição" />
              </div>
              <div className="data-pick">
                <ResponsiveDatePickers 
                  value={config.start} 
                  name="start" 
                  onChange={(date) => setConfig({ ...config, start: date })} 
                />
              </div>
              <div className="form-flex-column">
                <SubTitle text="Dias da Semana" />
                <div className="checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      checked={config.diasSemana.todosDias}
                      onChange={(e) => handleCheckboxChange('diasSemana', 'todosDias', e.target.checked)}
                    />
                    Todos os dias
                  </label>
                  {Object.keys(config.diasSemana).map((dia) => dia !== 'todosDias' && (
                    <label key={dia}>
                      <input
                        type="checkbox"
                        checked={config.diasSemana[dia]}
                        onChange={(e) => handleCheckboxChange('diasSemana', dia, e.target.checked)}
                      />
                      {dia.charAt(0).toUpperCase() + dia.slice(1)}
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-flex-column">
                <SubTitle text="Locais" />
                <div className="checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      checked={config.locais.geral}
                      onChange={(e) => handleCheckboxChange('locais', 'geral', e.target.checked)}
                    />
                    Geral
                  </label>
                  {Object.keys(config.locais).map((local) => local !== 'geral' && (
                    <label key={local}>
                      <input
                        type="checkbox"
                        checked={config.locais[local]}
                        onChange={(e) => handleCheckboxChange('locais', local, e.target.checked)}
                      />
                      {local.charAt(0).toUpperCase() + local.slice(1).replace('Andar', ' Andar')}
                    </label>
                  ))}
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
    </>
  );
}

export default ConfigMidias;
