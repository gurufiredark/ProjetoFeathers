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

interface Emprestimo {
  id: string;
  alunoId: string;
  livroId: string;
  aluno: Aluno;
  livro: Livro;
  dataInicio: string;
  dataFim: string;
}

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

interface Livro {
  id: string;
  nome: string;
  ano: string;
  editora: string;
  edicao: string;
  volume: string;
  autores: string;
  isbn: string;
  cdd: string;
  codigo: string;
}

function EmprestimoList() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [emprestimoList, setEmprestimoList] = useState<Emprestimo[]>([]);

  useEffect(() => {
    api
      .getEmprestimoList()
      .then((resposta) => setEmprestimoList(resposta.data));
  }, []);

  const history = useHistory();

  function handleClick() {
    history.push(`emprestimo/new`);
  }
  function handleClickEdit(idEmprestimo: string) {
    history.push(`/emprestimo/${idEmprestimo}`);
  }
  function handleClickDelete(idEmprestimo: string) {
    api
      .excluirEmprestimo(idEmprestimo)
      .then(() => alert("Excluido com sucesso!"))
      .catch((err) => alert(`Erro: ${err.message}`));
  }

  return (
    <div className="emprestimolist">
      <h2>Lista de Emprestimos</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Aluno" variant="outlined" size="small" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            label="Data de Inicio"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            fullWidth
            label="Data de Fim"
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
              Adicionar um Emprestimo
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
                  <b>Nome do Aluno</b>
                </TableCell>
                <TableCell>
                  <b>Livro</b>
                </TableCell>
                <TableCell>
                  <b>Data de Início</b>
                </TableCell>
                <TableCell>
                  <b>Data de Fim</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {emprestimoList.map((novoEmprestimo, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <b>{novoEmprestimo.aluno.nome}</b>
                  </TableCell>
                  <TableCell>
                    <b>{novoEmprestimo.livro.nome}</b>
                  </TableCell>
                  <TableCell>
                    <b>{novoEmprestimo.dataInicio}</b>
                  </TableCell>
                  <TableCell>
                    <b>{novoEmprestimo.dataFim}</b>
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
                        onClick={() => handleClickEdit(novoEmprestimo.id)}
                      >
                        Editar
                      </MenuItem>
                      <MenuItem
                        onClick={() => handleClickDelete(novoEmprestimo.id)}
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
export default EmprestimoList;
