const knex = require('../conexao');
const { uploadFile, excluirArquivo } = require('../utils/upload.js');


// antes do cadastro, de fato, acontecer.
// se a imagem for informada no body, pois não deve ser um campo obrigatório.

// endpoint somente att img

// endpoint somente excluir img

// O produto possui id 30. Sendo assim, vou fazer o upload da imagem em produtos/30/imagem.jpg.

// todas credencias no env.

const listarProdutos = async (req, res) => {
    const { usuario } = req;
    const { categoria } = req.query;

    try {

        if (categoria) {
            if (Array.isArray(categoria)) {
                const produtos = await knex("produtos").where({ usuario_id: usuario.id })
                    .where((query) => {
                        categoria.forEach((item) => {
                            query.orWhere("categoria", "ilike", `%${item.trim()}%`);
                        });
                    });

                return res.status(200).json(produtos);

            }
            const produtos = await knex('produtos').where('usuario_id', usuario.id).where('categoria', 'ilike', `%${categoria}%`).debug();
            return res.status(200).json(produtos);

        }

        const produtos = await knex('produtos').where('usuario_id', usuario.id);
        return res.status(200).json(produtos);


    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;

    try {
        const produto = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).first();

        if (!produto) {
            return res.status(404).json('Produto não encontrado');
        }

        return res.status(200).json(produto);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const cadastrarProduto = async (req, res) => {

    const { usuario } = req;
    const { nome, estoque, preco, categoria, descricao } = req.body;

    const { file } = req;
    let imagem = null;

    if (!nome) {
        return res.status(404).json('O campo nome é obrigatório');
    }

    if (!estoque) {
        return res.status(404).json('O campo estoque é obrigatório');
    }

    if (!preco) {
        return res.status(404).json('O campo preço é obrigatório');
    }

    if (!descricao) {
        return res.status(404).json('O campo descrição é obrigatório');
    }

    try {

        const produto = await knex('produtos').insert({
            usuario_id: usuario.id,
            nome,
            estoque,
            preco,
            categoria,
            descricao,
            imagem
        }).returning('id');

        const produtoId = produto[0].id;

        if (file) {
            imagem = await uploadFile(
                `produtos/${produtoId}/${file.originalname}`,
                file.buffer,
                file.mimetype
            )
        }

        const produtoComImg = await knex('produtos').where('id', produtoId).update({
            imagem
        }).returning('*');

        return res.status(200).json(produtoComImg);
    } catch (error) {
        console.log(error);
        return res.status(400).json(error.message);
    }
}

const atualizarProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;
    const { nome, estoque, preco, categoria, descricao, imagem } = req.body;

    if (!nome && !estoque && !preco && !categoria && !descricao && !imagem) {
        return res.status(404).json('Informe ao menos um campo para atualizaçao do produto');
    }

    try {
        const produtoEncontrado = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).first();

        if (!produtoEncontrado) {
            return res.status(404).json('Produto não encontrado');
        }

        const produto = await knex('produtos')
            .where({ id })
            .update({
                nome,
                estoque,
                preco,
                categoria,
                descricao,
                imagem
            });

        if (!produto) {
            return res.status(400).json("O produto não foi atualizado");
        }

        return res.status(200).json('produto foi atualizado com sucesso.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const excluirProduto = async (req, res) => {
    const { usuario } = req;
    const { id } = req.params;

    try {
        const produtoEncontrado = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).first();

        if (!produtoEncontrado) {
            return res.status(404).json('Produto não encontrado');
        }

        const produtoExcluido = await knex('produtos').where({
            id,
            usuario_id: usuario.id
        }).del();

        if (!produtoExcluido) {
            return res.status(400).json("O produto não foi excluido");
        }

        return res.status(200).json('Produto excluido com sucesso');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const excluirImagem = async (req, res) => {
    const { file } = req.query

    try {
        await excluirArquivo(file)

        return res.status(204).send()
    } catch (error) {
        console.log(error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

const atualizarImagem = async (req, res) => {
    const { usuario } = req;
    const { files } = req;
    const { id } = req.params;

    if (!id) {
        return res.status(404).json('O id do produto deve ser informado.');
    }

    try {
        const produtoEncontrado = await knex('produtos').where({
            id, usuario_id: usuario.id
        }).first();

        if (!produtoEncontrado) {
            return res.status(404).json('Produto não encontrado');
        }

        const produtoId = produtoEncontrado.id;

        const resultado = []
        for (const file of files) {
            const imagem = await uploadFile(
                `produtos/${produtoId}/${file.originalname}`,
                file.buffer,
                file.mimetype
            )
            resultado.push(imagem)
        }

        const produto = await knex('produtos').where({ id, usuario_id: usuario.id }).update({ imagem: resultado }).returning('*');

        return res.status(200).json(produto);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}


module.exports = {
    listarProdutos,
    obterProduto,
    cadastrarProduto,
    atualizarProduto,
    excluirProduto,
    excluirImagem,
    atualizarImagem,
}