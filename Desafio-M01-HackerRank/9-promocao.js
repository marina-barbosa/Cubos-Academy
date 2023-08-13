
const precos = [150, 50] //200

const precos2 = [100, 100, 100] //250

const precos3 = [200, 150, 50, 100] //475

function solucao(precos) {
    //seu codigo aqui
    let valor = 0
    let menor = precos[0]
    if(precos.length < 3) {
        valor = precos.reduce( (acumulador, elementoAtual) => {return acumulador + elementoAtual} )
        return console.log(valor)
    } else {
        for (let valor of precos) {
            if (valor < menor) {
                menor = valor
            }
        }
        valor = precos.reduce( (acumulador, elementoAtual) => {return acumulador + elementoAtual} )
        valor = valor - (menor / 2)
        return console.log(valor)
    }
}

solucao(precos)
solucao(precos2)
solucao(precos3)