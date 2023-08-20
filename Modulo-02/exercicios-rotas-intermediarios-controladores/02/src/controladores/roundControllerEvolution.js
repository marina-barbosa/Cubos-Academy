const jogadores = require('../bancodedados');
let indiceJogador = 0;

const vezDe = (req, res) => {
    indiceJogador = (indiceJogador + 1) % jogadores.length;
    res.send(`É a vez de ${jogadores[indiceJogador]} jogar!`);
}

const remover = (req, res) => {
    const { indice } = req.query;

    if (jogadores.includes(jogadores[indice])) {
        jogadores.splice(indice, 1)
        return res.send(jogadores)
    } else {
        return res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`);
    }
}

const adicionar = (req, res) => {
    const { indice, nome } = req.query;
    if (nome) {
        if (!indice) {
            jogadores.splice(jogadores.length, 0, nome);
            return res.send(jogadores)
        } else if (indice >= 0 && indice < jogadores.length) {
            jogadores.splice(indice, 0, nome)
            return res.send(jogadores)
        } else {
            return res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`);
        }
    } else {
        return res.send(`Erro: Nome obrigatório`);
    }
}

const mostrar = (req, res) => {
    res.send(jogadores);
}

module.exports = {
    vezDe,
    remover,
    adicionar,
    mostrar
}