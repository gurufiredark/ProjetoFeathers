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
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Pagination from "@material-ui/lab/Pagination";
import api from "../Services/api";

interface Aluno {
  id: string;
  nome: string;
  nascimento: string;
  cpf: string;
  ra: string;
  dpto: string;
  curso: string;
  cidade: string;
  uf: string;
  telefone: string;
}

function AlunoList() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [alunosList, setAlunosList] = useState<Aluno[]>([]);

  useEffect(() => {
    api.getAlunosList().then((resposta) => setAlunosList(resposta.data));
  }, []);
  const history = useHistory();

  function handleClick() {
    history.push(`/alunos/new`);
  }
  function handleClickEdit(idAluno: string) {
    history.push(`/alunos/${idAluno}`);
  }
  function handleClickDelete(idAluno: string) {
    api
      .excluirAluno(idAluno)
      .then(() => alert("Excluido com sucesso!"))
      .catch((err) => alert(`Erro: ${err.message}`));
  }
  return (
    <div className="alunolist">
      <h1>Buscar Aluno</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Nome" variant="outlined" size="small" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField fullWidth label="CPF" variant="outlined" size="small" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField fullWidth label="RA" variant="outlined" size="small" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl>
            <Button type="submit" variant="contained" color="secondary">
              Filtrar
            </Button>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              onClick={() => handleClick()}
            >
              Adicionar Aluno
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
                  <b>Data Nasc.</b>
                </TableCell>
                <TableCell>
                  <b>CPF</b>
                </TableCell>
                <TableCell>
                  <b>RA</b>
                </TableCell>
                <TableCell>
                  <b>Depto.</b>
                </TableCell>
                <TableCell>
                  <b>Curso</b>
                </TableCell>
                <TableCell>
                  <b>Cidade</b>
                </TableCell>
                <TableCell>
                  <b>Estado</b>
                </TableCell>
                <TableCell>
                  <b>Telefone</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {alunosList.map((novoAluno, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <b>{novoAluno.nome}</b>
                  </TableCell>
                  <TableCell>
                    <b>{novoAluno.nascimento}</b>
                  </TableCell>
                  <TableCell>
                    <b>{novoAluno.cpf}</b>
                  </TableCell>
                  <TableCell>
                    <b>{novoAluno.ra}</b>
                  </TableCell>
                  <TableCell>
                    <b>{novoAluno.dpto}</b>
                  </TableCell>
                  <TableCell>
                    <b>{novoAluno.curso}</b>
                  </TableCell>
                  <TableCell>
                    <b>{novoAluno.cidade}</b>
                  </TableCell>
                  <TableCell>
                    <b>{novoAluno.uf}</b>
                  </TableCell>
                  <TableCell>
                    <b>{novoAluno.telefone}</b>
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
                      <MenuItem onClick={() => handleClickEdit(novoAluno.id)}>
                        Editar
                      </MenuItem>
                      <MenuItem onClick={() => handleClickDelete(novoAluno.id)}>
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
export default AlunoList;
