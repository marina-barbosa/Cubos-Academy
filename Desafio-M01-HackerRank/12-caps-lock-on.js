const palavra = 'cAPS'
const palavra2 = 'CAPS'
const palavra3 = 'lock'
const palavra4 = 'capsLOck'
const palavra5 = 'Capslock'

//  const hasUpper = (str) => /[A-Z]/.test(str);

//(/[a-z]/.test(palavra[0]))
processData(palavra)
processData(palavra2)
processData(palavra3)
processData(palavra4)
processData(palavra5)


function processData(palavra) {
    //Enter your code here    
    let todasMaiusculas = true
    let primeiraLetraMinuscula = false
    let restanteMaiusculas = true
    
    for (let letra of palavra) {
        if(/[a-z]/.test(letra)){
            todasMaiusculas = false
            break
        }
    }

    if (todasMaiusculas) {
        palavra = palavra.toLowerCase()
        return console.log(palavra)
    } 
    

    let primeiraLetra = palavra.slice(0, 1)
    let restante = palavra.slice(1)

    primeiraLetraMinuscula = /[a-z]/.test(primeiraLetra)

    for (let letra of restante) {
        if(/[a-z]/.test(letra)){
            restanteMaiusculas = false
            break
        }
    }
        
    if (primeiraLetraMinuscula && restanteMaiusculas) {
        primeiraLetra = primeiraLetra.toUpperCase()
        restante = restante.toLowerCase()
        palavra = primeiraLetra + restante
        console.log(palavra)
    } else {    
    return console.log(palavra)
    }
}



/*
function processData(palavra) {
    //Enter your code here
    let todasMinusculas = true
    let todasMaiusculas = true
    let primeirLetraMaiuscula = false
    let restanteMinuscula = true
    for (let letra of palavra) {
        if(/[A-Z]/.test(letra)){
            todasMinusculas = false
            break
        }
    }
    for (let letra of palavra) {
        if(/[a-z]/.test(letra)){
            todasMaiusculas = false
            break
        }
    }
    if (todasMinusculas) {
        return console.log(palavra)    
    } else if (todasMaiusculas) {
        palavra = palavra.toLowerCase()
        return console.log(palavra)
    } else {
        let primeiraLetra = palavra.slice(0, 1)
        let restante = palavra.slice(1)
        for (let letra of restante) {
            if(/[A-Z]/.test(letra)){
                restanteMinuscula = false
                break
            }
        }
        primeirLetraMaiuscula = /[A-Z]/.test(primeiraLetra)
        
        if (primeirLetraMaiuscula && restanteMinuscula) {
            console.log(palavra)
        } else {
        palavra = palavra.toLowerCase()
        return console.log(palavra)
        }
    }
} 


function processData(palavra) {
    //Enter your code here
    let todasMinusculas = true
    let todasMaiusculas = true
    for (let letra of palavra) {
        if(/[A-Z]/.test(letra)){
            todasMinusculas = false
            break
        }
    }
    for (let letra of palavra) {
        if(/[a-z]/.test(letra)){
            todasMaiusculas = false
            break
        }
    }
    if (todasMinusculas) {
        return console.log(palavra)    
    } else if (todasMaiusculas) {
        palavra = palavra.toLowerCase()
        return console.log(palavra)
    } else {
        palavra = palavra.toLowerCase()        
        let primeiraLetra = palavra.slice(0, 1)
        primeiraLetra = primeiraLetra.toUpperCase()
        let restante = palavra.slice(1)
        palavra = primeiraLetra + restante 
        return console.log(palavra)
    }
} 
*/



