import "./Saudacao.css";


const Saudacao = ({userName}) => {
  userName = "Carolaine";
  return (
    <>
    <div className="saudacao"></div>
      <div className="title">Bem-vindo,</div>
      <div className="username">{userName}</div>
      </>
  );
};

export default Saudacao;
