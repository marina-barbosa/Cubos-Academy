//2 , 10
const valores = [ 0, 5, 6, 10, 11 ] // [ 5, 6, 10 ]

//1, 1
const valores2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9] // [ 1 ]

function solucao(min, max, valores) {
    let autorizados = []
    for (let valor of valores) {
        if (valor >= min && valor <= max) {
            autorizados.push(valor)
        }
    }
    return console.log(autorizados)
    
  }

  solucao(2,10,valores)
  solucao(1,1,valores2)