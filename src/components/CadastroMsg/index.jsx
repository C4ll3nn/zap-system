import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import api from "../../services/api";

function CadastroMsg({ onSubmitProp }) {
  const [trigger, setTrigger] = useState("");
  const [channel, setChannel] = useState("");
  const [timer, setTimer] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const dataReset = () => {
    setTrigger("");
    setChannel("");
    setTimer("");
    setMessage("");
  };

  const onSubmit = async (event) => {
    try {
      event.preventDefault();

      setLoading(true);

      const saveMsg = await api.post("/messages", {
        id: Date.now(),
        channel: channel,
        trigger: trigger,
        timer: timer,
        message: message,
      });

      dataReset();

      setLoading(false);
    } catch (error) {
      alert(error);
    }

    // onSubmitProp({ trigger, channel, timer, message });
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        value={trigger}
        onChange={(event) => {
          setTrigger(event.target.value);
        }}
        id="trigger"
        label="Gatilho"
        margin="normal"
        variant="outlined"
        size="small"
      />
      <TextField
        value={channel}
        onChange={(event) => {
          setChannel(event.target.value);
        }}
        id="channel"
        label="Canal"
        margin="normal"
        variant="outlined"
        size="small"
      />
      <TextField
        value={timer}
        onChange={(event) => {
          setTimer(event.target.value);
        }}
        id="timer"
        label="Timer"
        margin="normal"
        variant="outlined"
        size="small"
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
      <Button type="submit" variant="contained" color="inherit">
        Voltar
      </Button>
      <br />
      <TextField
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
        id="message"
        label="Mensagem"
        margin="normal"
        variant="outlined"
        multiline="true"
        fullWidth="true"
        minRows="3"
      />
    </form>
  );
}

export default CadastroMsg;
