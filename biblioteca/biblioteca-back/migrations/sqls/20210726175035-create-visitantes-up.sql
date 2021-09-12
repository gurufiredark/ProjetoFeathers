create table visitantes(
    id serial primary key,

    created_at timestamp DEFAULT NOW(),
    updated_at timestamp DEFAULT NOW(),
    deleted_at timestamp DEFAULT NOW(),

    "nome" text not null,
    "sobrenome" text not null,
    "datanascimento" text not null
);