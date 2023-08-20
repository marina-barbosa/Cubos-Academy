const express = require('express');
const { vezDe, remover, adicionar, mostrar } = require('./controladores/roundControllerEvolution');

const app = express();

app.get('/', vezDe);
app.get('/remover', remover);
app.get('/adicionar', adicionar);
app.get('/mostrar', mostrar);



app.listen(8000, () => {
    console.log('Servidor rodando em http://localhost:8000');
});