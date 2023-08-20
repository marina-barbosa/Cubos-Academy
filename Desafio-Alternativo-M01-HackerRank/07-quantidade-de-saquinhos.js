const pedido = { "brigadeiro": 30, "cajuzinho": 20, "beijinho": 60 } // 8


function solucao(pedido) {
    //seu codigo aqui
    let qtddDoces = 0;
    if (pedido.brigadeiro) {
        qtddDoces += pedido.brigadeiro
    }
    if (pedido.cajuzinho) {
        qtddDoces += pedido.cajuzinho
    }
    if (pedido.beijinho) {
        qtddDoces += pedido.beijinho
    }
    const saquinhos = qtddDoces / 15
    return console.log(Math.ceil(saquinhos))
}


solucao(pedido) // 8
