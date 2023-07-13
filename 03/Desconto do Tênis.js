//Você deseja comprar um tênis novo, porém, está com o dinheiro do mês contado e te sobrará somente R$ 80,00 para comprá-lo.     O tênis custa R$ 129,99 porém um amigo seu trabalha na loja e consegue te dar um cupom de desconto, a única coisa que ele precisa saber é quanto por cento de desconto você necessita.    Crie um programa para calcular a porcentagem necessária de desconto para você conseguir comprar o tênis, utilizando a regra de três.

tenho = 80.00
custa = 129.99
porcentagemQueTenho = (tenho * 100) / custa
desconto = 100 - porcentagemQueTenho.toFixed(2)
console.log(desconto.toFixed(1) + "%")




// Caso você tivesse apenas R$ 50,00 e desejasse comprar um produto de R$ 110,00. Qual o percentual de desconto?

tenho2 = 50.00
custa2 = 110.00
porcentagemQueTenho2 = (tenho2 * 100) / custa2
desconto2 = 100 - porcentagemQueTenho2.toFixed(2)
console.log(desconto2 + "%")