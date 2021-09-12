import React, { useState, useEffect } from "react";
import api from "../Services/api";
import { Form, Field } from "react-final-form";
import TextField from "../Components/TextField";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";

import { Button, Grid, FormControl } from "@material-ui/core";

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

const SubmitButton = (props: Emprestimo[]) => (
  <button {...props} type="submit" />
);

function EmprestimoForm() {
  const handleSubmit = (formEmprestimo: Emprestimo) => {
    if (params.id == "new") {
      return api
        .createEmprestimo(formEmprestimo)
        .then(() => alert("Salvo com sucesso!"))
        .catch((err) => alert(`Erro: ${err.message}`));
    } else {
      api
        .editEmprestimo(formEmprestimo, params.id)
        .then(() => alert("Editado com sucesso!"))
        .catch((err) => alert(`Erro: ${err.message}`));
    }
  };

  const [emprestimo, setEmprestimo] = useState<Emprestimo>();

  const params: any = useParams();

  useEffect(() => {
    api.getEmprestimo(params.id).then((res) => setEmprestimo(res));
  }, []);

  const history = useHistory();
  function handleClickReturn() {
    history.push(`/emprestimo`);
  }

  return (
    <Form
      initialValues={emprestimo}
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h1>Formalário de Emprestimos</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field name="alunoId" label="Aluno" component={TextField} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Field name="livroId" label="Livro" component={TextField} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Field
                name="dataInicio"
                label="Data de Inicio"
                component={TextField}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Field name="dataFim" label="Data de Fim" component={TextField} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  onClick={handleClickReturn}
                >
                  Retornar
                </Button>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl>
                <Button type="submit" variant="contained" color="secondary">
                  Confirmar
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      )}
    ></Form>
  );
}

export default EmprestimoForm;
