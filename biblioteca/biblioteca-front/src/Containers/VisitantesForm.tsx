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

interface Visitantes {
  id: number;
  nome: string;
  datanascimento: string;
  sobrenome: string;
}

const SubmitButton = (props: Visitantes[]) => (
  <button {...props} type="submit" />
);

function VisitantesForm() {
  const handleSubmit = (formVisitantes: Visitantes) => {
    if (params.id == "new") {
      return api
        .createVisitantes(formVisitantes)
        .then(() => alert("Salvo com sucesso!"))
        .catch((err) => alert(`Erro: ${err.message}`));
    } else {
      api
        .editVisitantes(formVisitantes, params.id)
        .then(() => alert("Editado com sucesso!"))
        .catch((err) => alert(`Erro: ${err.message}`));
    }
  };

  const [visitantes, setVisitantes] = useState<Visitantes>();

  const params: any = useParams();

  useEffect(() => {
    api.getAluno(params.id).then((res) => setVisitantes(res));
  }, []);

  const history = useHistory();
  function handleClickReturn() {
    history.push(`/visitantes`);
  }

  return (
    <Form
      initialValues={visitantes}
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h1>Formalário de Visitantes</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field name="nome" label="Nome" component={TextField} />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Field name="sobrenome" label="Sobrenome" component={TextField} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name="datanascimento"
                label="Data de Nascimento"
                component={TextField}
              />
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

export default VisitantesForm;
