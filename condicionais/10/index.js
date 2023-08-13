//const caractere = prompt("Digite um caractere:");
const caractere = "E";



// Função para determinar a categoria do caractere
function determinarCategoria(caractere) {
    let lowercaseVogais = "aeiou";
    let uppercaseVogais = "AEIOU";
    let consoantes = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz";
    let numeros = "0123456789";

    if (lowercaseVogais.includes(caractere)) {
        return "Vogal (minúscula)";
    } else if (uppercaseVogais.includes(caractere)) {
        return "Vogal (maiúscula)";
    } else if (consoantes.includes(caractere)) {
        return "Consoante";
    } else if (numeros.includes(caractere)) {
        return "Número";
    } else {
        return "Caractere inválido";
    }
}

let categoriaEncontrada = determinarCategoria(caractere);
console.log(`O caractere "${caractere}" é do tipo: ${categoriaEncontrada}`);