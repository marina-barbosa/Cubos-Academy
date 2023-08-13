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

for (let user of usuarios) {
    if (user.idade > 17) {
        user.maior_idade = true
    } else {
        user.maior_idade = false
    }
}

console.log(usuarios)