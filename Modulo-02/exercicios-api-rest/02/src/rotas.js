const express = require('express');
const rotas = express();
const { consultarConvidado, adicionarConvidado, removerConvidado } = require('./controladores/listaDeConvidados.js')

rotas.get('/convidado', consultarConvidado)
rotas.post('/adicionar', adicionarConvidado)
rotas.delete('/remover/:nome', removerConvidado)

module.exports = rotas;