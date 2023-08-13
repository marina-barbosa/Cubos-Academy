
let disparos = [0, 10, 50, 70, 80, 30]
let disparos2 = [0, 50, 90, 80, 100, 80, 40]

function solucao(disparos) {
    //seu codigo aqui
    let contador = 0;
    for (let pontos of disparos) {
        if (pontos > 70) {
            contador++
        }
    }
    if (contador < 3) {
        console.log("ELIMINADO")
    } else {
        console.log(contador)
    }
}

solucao(disparos)
// ELIMINADO
solucao(disparos2)
//4