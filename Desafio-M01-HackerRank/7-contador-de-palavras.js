const texto = "Um texto qualquer."  // 3

const texto2 = "  Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer.   " // 14

const texto3 = "solitaria" // 1
const texto4 = "um texto com dois  espaços no   meio" // 7

function solucao(texto) {
    // Seu codigo aqui
    if (texto == "") {
        return console.log(0)
    } else {
        texto = texto.trim()
        texto = texto.split(" ")
        let textoSemNumero = []
        for (let palavra of texto) {
            if (palavra !== "") {
                textoSemNumero.push(palavra)
            }
        }
        return console.log(textoSemNumero.length)
    }
}

solucao(texto)
solucao(texto2)
solucao(texto3)
solucao(texto4)




