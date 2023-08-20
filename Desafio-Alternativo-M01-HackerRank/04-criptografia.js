const mensagem = 'yeyb';
const tabela = { "y": "a", "e": "m", "b": "r" };
const mensagem2 = 'yerws';
const tabela2 = { "e": "u", "w": "o", "y": "c", "r": "b", "s": "s" };




function solucao(mensagem, tabela) {
    //seu codigo aqui
    let senha = ''
    for (let letra of mensagem) {
        senha = senha + tabela[letra]
    }
    return console.log(senha)
}

solucao(mensagem, tabela) //amar
solucao(mensagem2, tabela2) //cubos