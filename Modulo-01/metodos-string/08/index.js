const cpf = "011.022.033-44";


function removerPontuacao(cpf) {
    while (cpf !== cpf.replace(".", "")) {
        cpf = cpf.replace(".", "")
    }
    while (cpf !== cpf.replace("-", "")) {
        cpf = cpf.replace("-", "")
    }
    console.log(cpf)
}



removerPontuacao(cpf)


//resolução do professor
// const cpf = "011.022.033-44";
// const cnpj = "11.022.033/0001-44";

// const removerPontuacao = (numero) => {
//     let numeros = numero.replace('-', '').replace('/', '').split('.');
//     let numeroLimpo = '';

//     for (const item of numeros) {
//         numeroLimpo += item;
//     }

//     console.log(numeroLimpo);
// }

// removerPontuacao(cpf);
// removerPontuacao(cnpj);