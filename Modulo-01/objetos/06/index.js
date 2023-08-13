const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

let jovens = []
let adultos = []

for (let user of usuarios) {
    if (user.idade < 18) {

        jovens.push(user)
    } else {

        adultos.push(user)
    }
}


console.log(jovens)
console.log(adultos)