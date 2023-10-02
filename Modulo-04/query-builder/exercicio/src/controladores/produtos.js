

const knex = require('../conexao.js');


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
        const produto = await knex('produtos').where('usuario_id', usuario.id).where('id', id).first();

        if (!produto) {
            return res.status(404).json('Produto não encontrado');
        }

        return res.status(200).json(produto);
    } catch (error) {
        console.log(error)
        return res.status(400).json(error.message);
    }
}

const cadastrarProduto = async (req, res) => {
    const { usuario } = req;
    const { nome, estoque, preco, categoria, descricao, imagem } = req.body;

    if (!nome) {
        return res.status(404).json('O campo nome é obrigatório');
    }

    if (!estoque) {
        return res.status(404).json('O campo estoque é obrigatório');
    }

    if (!preco) {
        return res.status(404).json('O campo preco é obrigatório');
    }

    if (!descricao) {
        return res.status(404).json('O campo descricao é obrigatório');
    }

    try {

        const produto = {
            usuario_id: usuario.id,
            nome: nome,
            estoque: estoque,
            preco: preco,
            categoria: categoria,
            descricao: descricao,
            imagem: imagem
        };

        const produtoNovo = await knex('produtos').insert(produto);

        if (!produtoNovo) {
            return res.status(400).json('O produto não foi cadastrado');
        }

        return res.status(200).json('O produto foi cadastrado com sucesso.');
    } catch (error) {
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
        const produtoEncontrado = await knex('produtos').where('usuario_id', usuario.id).where('id', id).first();

        if (!produtoEncontrado) {
            return res.status(404).json('Produto não encontrado');
        }

        let updateFields = {};
        if (nome) updateFields.nome = nome;
        if (estoque) updateFields.estoque = estoque;
        if (preco) updateFields.preco = preco;
        if (categoria) updateFields.categoria = categoria;
        if (descricao) updateFields.descricao = descricao;
        if (imagem) updateFields.imagem = imagem;

        const produtoAtualizado = await knex('produtos')
            .where({ id: id })
            .where({ usuario_id: usuario.id })
            .update(updateFields);

        if (!produtoAtualizado) {
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

        const produto = await knex('produtos').where('usuario_id', usuario.id).where('id', id).first();

        if (!produto) {
            return res.status(404).json('Produto não encontrado');
        }

        const produtoExcluido = await knex('produtos').delete().where('usuario_id', usuario.id).where('id', id);

        if (!produtoExcluido) {
            return res.status(400).json("O produto não foi excluido");
        }

        return res.status(200).json('Produto excluido com sucesso');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    listarProdutos,
    obterProduto,
    cadastrarProduto,
    atualizarProduto,
    excluirProduto
}