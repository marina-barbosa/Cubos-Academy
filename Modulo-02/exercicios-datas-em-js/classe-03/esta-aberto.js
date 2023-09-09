

function taAberto(momentoClienteChegou) {
    //set dia
    const abertura = new Date(+momentoClienteChegou);
    const fechamento = new Date(+momentoClienteChegou);
    //set hora
    abertura.setHours(8, 0, 0, 0);
    fechamento.setHours(18, 0, 0, 0);

    //compara hora pra ver se esta aberto
    return +momentoClienteChegou >= +abertura &&
        +momentoClienteChegou <= +fechamento;
}

console.log(taAberto(new Date(2015, 1, 1, 12))); // deve retornar true

console.log(taAberto(new Date(2015, 1, 1, 2))); // deve retornar false

console.log(taAberto(new Date())); // deve retornar false