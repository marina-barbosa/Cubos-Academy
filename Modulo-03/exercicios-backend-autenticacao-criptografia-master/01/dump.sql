
drop database catalogo_pokemons;

create database catalogo_pokemons;

create table usuarios (
    id serial primary key,
    nome text not null,
    email text not null unique,
    senha text not null
);

create table pokemons (
    id serial primary key,
    nome text not null,
    habilidade text not null,
    imagem text,
    apelido text,
    usuario_id integer references usuarios(id) not null
);