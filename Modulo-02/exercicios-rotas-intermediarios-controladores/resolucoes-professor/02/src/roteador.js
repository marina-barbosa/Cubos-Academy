const express = require('express');
const { vezJogar, consultar, remover, adicionar } = require('./controladores/rodadas');

const rotas = express();

rotas.get("/", vezJogar);

rotas.get("/consulta", consultar);

rotas.get("/remover", remover);

rotas.get("/adicionar", adicionar);

module.exports = rotas;