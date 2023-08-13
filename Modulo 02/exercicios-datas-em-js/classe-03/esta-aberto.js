

function taAberto(momento) {
    const abre = new Date(2015, 1, 1, 8);
    const fecha = new Date(2015, 1, 1, 18, 1);

    return console.log(+momento >= +abre && +momento < +fecha)
}

taAberto(new Date(2015, 1, 1, 12)); // deve retornar true

taAberto(new Date(2015, 1, 1, 2)); // deve retornar false

taAberto(new Date()); // deve retornar false