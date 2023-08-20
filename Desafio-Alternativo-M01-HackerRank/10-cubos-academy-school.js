const notas = [10, 9, 8, 7] // RECORRIGIR PROVA
const notas2 = [10, 10, 9, 9] // 9.5

function solucao(notas) {
    //seu codigo aqui
    let media = 0;
    let maior = notas[0];
    let menor = notas[0];
    for (let nota of notas) {
        if (nota < menor) {
            menor = nota
        }
        if (nota > maior) {
            maior = nota
        }
        media += nota
    }
    if ((maior - menor) > 2) {
        return console.log('RECORRIGIR PROVA')
    } else {
        return console.log(media / notas.length)
    }
}

solucao(notas)
solucao(notas2)