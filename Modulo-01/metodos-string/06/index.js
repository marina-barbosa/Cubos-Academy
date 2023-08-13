
const celular8 = 99918888;
const celular9 = 999918888;
const celular10 = 7199918888;
const celular11 = 71999918888;
// 8 9 10 11

function formatarNumeroCelular(celular) {
    celular = String(celular)

    let nono = "9 "
    let final = celular.slice(celular.length - 4)
    let comeco = celular.slice(celular.length - 8, celular.length - 4)
    if (celular.length > 9) {
        let ddd = celular.slice(0, 2)
        celular = "(" + ddd + ") " + nono + comeco + "-" + final
    } else {
        celular = nono + comeco + "-" + final
    }
    console.log(celular)
}

formatarNumeroCelular(celular8)
formatarNumeroCelular(celular9)
formatarNumeroCelular(celular10)
formatarNumeroCelular(celular11)


//resolução do professor
// const celular = 7199918888;

// function formataCelular(numero) {
//     let celular;

//     if (numero.length === 8) {
//         celular = `9 ${numero.slice(0, 4)}-${numero.slice(4)}`;
//         console.log(celular);
//     } else if (numero.length === 9) {
//         celular = `${numero.slice(0, 1)} ${numero.slice(1, 5)}-${numero.slice(5)}`;
//         console.log(celular);
//     } else if (numero.length === 10) {
//         celular = `(${numero.slice(0, 2)}) 9 ${numero.slice(2, 6)}-${numero.slice(6)}`;
//         console.log(celular);
//     } else if (numero.length === 11) {
//         celular = `(${numero.slice(0, 2)}) ${numero.slice(2, 3)} ${numero.slice(3, 7)}-${numero.slice(7)}`;
//         console.log(celular);
//     } else {
//         console.log('número inválido');
//     }
// }

// formataCelular(celular.toString());