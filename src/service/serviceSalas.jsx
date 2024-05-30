const listaSala = () => {
    return fetch(/*`http://localhost:3000/sala`- colocar o http do bd.json*/).then((resposta) => {
      if (resposta.ok) {
        return resposta.json();
      }
      throw new Error("Não foi possível listar as Salas");
    });
  };
  
  const criarSala = (id, andar, empresa) => {
    return fetch(/*`http://localhost:3000/sala`,*/ {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sala: id,
        andar: andar,
        empresa: empresa,
      }),
    }).then((resposta) => {
      if(resposta.ok) {
          return resposta.body;
      }
      throw new Error("Não foi possível criar uma Sala");
    });
  };
  
  const removeSala = (id) => {
    return fetch(/*`http://localhost:3000/sala/${id}`,*/ {
      method: "DELETE",
    }).then(resposta => {
      if(!resposta.ok) {
          throw new Error("Não foi possível remover uma Sala");
      }
    })
  };
  
  
  const atualizaSala = (id, andar, empresa) => {
    return fetch(/*`http://localhost:3000/sala/${id}`,*/ {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        sala: id,
        andar: andar,
        empresa: empresa,
      }),
    }).then((resposta) => {
      if(resposta.ok) {
          return resposta.json();
      }
      throw new Error("Não foi possível atualizar uma Sala")
    });
  };
  
  export const salaService = {
    listaSala,
    criarSala,
    removeSala,
    atualizaSala,
  };