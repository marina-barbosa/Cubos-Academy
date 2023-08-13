const carros = [
    {
        marca: "Volkswagen",
        modelo: "Gol",
        ano: 2022,
        cor: "vermelho",
        quantidade_portas: 4,
        automatico: false
    }
];


carros.push(
    {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2023,
        cor: "branco",
        quantidade_portas: 4,
        automatico: true
    }
)

carros.push(
    {
        marca: "Chevrolet",
        modelo: "Onix",
        ano: 2021,
        cor: "preto",
        quantidade_portas: 4,
        automatico: true
    },
)

let maisUmCarro = {
    marca: "Ford",
    modelo: "Mustang",
    ano: 2023,
    cor: "amarelo",
    quantidade_portas: 2,
    automatico: true
}

carros.push(maisUmCarro)

console.log(carros)
