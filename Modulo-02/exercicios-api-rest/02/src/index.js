const express = require('express');
const app = express();
const rotas = require('./rotas.js');

app.use(express.json());
app.use(rotas)

app.listen(3000, (req, res) => {
    console.log('O servidor esta rodando em http://localhost:3000')
});