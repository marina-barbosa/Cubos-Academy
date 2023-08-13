const ladoA = 3;
const ladoB = 3;

//seu código aqui



if (ladoA != ladoB) {
    console.log("não")
} else if (ladoA === 0 && ladoB === 0) {
    console.log("bucha de branco")
} else if (ladoA === 1 && ladoB === 1) {
    console.log("bucha de ás")
} else if (ladoA === 2 && ladoB === 2) {
    console.log("bucha de duque")
} else if (ladoA === 3 && ladoB === 3) {
    console.log("bucha de terno")
} else if (ladoA === 4 && ladoB === 4) {
    console.log("bucha de quadra")
} else if (ladoA === 5 && ladoB === 5) {
    console.log("bucha de quina")
} else if (ladoA === 6 && ladoB === 6) {
    console.log("bucha de sena")
} else {
    console.log("invalido")
}