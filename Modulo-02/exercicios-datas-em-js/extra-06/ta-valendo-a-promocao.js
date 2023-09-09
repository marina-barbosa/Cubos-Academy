
function taValendoAPromocao(inicioDaPromocao, solicitacaoDeUso) {

    let finalDaPromocao = new Date(inicioDaPromocao);
    finalDaPromocao = finalDaPromocao.setHours(finalDaPromocao.getHours() + 24);

    return +solicitacaoDeUso > +inicioDaPromocao &&
        +solicitacaoDeUso < +finalDaPromocao

}

const inicioDaPromocao = new Date(2021, 3, 27, 18, 30);

const solicitacaoDeUso = new Date(2021, 3, 28, 18, 29, 59, 999);

console.log(taValendoAPromocao(inicioDaPromocao, solicitacaoDeUso));
