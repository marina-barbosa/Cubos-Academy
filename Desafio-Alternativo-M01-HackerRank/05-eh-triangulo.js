const lados = [2, 5, 10, 6];
const lados2 = [3, 5, 4];


function solucao(lados) {
    //seu codigo aqui
    // lado B + lado C > lado A && lado A + lado C > lado B && lado A + lado B > lado C.
    if (lados.length > 3) {
        return console.log('NAO TRIANGULO')
    } else {
        const a = lados[0];
        const b = lados[1];
        const c = lados[2];
        if (b + b > a && a + c > b && a + b > c) {
            return console.log('TRIANGULO')
        } else {
            return console.log('NAO TRIANGULO')
        }
    }
}

solucao(lados) // n
solucao(lados2) // s