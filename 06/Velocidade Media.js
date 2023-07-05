// Velocidade média : Suponha que você está trabalhando no desenvolvimento de um app para smart watch que calcula a velocidade média de uma pessoa que está usando o dispositivo numa corrida.   Calcule a velocidade média dessa pessoa a partir da distância percorrida pela pessoa e pelo tempo que passou, utilizando a fórmula abaixo.  Contudo, as informações de distância que você recebe estão em metros e o tempo em segundos. Ou seja, ao aplicar esta fórmula, a velocidade estará em metros por segundo.  O ideal é que o seu usuário veja a velocidade em km/h.   Para isso, após fazer o calcula da velocidade, você deve transformar a unidade de metros por segundo para km/h. Para isso, basta multiplicar o resultado por 3,6.



let distPercorridaEmMetros = 500
let tempoEmSegundos = 10

let velocidade = distPercorridaEmMetros / tempoEmSegundos



//Para converter esse valor em km/h

velocidade = velocidade * 3.6

// 180km/h 

console.log(velocidade + "km/h")

