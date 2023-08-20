const express = require('express');
const { gerenciarEndereco } = require('./controladores/enderecos.js');
const rotas = express();

rotas.get('/enderecos/:cep', gerenciarEndereco)


module.exports = rotas;