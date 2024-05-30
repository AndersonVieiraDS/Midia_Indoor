const listaMidia = () => {
    return fetch(/*`http://localhost:3000/midia`- colocar o http do bd.json*/).then((resposta) => {
      if (resposta.ok) {
        return resposta.json();
      }
      throw new Error("Não foi possível listar as Mídias");
    });
  };
  
  const criarMidia = (titulo, description, tm, start, finale, url) => {
    return fetch(/*`http://localhost:3000/midia`,*/ {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titulo: titulo,
        description: description,
        tm: tm,
        start: start,
        finale: finale,
        url: url,
      }),
    }).then((resposta) => {
      if(resposta.ok) {
          return resposta.body;
      }
      throw new Error("Não foi possível criar uma Mídia");
    });
  };
  
  const removeMidia = (id) => {
    return fetch(/*`http://localhost:3000/midia/${id}`,*/ {
      method: "DELETE",
    }).then(resposta => {
      if(!resposta.ok) {
          throw new Error("Não foi possível remover uma Mídia");
      }
    })
  };
  
  
  const atualizaMidia = (titulo, description, tm, start, finale, url) => {
    return fetch(/*`http://localhost:3000/midia/${id}`,*/ {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        titulo: titulo,
        description: description,
        tm: tm,
        start: start,
        finale: finale,
        url: url,
      }),
    }).then((resposta) => {
      if(resposta.ok) {
          return resposta.json();
      }
      throw new Error("Não foi possível atualizar uma Mídia")
    });
  };
  
  export const salaService = {
    listaMidia,
    criarMidia,
    removeMidia,
    atualizaMidia,
  };