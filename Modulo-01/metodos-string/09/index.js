const nome = 'Guido Cerqueira';


function nickname(nome) {
    let nickname = nome.toLowerCase()
    nickname = "@" + nickname
    while (nickname !== nickname.replace(" ", "")) {
        nickname = nickname.replace(" ", "")
    }
    if (nickname.length > 13) {
        nickname = nickname.slice(0, 13)
    }

    console.log(nickname)
}



nickname(nome)


//resolução do professor
// const nome = 'Gu ido Cerqueira';

// const geradorNickname = (nome) => {
//     const nomes = nome.trim().toLowerCase().split(' ');
//     let nomeSemEspaco = '';

//     for (const item of nomes) {
//         nomeSemEspaco += item;
//     }

//     const nickname = nomeSemEspaco.slice(0, 12);

//     console.log(`@${nickname}`);
// }

// geradorNickname(nome);