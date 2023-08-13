
let stringCorrompida = "*Canis %lupus )familiaris!@#$%&*()."


// seu codigo aqui
let stringPurificada = ""
for (let c of stringCorrompida) {
    if (c != "!" && c != "@" && c != "#" && c != "$" && c != "%" && c != "&" && c != "*" && c != "(" && c != ")" && c != ".") {
        stringPurificada += c
    }
}


console.log(stringPurificada)