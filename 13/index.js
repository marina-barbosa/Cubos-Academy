//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;
let desconto

if (tipoDePagamento === "credito") {
    desconto = 5
} else if (tipoDePagamento === "cheque") {
    desconto = 3
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    desconto = 10
} else {
    console.log("erro")
}

let valorFinal = valorDoProduto - (valorDoProduto / 100) * desconto
console.log(valorFinal)
