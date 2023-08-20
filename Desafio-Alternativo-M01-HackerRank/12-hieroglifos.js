const hieroglifo = [2, 'casa', 'comida', 3, 4, 4, 5] // 2


function solucao(hieroglifo) {
    //seu codigo aqui
    let contador = 0;
    for (let item of hieroglifo) {
        if (isNaN(Number(item))) {
            contador++
        }
    }
    return console.log(contador)
}

solucao(hieroglifo)
  // solucao(hieroglifo2)