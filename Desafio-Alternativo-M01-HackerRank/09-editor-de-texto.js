const texto = "sdxw wre cubos pt  o a" // 2

function solucao(texto) {
    //seu codigo aqui
    texto = texto.toLowerCase()
    texto = texto.split(' ')
    texto = texto.filter((palavra) => {
        return palavra !== ""
    })
    let contador = texto.length;
    for (let palavra of texto) {
        for (let letra of palavra) {
            if (letra == 'a'
                || letra == 'e'
                || letra == 'i'
                || letra == 'o'
                || letra == 'u') {
                contador--
                break
            }
        }
    }
    return console.log(contador)
}

solucao(texto)  