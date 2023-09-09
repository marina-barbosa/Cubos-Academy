
function taValendoAPromocao(inicioDaPromocao, solicitacaoDeUso) {

    let finalDaPromocao = new Date(inicioDaPromocao);
    finalDaPromocao = finalDaPromocao.setDate(finalDaPromocao.getDate() + 30);

    return +solicitacaoDeUso > +inicioDaPromocao &&
        +solicitacaoDeUso < +finalDaPromocao

}

const inicioDaPromocao = new Date(2021, 3, 27, 18, 30);

//const solicitacaoDeUso = new Date(2021,4,27, 18,29,59,999);
const solicitacaoDeUso = new Date(2021, 4, 27, 18, 30);

console.log(taValendoAPromocao(inicioDaPromocao, solicitacaoDeUso));
