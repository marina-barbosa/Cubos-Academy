//const taltal = require('../bancodedados');

const somar = (req, res) => {
    const { num1, num2 } = req.query;
    let soma = 0;
    soma = Number(num1) + Number(num2);

    res.send(`Soma = ${soma}`);
}

const subtrair = (req, res) => {
    const { num1, num2 } = req.query;
    let resultado = 0;
    resultado = Number(num1) - Number(num2);

    res.send(`Res = ${resultado}`);
}

const multiplicar = (req, res) => {
    const { num1, num2 } = req.query;
    let resultado = 0;
    resultado = Number(num1) * Number(num2);

    res.send(`Res = ${resultado}`);
}

const dividir = (req, res) => {
    const { num1, num2 } = req.query;
    let resultado = 0;
    resultado = Number(num1) / Number(num2);

    res.send(`Res = ${resultado}`);
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}