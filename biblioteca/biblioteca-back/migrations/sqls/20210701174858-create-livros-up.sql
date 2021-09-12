create table livros(
    id serial primary key,

    created_at timestamp DEFAULT NOW(),
    updated_at timestamp DEFAULT NOW(),
    deleted_at timestamp DEFAULT NOW(),

    "nome" text not null,
    "ano" text not null,
    "editora" text not null,
    "edicao" text not null,
    "volume" text not null,
    "autores" text not null,
    "isbn" text not null,
    "cdd" text not null,
    "codigo" text not null
);