const jwt = require('jsonwebtoken');
const knex = require('../conexao');

const hash = process.env.KEY_HASH;

const filtroLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ mensagem: 'Não autorizado' });
    }

    const token = authorization.replace('Bearer ', '').trim();

    try {

        const { id } = jwt.verify(token, hash);

        const usuarioExiste = await knex('usuarios').where({ id }).first();

        if (!usuarioExiste) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        const { senha, ...usuario } = usuarioExiste;

        req.usuario = usuario;

        next();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};


module.exports = filtroLogin;