const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indiceJogador = 0;

app.get('/', (req, res) => {
    const nomeJogador = jogadores[indiceJogador];
    //indiceJogador = (indiceJogador + 1) % jogadores.length; // Atualiza o índice circularmente
    indiceJogador++
    if (indiceJogador > jogadores.length - 1) {
        indiceJogador = 0
    }
    res.send(`É a vez de ${nomeJogador} jogar!`);
});



app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});