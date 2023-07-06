const jogada1 = "pedra"
const jogada2 = "tesoura"

//seu código aqui

if ((jogada1 == "pedra" && jogada2 == "tesoura") || (jogada1 == "papel" && jogada2 == "pedra") || (jogada1 == "tesoura" && jogada2 == "papel")) {
    console.log("jogador1 ganhou")
} else if ((jogada1 == "tesoura" && jogada2 == "pedra") || (jogada1 == "pedra" && jogada2 == "papel") || (jogada1 == "papel" && jogada2 == "tesoura")) {
    console.log("jogador2 ganhou")
} else if ((jogada1 == "pedra" && jogada2 == "pedra") || (jogada1 == "papel" && jogada2 == "papel") || (jogada1 == "tesoura" && jogada2 == "tesoura")) {
    console.log("empate, jogue novamente")
} else {
    console.log("jogada invalida, jogue novamente")
}