const gabarito = [true, false, true, true, false, false, true, true, false, false, false, true, true, false, true, false]; //18

function solucao(gabarito) {
    //seu codigo aqui
    let pontos = 0;
    for (let i = 0; i <= gabarito.length; i++) {
        if (i < 4 && gabarito[i]) {
            pontos += 1
        } else if (i < 8 && gabarito[i]) {
            pontos += 2
        } else if (i < 12 && gabarito[i]) {
            pontos += 3
        } else if (gabarito[i]) {
            pontos += 4
        }
    }
    return console.log(pontos)

}



solucao(gabarito) // 18