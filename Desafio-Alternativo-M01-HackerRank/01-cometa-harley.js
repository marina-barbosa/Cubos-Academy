const ano1 = 1986;
const ano2 = 2062;
const ano3 = 2030;

function solucao(ano) {
    //seu codigo aqui

    if ((ano - 1986) % 76 == 0) {
        return console.log('VAI PASSAR')
    } else {
        return console.log('NAO VAI PASSAR')
    }

}


solucao(ano1) // s ou n?
solucao(ano2) // s
solucao(ano3) // n