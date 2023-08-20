const { imoveis } = require('../bancodedados');



const listarImoveis = (req, res) => {
    return res.status(200).json(imoveis);
};

const encontrarImovel = (req, res) => {
    const { id } = req.params;

    const imovel = imoveis.find((elemento) => {
        return elemento.id == Number(id)
    });

    if (!imovel) {
        return res.status(404).json({ mensagem: 'Imovel nao encontrado.' });
    }

    return res.status(200).json(imovel);
};


module.exports = {
    listarImoveis,
    encontrarImovel
}