

let primeiraLetra = "c"
let segundaLetra = "v"

let primeiraLetra2 = "a"
let segundaLetra2 = "v"

let palavras = ["aveia", "manha", "ave"]


function solucao(primeiraLetra, segundaLetra, palavras) {
    //seu codigo aqui
    let selecao = []
    let contador = 0;
    for (let palavra of palavras) {
        if (palavra[0] == primeiraLetra && palavra[1] == segundaLetra) {
            selecao.push(palavra)
        }
    }
    if (selecao.length == 0) {
        console.log("NENHUMA")
    } else {
        for (let palavra of selecao) {
            console.log(palavra)
        }
    }

}

solucao(primeiraLetra, segundaLetra, palavras)
// nenhuma

solucao(primeiraLetra2, segundaLetra2, palavras)
// aveia, ave

