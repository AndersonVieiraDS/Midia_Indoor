import React, { useEffect, useState } from "react";
import axios from "axios";
import ButtonSalve from "../../components/buttonsalve/ButtonSalve";
import Subtitle from "../../components/Texts/Subtitle/Subtitle";
import CustomInput from "../../components/input/input";
import "../Styles/stylesCadastros.css";
import Navbar from "../../components/navbar/Navbar";
import CustomButton from "../../components/button/button";
import { NavLink } from 'react-router-dom';

export default function Cad_Midia() {
  const [midia, setMidia] = useState({
    titulo: "",
    descricao: "",
    cliente_id: "",
    caminho: "",
    tipo: "imagem", // padrão como 'imagem'
    status: "ativo", // padrão como 'ativo'
    data_inicio: "",
    data_fim: "",
  });

  const [clients, setClients] = useState([]); // Definindo o estado para armazenar os clientes

  useEffect(() => {
    // Fetching clients from the server
    axios.get('http://localhost:8000/cliente')
      .then(response => {
        // Verifica se a resposta é um array
        if (Array.isArray(response.data)) {
          setClients(response.data); // Populando o estado clients com os dados recebidos
        } else {
          console.error('A resposta da API não é um array:', response.data);
        }
      })
      .catch(error => {
        console.error('Erro ao buscar os clientes:', error);
      });
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      axios.post("http://localhost:8000/upload", formData)
        .then(response => {
          setMidia((prev) => ({
            ...prev,
            caminho: response.data.filePath, // Definindo o caminho do arquivo retornado pelo servidor
          }));
        })
        .catch(error => {
          console.error("Erro ao fazer upload do arquivo:", error);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMidia((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/midias", midia);
      console.log("Mídia cadastrada com sucesso:", response.data);
      alert("Mídia cadastrada com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar a mídia:", error);
      alert(`Erro ao cadastrar a mídia: ${error.response?.data?.message || 'Erro desconhecido'}`);
    }
  };

  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>

      <div className="cad-midia">
        <div className="cad-midia-container">
          <div className="cad-dados-midia">
            <form onSubmit={handleSubmit}>
              <div className="form-flex-row">
                <div>
                  <Subtitle text="Tipo de Mídia" />
                  <select
                    name="tipo"
                    value={midia.tipo}
                    onChange={handleChange}
                    required
                  >
                    <option value="imagem">Imagem</option>
                    <option value="video">Vídeo</option>
                  </select>
                </div>
                <div>
                  <Subtitle text="Status" />
                  <select
                    name="status"
                    value={midia.status}
                    onChange={handleChange}
                    required
                  >
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                  </select>
                </div>
              </div>

              <div className="form-flex-row">
                <CustomInput
                  type="text"
                  label="Título"
                  name="titulo"
                  value={midia.titulo}
                  onChange={handleChange}
                  inputProps={{ sx: { width: '710px' } }}
                  required
                />
              </div>

              <div className="form-flex-row">
                <CustomInput
                  type="textarea"
                  label="Descrição"
                  name="descricao"
                  value={midia.descricao}
                  onChange={handleChange}
                  inputProps={{ sx: { width: '710px' } }}
                  required
                />
              </div>

              <div className="form-flex-row">
                <CustomInput
                  type="date"
                  label="Data de Início"
                  name="data_inicio"
                  value={midia.data_inicio}
                  onChange={handleChange}
                  inputProps={{ sx: { width: '340px' } }}
                  required
                />
                <CustomInput
                  type="date"
                  label="Data de Fim"
                  name="data_fim"
                  value={midia.data_fim}
                  onChange={handleChange}
                  inputProps={{ sx: { width: '340px' } }}
                  required
                />
              </div>

              <div className="form-flex-row">
                <div>
                  <Subtitle text="Cliente" />
                  <select
                    name="cliente_id"
                    value={midia.cliente_id}
                    onChange={handleChange}
                    required
                    inputProps={{ sx: { width: '340px' } }}
                  >
                    <option value="">Selecione um cliente</option>
                    {clients.map(client => (
                      <option key={client.id} value={client.id}>{client.nome}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Subtitle text="Arquivo" />
                  <input
                    type="file"
                    name="caminho"
                    onChange={handleFileChange}
                    accept="image/*,video/*"
                  />
                </div>
              </div>

              <div className="form-flex-row">
                <CustomButton className="buttonAdd">
                  <NavLink to="/midias" className='buttonAdd'>
                    Cancelar
                  </NavLink>
                </CustomButton>
                <ButtonSalve text="SALVAR" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}