// Calcular juros compostos


// Se um capital de R$ 1000,00 é aplicado durante 5 meses no sistema de juros compostos sob uma taxa mensal fixa de 12,5%, qual será o valor do montante?



let capital = 1000
let taxa = 12.5
let periodo = 5

let juros = (1 + (taxa / 100)) ** periodo

let montante = capital * juros


console.log("R$" + montante.toFixed(2))


//montante = 1802 