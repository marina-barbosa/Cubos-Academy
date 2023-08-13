const comentario = "Esse COVID é muito perigoso!";


function filtro(comment) {
    let comentario = comment.toLowerCase()
    if (comentario.includes("covid")) {
        console.log("Comentário bloqueado por conter palavras proibidas")
    } else {
        console.log(comentario)
    }

}

filtro(comentario)


// resolução do professor
// const comentario = "Esse COVID é muito perigoso!";

// const achouCovid = comentario.toLowerCase().includes('covid');

// const achouPandemia = comentario.toLowerCase().includes('pandemia');

// if (achouCovid || achouPandemia) {
//     console.log("Comentário bloqueado por conter palavras proibidas");
// } else {
//     console.log("Comentário autorizado");
// }