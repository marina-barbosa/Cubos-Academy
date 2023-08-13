
const numeros = [56, 4, 8, 2, 75, 6, 56, 43, 67, 10];
const numeros2 = [8, 11, 4, 1];

let maior = 0
let menor = numeros[0]

for (let num of numeros) {
    if (num > maior) {
        maior = num
    }
    if (num < menor) {
        menor = num
    }
}

let maiorDif = maior - menor
console.log(maiorDif)