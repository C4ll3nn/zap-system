import CadastroMsg from "../../components/CadastroMsg";
import { Container, Button, Typography } from "@material-ui/core";
import ConsultaMsg from "../../components/ConsultaMsg";
import { useState } from "react";
import Header from "../../components/Header";

function Mensagem() {
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
        {cadastro === true ? (
          <Typography variant="h5" component="h1" className="msgTitle">
            Cadastro de Mensagens
            <Button
              onClick={() => {
                setCadastro(false);
              }}
              variant="contained"
              color='inherit'
            >
              Ir para Pesquisa
            </Button>
          </Typography>
        ) : (
          <Typography variant="h5" component="h1" className="msgTitle">
            Consulta de Mensagens
            <Button
              onClick={() => {
                setCadastro(true);
              }}
              variant="contained"
              color='inherit'
            >
              Ir para Cadastro
            </Button>
          </Typography>
        )}
        {!cadastro && <ConsultaMsg />}
        {cadastro && <CadastroMsg />}
      </Container>
    </>
  );
}

export default Mensagem;
