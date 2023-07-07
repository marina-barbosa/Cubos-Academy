const letras = ["A", "a", "B", "C", "E", "e"];

let soma = 0

for (let letra of letras) {
    if (letra === 'E' || letra === 'e') {
        soma++
    }
}

if (soma === 0) {
    console.log("Nenhuma letra 'E' ou 'e' foi encontrada.")
} else if (soma === 1) {
    console.log(`Foi encontrada ${soma} letra 'E' ou 'e'.`)
} else {
    console.log(`Foram encontradas ${soma} letras 'E' ou 'e'.`)
}
