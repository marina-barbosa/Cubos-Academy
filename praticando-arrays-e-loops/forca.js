
let palpite = 'a'
let palavra = 'abelha'


function solucao(palpite, palavra) {
    // seu codigo aqui
    let acertos = 0
    for (let letra of palavra) {
        if (letra == palpite) {
            acertos++
        }
    }
    console.log(acertos)
}

solucao(palpite, palavra)
//A saída sempre será a quantidade de acertos do palpite.
//a abelha
//2