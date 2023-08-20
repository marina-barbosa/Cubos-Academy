const anotacaoAtleta = ["cavalo", "pedra", "tartaruga"]
const gabarito = ["cavalo", "pedra", "morcego"]
const anotacaoAtleta2 = ["aviao", "cadeira", "caneco"]
const gabarito2 = ["pedra", "limpeza", "tigre", "macaco"]
const anotacaoAtleta3 = ["lambari", "campanhia", "namoro"]
const gabarito3 = ["lambari", "campanhia", "namoro"]


function solucao(anotacaoAtleta, gabarito) {
    //seu codigo aqui
    if (anotacaoAtleta.length !== gabarito.length) {
        return console.log("PROVA INCOMPLETA")
    } else {
        for (let i = 0; i <= gabarito.length; i++)
            if (gabarito[i] !== anotacaoAtleta[i]) {
                return console.log("PROVA INCOMPLETA")
            }
    }
    return console.log("PROVA COMPLETA")
}

solucao(anotacaoAtleta, gabarito)
solucao(anotacaoAtleta2, gabarito2)
solucao(anotacaoAtleta3, gabarito3)