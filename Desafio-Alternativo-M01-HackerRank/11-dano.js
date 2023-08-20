const personagem = { "nome": "Kratos", "classe": "back-end", "vida": 15 };
const personagem2 = { "nome": "Kratos", "classe": "back-end", "vida": 1 };

function solucao(personagem) {
    //seu codigo aqui
    personagem.vida = personagem.vida - 1
    if (personagem.vida <= 0) {
        return console.log('FIM DE JOGO')
    } else {
        return console.log(personagem.vida)
    }
}



solucao(personagem) // 14
solucao(personagem2) // FIM DE JOGO