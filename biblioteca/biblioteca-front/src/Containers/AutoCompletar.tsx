import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import api from "../Services/api";
import AlunoList from "./AlunoList";

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

function AutoCompletar() {
  const [alunoSelecionado, setAlunoSelecionado] = useState<string | null>("");

  const [alunosList, setAlunosList] = useState<Aluno[]>([]);
  useEffect(() => {
    api.getAlunosList().then((resposta) => setAlunosList(resposta.data));
  }, []);

  function deIdParaAluno(idAluno: string | null) {
    const resposta = alunosList.find((aluno) => aluno.id == idAluno);
    return resposta ? resposta : null;
  }

  function deAlunoParaId(aluno: Aluno) {
    return aluno ? aluno.id : null;
  }

  return (
    <div className="autocomplete">
      <h2>AutoCompletar</h2>
      <Autocomplete
        value={deIdParaAluno(alunoSelecionado)}
        onChange={(ev, novoAluno: any) =>
          setAlunoSelecionado(deAlunoParaId(novoAluno))
        }
        options={alunosList}
        getOptionLabel={(aluno: Aluno) => aluno.nome} //mostra os nomes do objeto Aluno
        renderInput={(params) => (
          <TextField {...params} label="Aluno" variant="outlined" />
        )}
      />
      <h3>{JSON.stringify(alunoSelecionado)}</h3>
    </div>
  );
}
export default AutoCompletar;

//linha 64 mostra o id do aluno selecionado
