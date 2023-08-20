const express = require('express');
const { pokemons, pokemon } = require('./controladores/pokemons.js');
const rotas = express();

rotas.get('/pokemon', pokemons);
rotas.get('/pokemon/:idOrName', pokemon);

module.exports = rotas;