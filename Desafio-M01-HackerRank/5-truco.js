const cartas = ['Q', 'J', 'K', 'A', '2', '3']
const manilhas = ['J', 'K', 'A', '2', '3', 'Q']
const carta = 'Q' // J
const carta2 = '3' // Q

function solucao(carta) {
    //seu codigo aqui
    const cartas = ['Q', 'J', 'K', 'A', '2', '3']
    const manilhas = ['J', 'K', 'A', '2', '3', 'Q']

    console.log(manilhas[cartas.indexOf(carta)])

}

solucao(carta)
solucao(carta2)