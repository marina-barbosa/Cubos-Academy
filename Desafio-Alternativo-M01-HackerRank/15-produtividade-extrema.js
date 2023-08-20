const produtividadeDosFuncionarios = [100, 4, 50, 22, 45.5, 29] // 3



function solucao(produtividadeDosFuncionarios) {
    //seu codigo aqui
    let minimo = produtividadeDosFuncionarios[0];
    let contador = 0;
    for (let produtividade of produtividadeDosFuncionarios) {
        if (produtividade > minimo) {
            minimo = produtividade
        }
    }
    minimo = minimo * 0.3
    for (let produtividade of produtividadeDosFuncionarios) {
        if (produtividade <= minimo) {
            contador++
        }
    }
    return console.log(contador)
}


solucao(produtividadeDosFuncionarios)