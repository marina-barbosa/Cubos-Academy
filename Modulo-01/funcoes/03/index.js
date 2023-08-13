const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`)
        console.log(`Total de Itens: ${this.calcularTotalDeItens()} ${this.calcularTotalDeItens() <= 1 ? "item" : "itens"}`)
        console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar() / 100).toFixed(2)}`)
    },
    addProduto: function (produto) {
        let index
        let existeItemIgual = false
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].nome == produto.nome) {
                existeItemIgual = true
                index = i
            }
        }
        if (existeItemIgual) {
            this.produtos[index].qtd += produto.qtd
        } else {
            this.produtos.push(produto)
        }
    },
    imprimirDetalhes: function () {
        console.log(`\nCliente: ${this.nomeDoCliente}\n`)
        for (let item of this.produtos) {
            console.log(`Item ${item.id} - ${item.nome} - ${item.qtd} und - R$ ${(item.precoUnit * item.qtd / 100).toFixed(2)}`)
        }
        console.log(`\nTotal de Itens: ${this.calcularTotalDeItens()} ${this.calcularTotalDeItens() <= 1 ? "item" : "itens"}`)
        console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar() / 100).toFixed(2)}`)
    },
    calcularTotalDeItens: function () {
        let totalDeItens = 0
        for (let item of this.produtos) {
            totalDeItens += item.qtd
        }
        return totalDeItens
    },
    calcularTotalAPagar: function () {
        let totalAPagar = 0
        for (let item of this.produtos) {
            totalAPagar += item.precoUnit * item.qtd
        }
        return totalAPagar
    },
    calcularDesconto: function () {

        let itemMaisBarato = 0
        if (this.calcularTotalDeItens() > 4) {
            itemMaisBarato = this.produtos[0].precoUnit
            for (let item of this.produtos) {
                if (item.precoUnit < this.produtos[0].precoUnit) {
                    itemMaisBarato = item.precoUnit
                }
            }
        }

        let descontoAcimaDe100Reais = 0
        if (this.calcularTotalAPagar() > 10000) {
            descontoAcimaDe100Reais = this.calcularTotalAPagar() / 10
        }

        if (descontoAcimaDe100Reais > itemMaisBarato) {
            return descontoAcimaDe100Reais
        } else {
            return itemMaisBarato
        }
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);


carrinho.imprimirDetalhes();
let desconto = carrinho.calcularDesconto()
console.log(`\nDesconto: R$ ${(desconto / 100).toFixed(2)}\n`)

//resolução do professor
// const carrinho = {
//     nomeDoCliente: "Guido Bernal",
//     produtos: [
//         {
//             id: 1,
//             nome: "Camisa",
//             qtd: 3,
//             precoUnit: 3000
//         },
//         {
//             id: 2,
//             nome: "Bermuda",
//             qtd: 2,
//             precoUnit: 5000
//         }
//     ],
//     imprimirResumo: function () {
//         let precoTotalItensTexto = `${this.calcularTotalAPagar() / 100}`;

//         console.log(`Cliente: ${this.nomeDoCliente}`);
//         console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
//         console.log(`Total a pagar: R$ ${precoTotalItensTexto}`);
//     },
//     addProduto: function (produto) {
//         let indiceProdutoExistente = -1;

//         for (let i = 0; i < this.produtos.length; i++) {
//             if (this.produtos[i].id === produto.id) {
//                 indiceProdutoExistente = i;
//                 break;
//             }
//         }

//         if (indiceProdutoExistente === -1) {
//             this.produtos[this.produtos.length] = produto;
//         } else {
//             this.produtos[indiceProdutoExistente].qtd += produto.qtd;
//         }
//     },
//     imprimirDetalhes: function () {
//         console.log(`Cliente: ${this.nomeDoCliente}`);
//         console.log('');

//         let qtdTotalItens = this.calcularTotalDeItens();
//         let precoTotalItens = this.calcularTotalAPagar();

//         for (let i = 0; i < this.produtos.length; i++) {
//             let produto = this.produtos[i];

//             console.log(`Item ${i + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${produto.precoUnit / 100}`);
//         }

//         let precoTotalItensTexto = `${precoTotalItens / 100}`;

//         console.log('');
//         console.log(`Total de itens: ${qtdTotalItens} itens`);
//         console.log(`Total a pagar: R$ ${precoTotalItensTexto}`);
//     },
//     calcularTotalDeItens: function () {
//         let qtdTotalItens = 0;

//         for (const produto of this.produtos) {
//             qtdTotalItens += produto.qtd;
//         }

//         return qtdTotalItens;
//     },
//     calcularTotalAPagar: function () {
//         let precoTotalItens = 0;

//         for (const produto of this.produtos) {
//             precoTotalItens += produto.qtd * produto.precoUnit;
//         }

//         return precoTotalItens;
//     },
//     calcularDesconto: function () {
//         let qtdTotalItens = this.calcularTotalDeItens();
//         let precoTotalItens = this.calcularTotalAPagar();

//         let descontoPorItens = 0;
//         let descontoPorTotal = 0;

//         if (qtdTotalItens > 4) {
//             descontoPorItens = this.produtos[0].precoUnit;
//             for (let i = 1; i < this.produtos.length; i++) {
//                 if (this.produtos[i].precoUnit < descontoPorItens) {
//                     descontoPorItens = this.produtos[i].precoUnit;
//                 }
//             }
//         }

//         if (precoTotalItens > 10000) {
//             descontoPorTotal = precoTotalItens * 0.1;
//         }

//         return descontoPorItens > descontoPorTotal ? descontoPorItens : descontoPorTotal;
//     }
// }

// console.log(carrinho.calcularDesconto() / 100);

// const novaBermuda = {
//     id: 2,
//     nome: "Bermuda",
//     qtd: 3,
//     precoUnit: 5000
// }

// carrinho.addProduto(novaBermuda);

// const novoTenis = {
//     id: 3,
//     nome: "Tenis",
//     qtd: 1,
//     precoUnit: 10000
// }

// carrinho.addProduto(novoTenis);

// console.log(carrinho.calcularDesconto() / 100);

// carrinho.imprimirResumo();
// carrinho.imprimirDetalhes();
