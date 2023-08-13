const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let user of usuarios) {
    if (user.pets.length == 0) {
        console.log(`Sou ${user.nome} e não tenho pets`)
    } else if (user.pets.length == 1) {
        console.log(`Sou ${user.nome} e tenho 1 pet`)
    } else {
        console.log(`Sou ${user.nome} e tenho ${user.pets.length} pets`)
    }
}








/*
`Sou João e não tenho pets`
`Sou Ana e tenho 2 pets`
`Sou Beatriz e tenho 1 pet`
`Sou Carlos e tenho 3 pets`
`Sou Antônio e tenho 1 pet`
*/