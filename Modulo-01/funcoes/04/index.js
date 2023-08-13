const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor
        console.log(`Deposito de R$ ${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`)
        this.historicos.push(
            {
                tipo: "Depósito",
                valor: valor
            }
        )
    },
    sacar: function (valor) {
        if (valor < this.saldo) {
            this.saldo -= valor
            console.log(`Saque de R$ ${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`)
            this.historicos.push(
                {
                    tipo: "Saque",
                    valor: valor
                }
            )
        } else {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}.`)
        }

    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$ ${(this.saldo / 100).toFixed(2)}\nHistórico:`)
        for (let log of this.historicos) {
            console.log(`${log.tipo} de R$ ${(log.valor / 100).toFixed(2)}`)
        }
    },
    teste: function () {
        let msg = `Extrato de ${this.nome} - Saldo: R$ ${(this.saldo / 100).toFixed(2)}\nHistórico:\n`
        for (let log of this.historicos) {
            msg += `${log.tipo} de R$ ${(log.valor / 100).toFixed(2)}\n`
        }
        return msg
    }

}

contaBancaria.depositar(10000)
//console.log(contaBancaria.historicos)
contaBancaria.sacar(50000)
contaBancaria.sacar(5000)
//console.log(contaBancaria.historicos)
//contaBancaria.extrato()
console.log(contaBancaria.teste())