const somar = (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        return res.send(`${num1 + num2}`);
    }

    return res.send('Números inválidos!');
}

const subtrair = (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        return res.send(`${num1 - num2}`);
    }

    return res.send('Números inválidos!');
}

const multiplicar = (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        return res.send(`${num1 * num2}`);
    }

    return res.send('Números inválidos!');
}

const dividir = (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        return res.send(`${num1 / num2}`);
    }

    return res.send('Números inválidos!');
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}