// Casos de COVID-19  :   Suponha que você está trabalhando no Ministério da Saúde e está trabalhando num simulador de casos de COVID-19. Seu trabalho é fazer um programa que calcula qual será o total de pessoas infectadas a partir de 3 variáveis.  O seu sistema ira calcular quantas pessoas estarão infectadas após 100 dias, dado que inicialmente havia 1000 pessoas infectadas, cada uma delas transmitindo para outras 4 pessoas.   P será a quantidade de pessoas infectadas após decorrido o tempo t. Imprima na tela o valor de P para os dados informados acima.




let populacao = 1000 //população inicial de pessoas infectadas 
let x = 4 // quantidade de pessoas para as quais um paciente infectado pode transmitir
let dias = 7 // tempo percorrido em dias

let res = populacao * (x ** (dias / 7))



// p = 4000 $$ // quantidade de pessoas infectadas após decorrido o tempo

console.log(res.toFixed(2))




