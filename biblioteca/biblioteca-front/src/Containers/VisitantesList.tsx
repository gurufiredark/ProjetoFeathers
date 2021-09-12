import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  IconButton,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  FormControl,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Pagination from "@material-ui/lab/Pagination";
import api from "../Services/api";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";

interface Visitante {
  id: string;
  nome: string;
  sobrenome: string;
  datanascimento: string;
}

function VisitantesList() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [visitanteList, setVisitanteList] = useState<Visitante[]>([]);

  useEffect(() => {
    api.getVisitantesList().then((resposta) => setVisitanteList(resposta.data));
  }, []);

  const history = useHistory();

  function handleClick() {
    history.push(`visitantes/new`);
  }
  function handleClickEdit(idVisitantes: string) {
    history.push(`/visitantes/${idVisitantes}`);
  }
  function handleClickDelete(idVisitantes: string) {
    api
      .excluirAluno(idVisitantes)
      .then(() => alert("Excluido com sucesso!"))
      .catch((err) => alert(`Erro: ${err.message}`));
  }

  return (
    <div className="visitanteslist">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Nome" variant="outlined" size="small" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            label="Sobrenome"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            label="Data de Nascimento"
            variant="outlined"
            size="small"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              onClick={() => handleClick()}
            >
              Adicionar Visitante
            </Button>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Nome</b>
                </TableCell>
                <TableCell>
                  <b>Sobrenome</b>
                </TableCell>
                <TableCell>
                  <b>Data Nasc.</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visitanteList.map((novoVisitante, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <b>{novoVisitante.nome}</b>
                  </TableCell>
                  <TableCell>
                    <b>{novoVisitante.sobrenome}</b>
                  </TableCell>
                  <TableCell>
                    <b>{novoVisitante.datanascimento}</b>
                  </TableCell>
                  <TableCell>
                    <FormControl>
                      <IconButton onClick={handleClick1}>
                        <MoreVertIcon />
                      </IconButton>
                    </FormControl>
                    <Menu
                      id="menulist"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem
                        onClick={() => handleClickEdit(novoVisitante.id)}
                      >
                        Editar
                      </MenuItem>
                      <MenuItem
                        onClick={() => handleClickDelete(novoVisitante.id)}
                      >
                        Excluir
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container spacing={2}>
          <Pagination count={1} color="secondary" />
        </Grid>
      </Grid>
    </div>
  );
}
export default VisitantesList;
