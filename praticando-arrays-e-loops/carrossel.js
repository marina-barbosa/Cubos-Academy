let sequencia1 = ['>', '>', '>', '<', '>']
let sequencia2 = ['>']
let sequencia3 = ['<']
let sequencia4 = ['>', '>', '>', '>', '>', '>', '>', '>', '>']



function solucao(sequencia) {
    //seu codigo aqui
    //let carrossel = [0, 1, 2, 3, 4, 5, 6]
    let contador = 0
    for (let clique of sequencia) {
        if (clique === '>') {
            if (contador == 6) {
                contador = 0
            } else {
                contador++
            }
        } else {
            if (contador == 0) {
                contador = 6
            } else {
                contador--
            }
        }
    }
    console.log(contador)
}

solucao(sequencia1) //3
solucao(sequencia2) //1
solucao(sequencia3) //6
solucao(sequencia4) //2