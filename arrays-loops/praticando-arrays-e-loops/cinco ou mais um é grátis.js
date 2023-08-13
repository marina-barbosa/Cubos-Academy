let produtos = [100, 500, 100, 200, 50]
let produtos2 = [100, 100, 100, 50]

function solucao(precos) {
    //seu codigo aqui
    let total = 0
    let menor = precos[0]
    if (precos.length < 5) {
        for (let i of precos) {
            total += i
        }
    } else {
        for (let i of precos) {
            total += i
            if (i < menor) {
                menor = i
            }
        }
        total -= menor
    }
    console.log(total)

}


solucao(produtos)
solucao(produtos2)
//900
//350