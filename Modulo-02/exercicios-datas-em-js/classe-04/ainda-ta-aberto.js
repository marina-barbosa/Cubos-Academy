

function taAberto(momento) {
    const abre = new Date(+momento);
    const fecha = new Date(+momento);
    abre.setHours(8, 0, 0, 0);
    fecha.setHours(18, 0, 0, 0);

    return +momento >= +abre &&
        +momento <= +fecha &&
        momento.getDay() >= 1 &&
        momento.getDay() <= 5;
}

console.log(taAberto(new Date(2021, 3, 25, 12))); // domingo false
console.log(taAberto(new Date(2021, 3, 26, 12))); // segunda true
console.log(taAberto(new Date(2021, 3, 26, 7, 59))); //muito cedo false

