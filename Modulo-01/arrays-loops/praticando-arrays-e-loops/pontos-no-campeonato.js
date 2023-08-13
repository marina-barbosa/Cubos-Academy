

let resultados = ["V", "E", "V", "E"]


function solucao(resultados) {
    //seu codigo aqui
    let totalPontos = 0;
    for (let res of resultados) {
        if (res == "V") {
            totalPontos += 3
        } else if (res == "E") {
            totalPontos += 1
        }
    }
    console.log(totalPontos)
}

solucao(resultados)
// 8