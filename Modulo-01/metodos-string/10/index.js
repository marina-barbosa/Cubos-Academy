const nomeArquivo = 'Foto da Familia.pdf';
const nomeArquivo1 = 'Foto da Familia.png';
const nomeArquivo2 = 'Foto da Familia.gif';
const nomeArquivo3 = 'Foto da Familia.jpg';
const nomeArquivo4 = 'Foto da Familia.jpeg';


function validacao(arquivo) {
    let extensao = arquivo.slice(arquivo.length - 4)
    if (extensao == ".jpg" || extensao == ".png" || extensao == ".gif" || extensao == "jpeg") {
        console.log("Arquivo válido")
    } else {
        console.log("Arquivo inválido")
    }
}


function validacao2(arquivo) {
    if (arquivo.includes("png") || arquivo.includes("gif") || arquivo.includes("jpg") || arquivo.includes("jpeg")) {
        console.log("Arquivo válido")
    } else {
        console.log("Arquivo inválido")
    }
}



validacao2(nomeArquivo)
validacao2(nomeArquivo1)
validacao2(nomeArquivo2)
validacao2(nomeArquivo3)
validacao2(nomeArquivo4)

//resolução do professor
// const nomeArquivo = 'Foto da Familia.pdf';

// function validarArquivo(arquivo) {
//     const extensao = arquivo.slice(arquivo.lastIndexOf('.') + 1);

//     if (extensao === 'jpg' || extensao === 'jpeg' || extensao === 'gif' || extensao === 'png') {
//         console.log('Arquivo válido!');
//     } else {
//         console.log('Arquivo inválido!');
//     }
// }

// validarArquivo(nomeArquivo);