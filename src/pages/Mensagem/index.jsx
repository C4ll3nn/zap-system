import CadastroMsg from "../../components/CadastroMsg";
import { Container } from "@material-ui/core";
import ConsultaMsg from "../../components/ConsultaMsg";
import { useState } from "react";
import Header from "../../components/Header";

function Mensagem() {
  const [loading, setLoading] = useState(false);
  const [cadastro, setCadastro] = useState(false);

  return (
    <>
    <Header />
    <Container
      className="container"
      component="article"
      align="center"
      maxWidth="md"
    >
      {!cadastro && <ConsultaMsg />}
      {cadastro && <CadastroMsg />}
    </Container>
    </>
  );
}

export default Mensagem;
