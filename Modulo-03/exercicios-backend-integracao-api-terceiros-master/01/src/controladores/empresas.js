const instanciaAxios = require('../axios.js');
const fs = require('fs/promises');

const detalharEmpresa = async (req, res) => {
    const { dominioEmpresa } = req.query;
    // https://companyenrichment.abstractapi.com/v1/?api_key=2c98cbed70064df2a0893f1af2d6cc3c&domain=airbnb.com
    try {
        const empresa = await instanciaAxios.get(
            `/?domain=${dominioEmpresa}`
        )
        if (empresa && empresa.name) {
            const dadosEmpresas = JSON.parse(
                await fs.readFile('./src/dados/empresas.json')
            )
        }
        dadosEmpresas.push(empresa)
        await fs.writeFile('./src/dados/empresas.json', JSON.stringify(dadosEmpresas, null, 2))
        return res.json(dadosEmpresas);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: `${error}` })
    }
};

module.exports = {
    detalharEmpresa
}