
let precos = [20, 15, 8, 2, 12]
let precos2 = [5, 10, 3]
let precos3 = [30, 10, 54, 76, 1, 4, 35]


function solucao(precos) {
    // seu codigo aqui
    let prejuizo = precos[0]
    let menorPrejuizo = precos[0]
    let controle = 0
    for (let x of precos) {
        controle++
        for (let y = controle; y < precos.length; y++) {
            prejuizo = x - precos[y]
            if (prejuizo < menorPrejuizo && prejuizo > 0) {
                menorPrejuizo = prejuizo
            }
        }
    }
    console.log(menorPrejuizo)
}




solucao(precos) //  3  
solucao(precos2)  //  2   
solucao(precos3) // 6     