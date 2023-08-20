const produtos = require('../bancodedados/produtos.js');
const { getStateFromZipcode } = require('utils-playground');


const listagemProdutos = async (req, res) => {
    return res.status(200).json(produtos);
}




const detalhamento = async (req, res) => {
    const { id } = req.params;
    const produto = produtos.find((item) => {
        return item.id == Number(id);
    });

    return res.status(200).json(produto);
}




const frete = async (req, res) => {
    const { id, cep } = req.params;
    const produto = produtos.find((item) => {
        return item.id == Number(id);
    });

    try {
        const estado = await getStateFromZipcode(cep);
        console.log(produto)
        console.log(estado)
        let frete = 0.12;
        if (estado == 'SP' || estado == 'RJ') {
            frete = 0.15;
            frete = frete * produto.valor;
        } else if (estado == 'BA'
            || estado == 'SE'
            || estado == 'AL'
            || estado == 'PE'
            || estado == 'PB') {
            frete = 0.1;
            frete = frete * produto.valor;
        } else {
            frete = frete * produto.valor;
        }
        const mensagem = `${produto}, ${estado}, ${frete}`
        return res.status(200).json(mensagem);
    } catch (erro) {
        return res.status(500).json(`mensagem: ${erro.message}`);
    } finally {
        console.log('isso sempre será executado');
    }
}

module.exports = {
    listagemProdutos,
    detalhamento,
    frete
}