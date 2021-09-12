create table emprestimo(
    id serial primary key,

    created_at timestamp DEFAULT NOW(),
    updated_at timestamp DEFAULT NOW(),
    deleted_at timestamp DEFAULT NOW(),

    "aluno_id" int4 not null,
    "livro_id" int4 not null,
    "data_inicio" text not null,
    "data_fim" text not null,

     constraint emprestimo_alunos_fk foreign key (aluno_id) references alunos(id),
     constraint emprestimo_livros_fk foreign key (livro_id) references livros(id)
);