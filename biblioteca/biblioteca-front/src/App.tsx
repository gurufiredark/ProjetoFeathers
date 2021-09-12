import React, { useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AlunoList from "./Containers/AlunoList";
import AlunoForm from "./Containers/AlunoForm";
import LivrosForm from "./Containers/LivrosForm";
import LivrosList from "./Containers/LivrosList";
import VisitantesList from "./Containers/VisitantesList";
import VisitantesForm from "./Containers/VisitantesForm";
import EmprestimoForm from "./Containers/EmprestimoForm";
import EmprestimoList from "./Containers/EmprestimoList";
import AutoCompletar from "./Containers/AutoCompletar";

function App() {
  return (
    <div className="App">
      <AppBar position="relative">
        <Toolbar>
          <Router>
            <Link to="/inicio">
              <IconButton edge="start" color="inherit">
                <MenuIcon />
              </IconButton>
            </Link>
          </Router>
          <Typography variant="h6">Biblioteca</Typography>
        </Toolbar>
      </AppBar>

      <AppBar position="relative">
        <Router>
          <Link to="/alunos">
            <Typography variant="h6">Alunos</Typography>
          </Link>
          <Link to="/livros">
            <Typography variant="h6">Livros</Typography>
          </Link>
          <Link to="visitantes">
            <Typography variant="h6">Visitantes</Typography>
          </Link>
          <Link to="emprestimo">
            <Typography variant="h6">Emprestimos</Typography>
          </Link>
          <Link to="auto">
            <Typography variant="h6">Teste AutoComplete</Typography>
          </Link>
        </Router>
      </AppBar>

      <Box p={3}>
        <Router>
          <Switch>
            <Route path="/inicio">
              <Typography variant="h6">
                Bem-Vindo , Escolha uma opção ao lado
              </Typography>
            </Route>
            <Route path="/alunos/:id">
              <AlunoForm></AlunoForm>
            </Route>
            <Route path="/alunos">
              <AlunoList></AlunoList>
            </Route>
            <Route path="/livros/:id">
              <LivrosForm></LivrosForm>
            </Route>
            <Route path="/livros">
              <LivrosList></LivrosList>
            </Route>
            <Route path="/visitantes/:id">
              <VisitantesForm></VisitantesForm>
            </Route>
            <Route path="/visitantes">
              <VisitantesList></VisitantesList>
            </Route>
            <Route path="/emprestimo/:id">
              <EmprestimoForm></EmprestimoForm>
            </Route>
            <Route path="/emprestimo">
              <EmprestimoList></EmprestimoList>
            </Route>
            <Route path="/auto">
              <AutoCompletar></AutoCompletar>
            </Route>
          </Switch>
        </Router>
      </Box>
    </div>
  );
}

export default App;
