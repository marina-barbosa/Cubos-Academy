const express = require('express');
const { listarProdutos, detalhamento, frete } = require('./controladores/calculoDeFrete.js');

const app = express();

app.use(express.json());

app.get('/produtos', listarProdutos);
app.get('/produtos/:id', detalhamento);
app.get('/produtos/:id/frete/:cep', frete);

app.listen(3000, () => {
    console.log('Servidor ON.')
});