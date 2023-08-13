
// Digamos que pegou emprestado R$ 60.000,00 e após 24 meses tenha pago R$ 90.000,00 para encerrar sua dívida. Qual a taxa de juros mensal desse emprestimo?


let capital = 60000
let meses = 24
let montante = 90000
let taxa = (((montante / capital) ** (1 / meses)) - 1) * 100



console.log(taxa.toFixed(3))

// 1,703%

