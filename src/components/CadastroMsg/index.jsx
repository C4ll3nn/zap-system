import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import api from "../../services/api";
import Swal from "sweetalert2";
import Schema from "../../utils/Schema";

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

      await Schema.validate({ trigger, channel, timer, message });

      setLoading(true);

      const saveMsg = await api.post("/messages", {
        id: Date.now(),
        channel: channel,
        trigger: trigger,
        timer: timer,
        message: message,
      });

      Swal.fire({
        icon: "success",
        text: "Cadastro realizado com sucesso!",
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      dataReset();
      setLoading(false);
    } catch (error) {
      Swal.fire({
        text: error.errors[0],
        icon: "error",
        confirmButtonColor: "#3f51b5",
      });
    }
  };

  const setTimerMask = (textNumber) => {
    let timerRaw = textNumber.replace(/\D/g, "");
    let timerMask = [...timerRaw]
      .map((symbol, i) => {
        if (i === 2) return [":", symbol];
        return symbol;
      })
      .flat(1)
      .join("");
    setTimer(timerMask);
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
          setTimerMask(event.target.value);
        }}
        id="timer"
        label="Timer"
        margin="normal"
        variant="outlined"
        size="small"
        placeholder="00:00"
        inputProps={{ maxLength: 5 }}
      />
      {loading === true ? (
        <Button type="submit" variant="contained" color="primary" disabled>
          Salvando...
        </Button>
      ) : (
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      )}

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
        multiline
        fullWidth
        minRows="3"
      />
    </form>
  );
}

export default CadastroMsg;
