const listaEmpresa = () => {
    return fetch(/*`http://localhost:3000/empresa`- colocar o http do bd.json*/).then((resposta) => {
      if (resposta.ok) {
        return resposta.json();
      }
      throw new Error("Não foi possível listar as Empresas");
    });
  };
  
  const criarEmpresa = (id, fullName, fantasyName, celNumber) => {
    return fetch(/*`http://localhost:3000/empresa`,*/ {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        CNPJ: id,
        fullName: fullName,
        fantasyName: fantasyName,
        celNumber: celNumber,
      }),
    }).then((resposta) => {
      if(resposta.ok) {
          return resposta.body;
      }
      throw new Error("Não foi possível criar uma Empresa");
    });
  };
  
  const removeEmpresa = (id) => {
    return fetch(/*`http://localhost:3000/empresa/${id}`,*/ {
      method: "DELETE",
    }).then(resposta => {
      if(!resposta.ok) {
          throw new Error("Não foi possível remover uma Empresa");
      }
    })
  };
  
  
  const atualizaEmpresa = (id, fullName, fantasyName, celNumber) => {
    return fetch(/*`http://localhost:3000/empresa/${id}`,*/ {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        CNPJ: id,
        fullName: fullName,
        fantasyName: fantasyName,
        celNumber: celNumber,
      }),
    }).then((resposta) => {
      if(resposta.ok) {
          return resposta.json();
      }
      throw new Error("Não foi possível atualizar uma Empresa")
    });
  };
  
  export const empresaService = {
    listaEmpresa,
    criarEmpresa,
    removeEmpresa,
    atualizaEmpresa,
  };