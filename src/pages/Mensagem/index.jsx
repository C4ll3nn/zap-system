import CadastroMsg from "../../components/CadastroMsg";
import { Container, FormControlLabel, Switch } from "@material-ui/core";
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
        <FormControlLabel
          label="Cadastro"
          control={
            <Switch
              checked={cadastro}
              onChange={(event) => {
                setCadastro(event.target.checked);
              }}
              name="cadastro"
              color="primary"
            />
          }
        />
        {!cadastro && <ConsultaMsg />}
        {cadastro && <CadastroMsg />}
      </Container>
    </>
  );
}

export default Mensagem;
