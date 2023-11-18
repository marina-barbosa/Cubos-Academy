const knex = require('knex')({
	client: 'pg',
	connection: {
		host: 'localhost',
		port: 5432,
		user: 'postgres',
		password: 'postgres',
		database: 'newsletter',
	},
})

module.exports = knex
