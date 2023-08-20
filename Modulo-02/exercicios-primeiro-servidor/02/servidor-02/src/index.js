const express = require('express')
const servidor = express()

const interval = 1000
let minuto = 0
let segundo = 0
let meuInterval

function iniciarCronometro() {
    meuInterval = setInterval(() => {
        segundo++
        if (segundo == 60) {
            minuto++
            segundo = 0
        }
        console.log(`Tempo atual do cronômetro: ${minuto.toString().padStart(2, '0')} minutos e ${segundo.toString().padStart(2, '0')} segundos`)
    }, interval)
}

servidor.get('/', (req, res) => {
    res.send(`Tempo atual do cronômetro: ${minuto.toString().padStart(2, '0')} minutos e ${segundo.toString().padStart(2, '0')} segundos`);
})

servidor.get('/iniciar', (req, res) => {
    iniciarCronometro()
    res.send(`Cronômetro iniciado!`)
})

servidor.get('/pausar', (req, res) => {
    clearInterval(meuInterval)
    res.send(`Cronômetro pausado!`)
})

servidor.get('/continuar', (req, res) => {
    iniciarCronometro()
    res.send(`Cronômetro continuando!`)
})

servidor.get('/zerar', (req, res) => {
    minuto = 0
    segundo = 0
    res.send(`Cronômetro zerado!`)
})

servidor.listen(8000, () => {
    console.log('Servidor rodando em http://localhost:8000')
})