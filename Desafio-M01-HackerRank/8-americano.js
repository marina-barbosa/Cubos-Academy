const numeros = [1, 3, 2, 1] // 3
const numeros2 = [1, 1, 1] // 3
const numeros3 = [1, 1, 1, 3, 4, 4, 5] // 5

function solucao(numeros) {
    // seu codigo aqui
    let soma = numeros.reduce((acumulador, elementoAtual) => { return acumulador + elementoAtual })
    if (soma % numeros.length == 0) {
        return console.log(numeros.length)
    } else {
        return console.log(soma % numeros.length)
    }
}

solucao(numeros)

solucao(numeros2)
solucao(numeros3)