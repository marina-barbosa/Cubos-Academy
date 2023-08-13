const texto = "Aprenda programar do zero na Cubos Academy";

// minha função
function urlAmigavel(txt) {
    let urlFormatada = txt.toLowerCase()
    let listaUrl = urlFormatada.split(" ")
    urlFormatada = ""
    for (let palavra of listaUrl) {
        urlFormatada += palavra += "-"
    }
    urlFormatada = urlFormatada.slice(0, urlFormatada.length - 1)
    console.log(urlFormatada)
}




function urlAmigavel2(txt) {
    let urlFormatada = txt.toLowerCase()
    console.log(replaceAll(urlFormatada, " ", "-"))
}

//função do professor
function replaceAll(original, text, newText) {
    while (original !== original.replace(text, newText)) {
        original = original.replace(text, newText);
    }
    return original;
}


urlAmigavel(texto)

urlAmigavel2(texto)

// resolução do professor
// const texto = "Aprenda programar do zero na Cubos Academy";

// const transformarTextoEmUrl = (texto) => {
//     let url = '';

//     const arrayPalavras = texto.split(' ');

//     for (let i = 0; i < arrayPalavras.length; i++) {
//         if (i > 0) {
//             url += `-${arrayPalavras[i]}`;
//         } else {
//             url += `${arrayPalavras[i]}`;
//         }
//     }

//     console.log(url.toLowerCase());
// }

// transformarTextoEmUrl(texto);




