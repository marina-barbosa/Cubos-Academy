const produtos = require('../bancodedados/produtos.js');
const { getStateFromZipcode } = require('utils-playground');


const listarProdutos = async (req, res) => {
    return res.status(200).json(produtos);
}




const detalhamento = async (req, res) => {
    const { id } = req.params;
    const produto = produtos.find((item) => {
        return item.id == Number(id);
    });

    if (!produto) {
        return res.status(404).json({ mensagem: "Produtor nao encontrado." })
    }

    return res.status(200).json(produto);
}




const frete = async (req, res) => {
    const { id, cep } = req.params;

    const produto = produtos.find((item) => {
        return item.id == Number(id);
    });

    if (!produto) {
        return res.status(404).json({ mensagem: "Produtor nao encontrado." })
    }

    const estado = await getStateFromZipcode(cep);
    console.log(produto)
    console.log(estado)
    let valorFrete = 0;
    if (estado == 'SP' || estado == 'RJ') {
        valorFrete = produto.valor * 0.15;
    } else if (estado == 'BA'
        || estado == 'SE'
        || estado == 'AL'
        || estado == 'PE'
        || estado == 'PB') {
        valorFrete = produto.valor * 0.1;
    } else {
        valorFrete = produto.valor * 0.12;
    }

    return res.json({
        produto,
        estado,
        frete: valorFrete,
    });
}

module.exports = {
    listarProdutos,
    detalhamento,
    frete
}