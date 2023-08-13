const cpf = "12345678900";
const cnpj = "12345678900";
const cpf2 = "12309"
const cnpj2 = "12345678000199"


function formatarCPF(cpf) {
    if (cpf.length < 11) {
        console.log("CPF Inválido")
    } else {
        let cpfFormatado = cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.slice(9)
        console.log(cpfFormatado)
    }
}



formatarCPF(cpf)




function formatarCNPJ(cnpj) {
    if (cnpj.length < 14) {
        console.log("CNPJ Inválido")
    } else {
        let cnpfFormatado = cnpj.slice(0, 2) + "." + cnpj.slice(2, 5) + "." + cnpj.slice(5, 8) + "/" + cnpj.slice(8, 12) + "-" + cnpj.slice(12)
        console.log(cnpfFormatado)
    }
}

formatarCNPJ(cnpj2)

// resolução do professor
// const cpf = "12345678900";
// const cnpj = "12345678900";

// function validaCpf(cpf) {
//     if (cpf.length != 11) {
//         console.log('CPF inválido');
//     } else {
//         const cpfFormatado = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
//         console.log(cpfFormatado);
//     }
// }

// validaCpf(cpf);

// function validaCnpj(cnpj) {
//     if (cnpj.length != 14) {
//         console.log('CNPJ inválido');
//     } else {
//         const cnpjFormatado = `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12)}`;
//         console.log(cnpjFormatado);
//     }
// }

// validaCnpj(cnpj);
