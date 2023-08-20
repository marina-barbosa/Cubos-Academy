const express = require('express');
const rotas = require('./rotas');
const app = express();

app.use(express.json());
app.use(rotas);


app.listen(8000, () => {
    console.log('Servidor rodando em http://localhost:8000');
});



//module.exports = app;