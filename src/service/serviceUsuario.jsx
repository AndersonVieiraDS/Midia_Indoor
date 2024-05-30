const listaUsuario = () => {
    return fetch(/*`http://localhost:3000/usuario`- colocar o http do bd.json*/).then((resposta) => {
      if (resposta.ok) {
        return resposta.json();
      }
      throw new Error("Não foi possível listar os Usuários");
    });
  };
  
  const criarUsuario = (id, fullName, email, tp, userName, password) => {
    return fetch(/*`http://localhost:3000/usuario`,*/ {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        CPF: id,
        fullName: fullName,
        email: email,
        tp: tp,
        userName: userName,
        password: password,
      }),
    }).then((resposta) => {
      if(resposta.ok) {
          return resposta.body;
      }
      throw new Error("Não foi possível criar um Usuário");
    });
  };
  
  const removeUsuario = (id) => {
    return fetch(/*`http://localhost:3000/usuario/${id}`,*/ {
      method: "DELETE",
    }).then(resposta => {
      if(!resposta.ok) {
          throw new Error("Não foi possível remover um Usuário");
      }
    })
  };
  
  
  const atualizaUsuario = (id, fullName, email, tp, userName, password) => {
    return fetch(/*`http://localhost:3000/usuario/${id}`,*/ {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        CPF: id,
        fullName: fullName,
        email: email,
        tp: tp,
        userName: userName,
        password: password,
      }),
    }).then((resposta) => {
      if(resposta.ok) {
          return resposta.json();
      }
      throw new Error("Não foi possível atualizar um Usuário")
    });
  };
  
  export const usuarioService = {
    listaUsuario,
    criarUsuario,
    removeUsuario,
    atualizaUsuario,
  };