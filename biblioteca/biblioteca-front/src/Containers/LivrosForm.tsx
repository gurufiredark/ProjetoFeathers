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

const SubmitButton = (props: any) => <button {...props} type="submit" />;

interface Livros {
  id: number;
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

function LivrosForm() {
  const handleSubmit = (formLivros: Livros) => {
    if (params.id == "new") {
      return api
        .createLivros(formLivros)
        .then(() => alert("Salvo com sucesso!"))
        .catch((err) => alert(`Erro: ${err.message}`));
    } else {
      api
        .editLivros(formLivros, params.id)
        .then(() => alert("Editado com sucesso!"))
        .catch((err) => alert(`Erro: ${err.message}`));
    }
  };

  const params: any = useParams();
  const [livros, setLivros] = useState<Livros>();
  useEffect(() => {
    api.getLivros(params.id).then((res) => setLivros(res));
  }, []);

  const history = useHistory();
  function handleClickReturn() {
    history.push(`/livros`);
  }

  return (
    <Form
      initialValues={livros}
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h1>Formalário de Livros</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field name="nome" label="Nome" component={TextField} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field name="ano" label="Ano" component={TextField} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Field name="editora" label="Editora" component={TextField} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Field name="edicao" label="Edição" component={TextField} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Field name="volume" label="Volume" component={TextField} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Field name="autores" label="Autores" component={TextField} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field name="isbn" label="ISBN" component={TextField} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field name="cdd" label="CDD" component={TextField} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Field name="codigo" label="Código" component={TextField} />
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
export default LivrosForm;
