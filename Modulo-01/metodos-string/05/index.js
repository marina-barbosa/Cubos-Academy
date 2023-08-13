const numeroCartao = '1111222233334444';

function esconderNumero(numero) {
    let numeroCartaoFormatado = ""
    let primeirosDigitos = numero.slice(0, 4)
    let ultimosDigitos = numero.slice(12, 16)
    numeroCartaoFormatado = primeirosDigitos + "********" + ultimosDigitos
    console.log(numeroCartaoFormatado)
}



esconderNumero(numeroCartao)




// RESOLUÇÃO DO PROFESSOR
// const numeroCartao = '1111222233334444';

// const numerosIniciais = numeroCartao.slice(0, 4);
// const numerosFinais = numeroCartao.slice(12);

// const numeroCartaoFormatado = `${numerosIniciais.padEnd(8, '*')}${numerosFinais.padStart(8, '*')}`

// console.log(numeroCartaoFormatado);

