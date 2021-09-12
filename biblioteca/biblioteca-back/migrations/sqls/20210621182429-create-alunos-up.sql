create table alunos(
    id serial primary key,

    created_at timestamp DEFAULT NOW(),
    updated_at timestamp DEFAULT NOW(),
    deleted_at timestamp DEFAULT NOW(),

    "nome" text not null,
    "nascimento" text not null,
    "cpf" text not null,
    "ra" text not null,
    "dpto" text not null,
    "curso" text not null,
    "rua" text not null,
    "numero" text not null,
    "cep" text not null,
    "complemento" text not null,
    "bairro" text not null,
    "cidade" text not null,
    "uf" text not null,
    "telefone" text not null
);