// clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }


/*
function addProdutoNoCarrinho(un, produto, usuario) {
    usuario.carrinho.push({ item: produto, quantidade: un })
}
*/

function addProdutoNoCarrinho(un, produto, usuario) {
    let qtddAtual
    for (let i = 0; i < usuario.carrinho.length; i++) {
        qtddAtual = usuario.carrinho[i].quantidade;
        if (usuario.carrinho[i].item == produto) {
            usuario.carrinho.splice(i, 1)
            un += qtddAtual
        }
    }
    usuario.carrinho.push({ item: produto, quantidade: un }) // <<
}



addProdutoNoCarrinho(1, tv, jose)
addProdutoNoCarrinho(2, caboUsb, jose)
addProdutoNoCarrinho(1, webcam, jose)
addProdutoNoCarrinho(5, webcam, jose)
addProdutoNoCarrinho(-2, webcam, jose)
//jose.carrinho.splice(2, 1)


addProdutoNoCarrinho(2, notebook, carlos)

addProdutoNoCarrinho(1, teclado, patricia)
addProdutoNoCarrinho(2, caboUsb, patricia)
addProdutoNoCarrinho(1, carregador, patricia)
addProdutoNoCarrinho(1, mouse, patricia)
addProdutoNoCarrinho(1, monitor, patricia)

addProdutoNoCarrinho(5, webcam, renato)

addProdutoNoCarrinho(1, webcam, roberto)
addProdutoNoCarrinho(2, caboUsb, roberto)
addProdutoNoCarrinho(1, monitor, roberto)

console.log(jose.nome, jose.carrinho)

console.log(carlos.nome, carlos.carrinho)

console.log(patricia.nome, patricia.carrinho)

console.log(renato.nome, renato.carrinho)

console.log(roberto.nome, roberto.carrinho)






