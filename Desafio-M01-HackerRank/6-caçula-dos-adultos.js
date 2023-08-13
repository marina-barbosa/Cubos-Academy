const idades = [ 12, 18, 27, 30, 23, 28, 17, 16 ]

function solucao(lista) {
    // seu codigo aqui
    let cacula = 0;
    for (let idade of lista) {
        if (idade >= 18) {
            cacula = idade
            break;
        }
    }
    for (let idade of lista){
        if (idade >= 18 && idade < cacula) {
            cacula = idade
        }
    }
    if (cacula == 0) {
        return console.log("CRESCA E APARECA")
    } else {
        return console.log(cacula)   
    } 
}


solucao(idades)
