
// Calculo do perímetro e área de um círculo

// Faça um programa que, a partir do raio de um círculo, calcula o comprimento e a área  deste círculo. Esses valores são obtidos pelas fórmulas:

// Para um círculo com $R = 1, os valores de C e A são:

// C ≅ 6,3 $$

// A ≅ 3,14 $$

let raio = 1
let comprimento = 2 * Math.PI * raio
let area = Math.PI * raio ** 2


console.log(comprimento.toFixed(2))
console.log(area.toFixed(2))