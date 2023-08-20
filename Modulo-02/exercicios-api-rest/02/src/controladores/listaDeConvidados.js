const convidados = require('../bancodedados/convidados.js')

const consultarConvidado = (req, res) => {
    const { nome } = req.query;

    if (!nome) {
        return res.json(convidados);
    } else {
        const convidadoPresente = convidados.includes(nome);

        if (convidadoPresente) {
            return res.json({ "mensagem": "Convidado presente." });
        } else {
            return res.status(404).json({ "mensagem": "O convidado não está presente." });
        }
    }
}

const adicionarConvidado = (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({ "mensagem": "Nome obrigatorio." });
    }

    if (convidados.includes(nome)) {
        return res.status(409).json({ "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." });
    }

    convidados.push(nome);
    return res.status(201).json({ "mensagem": "Convidado adicionado." });
};

const removerConvidado = (req, res) => {
    const { nome } = req.params;

    const indice = convidados.indexOf(nome);

    if (indice == -1) {
        return res.status(404).json({ "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." });
    }

    convidados.splice(indice, 1);
    return res.json({ "mensagem": "Convidado removido." }).status(204);
}

module.exports = {
    consultarConvidado,
    adicionarConvidado,
    removerConvidado
}