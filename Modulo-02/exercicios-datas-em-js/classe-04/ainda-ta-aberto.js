

function taAberto(momento) {
    const abre = new Date(2021, 1, 1, 8);
    const fecha = new Date(2021, 1, 1, 18, 1);

    return console.log(+momento >= +abre && +momento < +fecha)
}


taAberto(newDate(2021, 3, 25, 12)); // deve retornar false, pois é um domingo

taAberto(newDate(2021, 3, 26, 12)); // deve retornar true, pois é uma segunda

taAberto(newDate(2021, 3, 26, 7, 59)); // deve retornar false, pois é muito cedo (7h59)