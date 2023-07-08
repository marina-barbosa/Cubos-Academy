//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 90000;


let parcelaFaltante = (valorDoProduto - valorPago) / 10000

let valorParcela = valorDoProduto / quantidadeDoParcelamento / 100


if (valorPago == valorDoProduto) {
    console.log("Divida quitada")
} else {
    let unidade = (parcelaFaltante === 1 ? `Resta ${parcelaFaltante} parcela` : `Restam ${parcelaFaltante} parcelas`)

    console.log(unidade + ` de R$ ${valorParcela}`)
}