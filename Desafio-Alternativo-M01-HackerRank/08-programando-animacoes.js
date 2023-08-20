const velocidade = 30
const pulando = true
const atacando = false // pulando

const velocidade2 = 20
const pulando2 = true
const atacando2 = true // atacando

const velocidade3 = 30
const pulando3 = false
const atacando3 = false // pulando


function solucao(velocidade, pulando, atacando) {
    //seu codigo aqui
    if (atacando) {
        return console.log('ATACANDO')
    } else if (pulando) {
        return console.log('PULANDO')
    } else if (velocidade > 30) {
        return console.log('CORRENDO')
    } else if (velocidade == 0) {
        return console.log('PARADO')
    } else {
        return console.log('ANDANDO')
    }
}

solucao(velocidade, pulando, atacando)
solucao(velocidade2, pulando2, atacando2)
solucao(velocidade3, pulando3, atacando3)