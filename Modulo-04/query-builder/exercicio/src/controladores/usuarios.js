
const bcrypt = require('bcrypt');
const knex = require('../conexao.js');

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body;

    if (!nome) {
        return res.status(404).json("O campo nome é obrigatório");
    }

    if (!email) {
        return res.status(404).json("O campo email é obrigatório");
    }

    if (!senha) {
        return res.status(404).json("O campo senha é obrigatório");
    }

    if (!nome_loja) {
        return res.status(404).json("O campo nome_loja é obrigatório");
    }

    try {
        const emailExiste = await knex('usuarios').where('email', email).first();

        if (emailExiste) {
            return res.status(400).json("O email já existe");
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const usuario = {
            nome: nome,
            email: email,
            senha: senhaCriptografada,
            nome_loja: nome_loja
        }

        const usuarioNovo = await knex('usuarios').insert(usuario);

        console.log(usuarioNovo)
        if (!usuarioNovo) {
            return res.status(400).json("O usuário não foi cadastrado.");
        }


        return res.status(200).json("O usuario foi cadastrado com sucesso!");
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterPerfil = async (req, res) => {
    return res.status(200).json(req.usuario);
}

const atualizarPerfil = async (req, res) => {
    const { nome, email, senha, nome_loja } = req.body;

    if (!nome && !email && !senha && !nome_loja) {
        return res.status(404).json('É obrigatório informar ao menos um campo para atualização');
    }

    try {
        let updateFields = {};

        if (nome) updateFields.nome = nome;
        if (email) updateFields.email = email;
        if (senha) updateFields.senha = await bcrypt.hash(senha, 10);
        if (nome_loja) updateFields.nome_loja = nome_loja;

        const usuarioAtualizado = await knex('usuarios')
            .where({ id: req.usuario.id })
            .update(updateFields);

        if (usuarioAtualizado === 0) {
            return res.status(400).json("O usuario não foi atualizado");
        }

        return res.status(200).json('Usuario foi atualizado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    cadastrarUsuario,
    obterPerfil,
    atualizarPerfil
}