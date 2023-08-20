const { listarPokemons, detalharPokemon } = require('utils-playground');

const pokemons = async (req, res) => {
    const { pagina } = req.query;

    const listaPokemons = await listarPokemons(pagina ?? 1);

    return res.json(listaPokemons);
}

const pokemon = async (req, res) => {
    const { idOrName } = req.params;

    const pokemonEcontrado = await detalharPokemon(idOrName);

    const { id, name, height, weight, base_experience, forms, abilities, species } = pokemonEcontrado;

    return res.json({ id, name, height, weight, base_experience, forms, abilities, species });
}

module.exports = {
    pokemons,
    pokemon
}