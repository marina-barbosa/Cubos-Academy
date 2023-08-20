const express = require('express');
const rotas = express();
const { listarLivros, consultarLivro, adicionarLivro, substituirLivro, editarLivro, removerLivro } = require('./controladores/bibliotecaOnline.js')
// gray
rotas.get('/livros', listarLivros)
rotas.get('/livros/:id', consultarLivro)
rotas.post('/adicionar/', adicionarLivro)
rotas.put('/substituir/:id', substituirLivro)
rotas.patch('/editar/:id', editarLivro)
rotas.delete('/remover/:id', removerLivro)

module.exports = rotas;