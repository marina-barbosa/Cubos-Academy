//DESLIGAR ALUNO: caso o aluno tenha que ser desligado;
//SITUACAO REGULAR: caso o aluno não deva ser desligado.

const notas = [10, 10, 9, 10, 4, 10, 10, 10, 10] // desligar


function solucao(notas) {
    //seu codigo aqui
    let i = 0;
    let d = 0;
    for (let nota of notas) {
        if (nota < 5) {
            i++
            d++
        } else if (nota <= 6.4) {
            i++
        }
    }
    if (d > 0 || i > 1) {
        return console.log('DESLIGAR ALUNO')
    } else {
        return console.log('SITUACAO REGULAR')
    }
}

solucao(notas)



//I (Insuficiente): 5,0 a 6,4;   2
//D (Deficiente): abaixo de 5,0. 1