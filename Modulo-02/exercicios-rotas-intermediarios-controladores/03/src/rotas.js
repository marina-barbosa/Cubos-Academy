const express = require('express');
//const app = require('./index');
const consultorDeImoveis = require('./controladores/consultorDeImoveis');

const rotas = express();

rotas.get('/imoveis', consultorDeImoveis.listarImoveis);
rotas.get('/imoveis/:id', consultorDeImoveis.encontrarImovel);

module.exports = rotas;