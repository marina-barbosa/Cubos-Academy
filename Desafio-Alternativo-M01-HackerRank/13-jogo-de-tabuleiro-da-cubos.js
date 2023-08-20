let dinheiro = 5
let casaAtual = 5
let numeroDoDado = 2
let lucroPrejuizoCasas = [3, -1, -4, 20, 6, 2, -7, 9, -8, 9, 5, 8, 3, 2, -1, -1, -3, 4, 8, 10] // perdeu



function solucao(dinheiro, casaAtual, numeroDoDado, lucroPrejuizoCasas) {
    //seu codigo aqui    
    const casa = casaAtual + numeroDoDado;

    if (casa > 20) {
        return console.log('GANHOU')
    }

    const indice = casa - 1
    let dinheiroAtt = dinheiro + lucroPrejuizoCasas[indice]
    if (dinheiroAtt <= 0) {
        return console.log('PERDEU')
    }

    return console.log(dinheiroAtt)
}

solucao(dinheiro, casaAtual, numeroDoDado, lucroPrejuizoCasas)


dinheiro = 20
casaAtual = 18
numeroDoDado = 3
lucroPrejuizoCasas = [30, -4, -4, 10, -6, -2, -7, -9, -8, 19, 25, 8, 3, 2, -10, 5, -300, 40, 80, 10] //ganhou




solucao(dinheiro, casaAtual, numeroDoDado, lucroPrejuizoCasas)