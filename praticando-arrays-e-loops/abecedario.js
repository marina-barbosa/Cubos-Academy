

let letra = "m"

let palavras = [
    "mamao",
    "maca",
    "melao",
    "melancia",
    "laranja"
]


function solucao(letra, palavras) {
    //seu codigo aqui
    let contador = 0
    for (let palavra of palavras) {
        if (letra != palavra[0]) {
            contador++
        }
    }
    console.log(contador)
}


solucao(letra, palavras)