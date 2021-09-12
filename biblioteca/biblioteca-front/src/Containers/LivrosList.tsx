import React, { useState, useEffect } from "react";
import api from "../Services/api";
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
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";

interface Livros {
  id: string;
  nome: string;
  codigo: string;
}

function LivrosList() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [livrosList, setLivrosList] = useState<Livros[]>([]);

  useEffect(() => {
    api.getLivrosList().then((resposta) => setLivrosList(resposta.data));
  }, []);
  const history = useHistory();

  function handleClick() {
    history.push(`/livros/new`);
  }
  function handleClickEdit(idLivros: string) {
    history.push(`/livros/${idLivros}`);
  }
  function handleClickDelete(idLivros: string) {
    api
      .excluirLivros(idLivros)
      .then(() => alert("Excluido com sucesso!"))
      .catch((err) => alert(`Erro: ${err.message}`));
  }

  return (
    <div className="livrolist">
      <h1>Buscar Livro</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Nome" variant="outlined" size="small" />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField fullWidth label="Código" variant="outlined" size="small" />
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
              onClick={handleClick}
            >
              Adicionar Livro
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
                  <b>Código</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {livrosList.map((novoLivro, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <b>{novoLivro.nome}</b>
                  </TableCell>
                  <TableCell>
                    <b>{novoLivro.codigo}</b>
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
                      <MenuItem onClick={() => handleClickEdit(novoLivro.id)}>
                        Editar
                      </MenuItem>
                      <MenuItem onClick={() => handleClickDelete(novoLivro.id)}>
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
export default LivrosList;
