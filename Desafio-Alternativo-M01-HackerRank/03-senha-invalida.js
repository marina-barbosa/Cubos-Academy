const senhaDigitada = [5, 3, 8, 5, 5, 5, 7, 8, 9]; // invalida

function solucao(senhaDigitada) {
    //seu codigo aqui
    if (senhaDigitada.length < 8) {
        return console.log('INVALIDA')
    }
    for (let numero = 0; numero <= senhaDigitada.length; numero++) {
        let a = senhaDigitada[numero];
        let b = senhaDigitada[numero + 1];
        let c = senhaDigitada[numero + 2];
        if (a == b - 1 && b == c - 1) {
            return console.log('INVALIDA')
        }
    }
    return console.log('VALIDA')

}

solucao(senhaDigitada) //INVALIDA

// No mínimo 8 algarismos;
// Não pode conter 3 ou mais algarismos consecutivos.