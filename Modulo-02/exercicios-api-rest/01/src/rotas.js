const express = require('express');
const rotas = express();
const { get, getById, adicionarAluno, deletarAluno, substituirAluno, atualizarAluno } = require('./controladores/cadastroDeAlunos.js')
const { validaCurso } = require('./intermediarios');

rotas.get('/', get);
rotas.get('/alunos/:id', getById);
rotas.post('/adicionar', validaCurso, adicionarAluno);
rotas.put('/substituir/:id', validaCurso, substituirAluno);
rotas.patch('/atualizar/:id', validaCurso, atualizarAluno);
rotas.delete('/deletar/:id', deletarAluno);



module.exports = rotas;