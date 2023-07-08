const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

if (apelido) {
    console.log(apelido)
} else if (sobrenome) {
    console.log(primeiroNome + " " + sobrenome)
} else if (primeiroNome) {
    console.log(primeiroNome)
} else {
    console.log("é obrigatorio preencher o primeiro nome")
}