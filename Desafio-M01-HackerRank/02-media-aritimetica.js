const numeros = [ 2, 3, 4]

function solucao(lista) {
    //seu codigo aqui
    let soma = 0
    let media = 0
    for (let num of lista) {
        soma += num
    }
    media = soma / lista.length
    return console.log(media)
  }

 solucao(numeros)