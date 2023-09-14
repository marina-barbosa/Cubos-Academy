const express = require('express')
const {
	cadastrarPokemon,
	atualizarApelidoPokemon,
	listarPokemons,
	detalharPokemon,
	excluirPokemon,
} = require('./controladores/pokemons')
const { cadastrarUsuario, login } = require('./controladores/usuarios')
const verificaLogin = require('./intermediarios/verificaLogin')

const rotas = express()

rotas.post('/usuario', cadastrarUsuario)
rotas.post('/login', login)

rotas.use(verificaLogin)

rotas.post('/pokemon', cadastrarPokemon)
rotas.patch('/pokemon/:id', atualizarApelidoPokemon)
rotas.get('/pokemon', listarPokemons)
rotas.get('/pokemon/:id', detalharPokemon)
rotas.delete('/pokemon/:id', excluirPokemon)

module.exports = rotas
