const email = "aluno@cubos.academy"; //E-mail válido


let email1 = "jose@cubos.academy"	//E-mail válido
let email2 = "jose@cubos.academy.br"	//E-mail válido
let email3 = "jose.messias@cubos.academy"	//E-mail válido
let email4 = "jose.messias@cubos.io"	//E-mail válido
let email6 = "jose.messias@cubos"	//E-mail válido
let email8 = "jose.@cubos"	//E-mail válido

let email5 = "jose@cubos"	//E-mail inválido
let email7 = "jose.messias@."	//E-mail inválido
let email9 = ".@"	//E-mail inválido
let email10 = "@."	//E-mail inválido
let email11 = "jose.messias@cubos."	//E-mail inválido
let email12 = ".messias@cubos."	//E-mail inválido
let email13 = ".messias@cubos"	//E-mail inválido


function validação(email) {
    let temArroba = email.includes("@")
    let temPonto = email.includes(".")
    let semPontoFinal = true
    if (email[email.length - 1] == ".") {
        semPontoFinal = false
    }
    let semPontoNoComeco = true
    if (email[0] == ".") {
        semPontoNoComeco = false
    }
    //console.log(temArroba)
    //console.log(temPonto)
    //console.log(semPontoFinal)
    //console.log(semPontoNoComeco)
    if (temArroba && temPonto && semPontoFinal && semPontoNoComeco) {
        console.log("E-mail válido")
    } else {
        console.log("E-mail inválido")
    }

}



validação(email1)
validação(email2)
validação(email3)
validação(email4)
validação(email6)
validação(email8)
validação(email5)
validação(email7)
validação(email9)
validação(email10)
validação(email11)
validação(email12)
validação(email13)


//resolução do professor
// const validarEmail = (email) => {
//     let emailValido = true;

//     if (email.indexOf('@') < 0) {
//         emailValido = false;
//     } else if (email.indexOf('.') < 0) {
//         emailValido = false;
//     } else if (email.indexOf('.') === 0) {
//         emailValido = false;
//     } else if (email.lastIndexOf('.') === email.length - 1) {
//         emailValido = false;
//     }

//     if (emailValido) {
//         console.log('email válido');
//     } else {
//         console.log('email inválido');
//     }
// }