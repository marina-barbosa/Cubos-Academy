
const numeros = [ 1, 2, 3, 4]

function solucao(lista) {
    //seu codigo aqui
    let soma = 0
    for (let num of lista) {
        soma += num
    }
    return soma
  }

  console.log(solucao(numeros))