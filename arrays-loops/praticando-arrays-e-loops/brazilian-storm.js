let notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100]
let notas2 = [100, 100, 100, 50]



function solucao(notas) {
    //seu codigo aqui
    let maior = notas[0]
    let menor = notas[0]
    let soma = 0
    let media = 0

    for (let nota of notas) {
        soma += nota
        if (nota < menor) {
            menor = nota
        }
        if (nota > maior) {
            maior = nota
        }
    }
    media = (soma - maior - menor) / (notas.length - 2)
    console.log(media)

}

solucao(notas)
// 75
solucao(notas2)
// 100