import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { useEffect, useState, useContext } from "react";
import api from "../../services/api";
import { CadastroContext } from "../../providers/Cadastro";

const ConsultaMsg = () => {
  const [trigger, setTrigger] = useState("");
  const [channel, setChannel] = useState("");
  const [timer, setTimer] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { setCadastro } = useContext(CadastroContext);

  const handleTable = async () => {
    try {
      const response = await api.get("/messages");
      setData(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    handleTable();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await api.get(
      `/messages?trigger_like=${trigger}&channel_like=${channel}&timer_like=${timer}`
    );

    setData(response.data);
  };

  const onClickShowMsg = (item) => {
    alert(item.message);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          Pesquisar
        </Button>
        <Button type="submit" variant="contained" color="inherit">
        Cadastro
      </Button>
      </form>

      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Gatilho</TableCell>
              <TableCell align="center">Canal</TableCell>
              <TableCell align="center">Tempo</TableCell>
              <TableCell align="center">Ação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="item">
                  {item.trigger}
                </TableCell>
                <TableCell align="center">{item.channel}</TableCell>
                <TableCell align="center">{item.timer}</TableCell>
                
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      onClickShowMsg(item);
                    }}
                    /* arrow function envolvendo a função onclick para não disparar continuamente */
                  >
                    Ver mensagem
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ConsultaMsg;
