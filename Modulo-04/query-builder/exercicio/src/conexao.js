

const knex = require('knex')({
    client: 'pg',
    connection: {
        port: 5432,
        host: 'localhost',
        user: 'postgres',
        password: '1425',
        database: 'market_cubos'
    }
});

module.exports = knex;
