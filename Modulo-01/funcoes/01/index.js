const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let notaMaxima = prova.valor
    let numeroDeQuestoes = prova.questoes.length
    let pontoPorAcerto = notaMaxima / numeroDeQuestoes
    let qtddDeAcertos = 0
    let notaDoAluno = 0

    for (let i of prova.questoes) {
        if (i.resposta == i.correta) {
            notaDoAluno += pontoPorAcerto
            qtddDeAcertos++
        }
    }
    console.log(`O aluno(a) ${prova.aluno} acertou ${qtddDeAcertos} questões e obteve nota ${notaDoAluno}.`)

}




corrigirProva(prova)
//O aluno(a) João acertou 3 questões e obteve nota 6

//4resolução do professor
// const corrigirProva = (prova) => {
//     let questoesCorretas = 0;

//     for (const questao of prova.questoes) {
//         if (questao.resposta === questao.correta) {
//             questoesCorretas++
//         }
//     }

//     let valorPorQuestao = prova.valor / prova.questoes.length;

//     let notaDaProva = valorPorQuestao * questoesCorretas;

//     if (questoesCorretas === 0) {
//         console.log(`${prova.aluno} não acertou qualquer questão e obteve nota 0`);
//     } else if (questoesCorretas === 1) {
//         console.log(`O aluno(a) ${prova.aluno} acertou 1 questão e obteve nota ${notaDaProva}`);
//     } else {
//         console.log(`O aluno(a) ${prova.aluno} acertou ${questoesCorretas} questões e obteve nota ${notaDaProva}`);
//     }
// }

// corrigirProva(prova);