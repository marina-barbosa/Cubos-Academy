create database biblioteca;

create table autores(
  id serial primary key,
  nome text not null,
  idade integer
);

create table livros(
	id serial primary key,
  nome text not null,
  genero text,
  editora text,
  data_de_publicacao date,
  id_autor integer references autores(id)
);