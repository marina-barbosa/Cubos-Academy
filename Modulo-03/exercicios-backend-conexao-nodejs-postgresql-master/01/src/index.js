const express = require('express');
const pool = require('./conexao.js');

const app = express();

app.use(express.json());

app.post('/autor', async (req, res) => {
    try {
        const { nome, idade } = req.body;
        if (!nome) {
            return res.json('{"mensagem":"o campo nome é obrigatório."');
        }

        const params = [nome, idade];

        const query = 'insert into autores(nome, idade) values ($1, $2);'
        await pool.query(query, params);
        const resultado = await pool.query('select * from autores where nome ilike $1 and idade = $2', params)
        return res.json(resultado.rows);
    } catch (error) {
        console.error(error.message);
    }
});

app.get('/autor/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const params = [id];
        //const query = 'select * from autores where id = $1;'

        const query = 'select * from autores join livros on livros.id_autor = autores.id where autores.id = $1;'

        const resultado = await pool.query(query, params)
        if (resultado.rows.length == 0) {
            return res.json('{"mensagem":"autor não encontrado"');
        }
        return res.json(resultado.rows);
    } catch (error) {
        console.error(error.message);
    }
});

app.post('/autor/:id/livro', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { nome, genero, editora, data_de_publicacao } = req.body;
        if (!nome) {
            return res.json('{"mensagem":"o campo nome é obrigatório."');
        }

        const params = [nome, genero, editora, data_de_publicacao, id];
        const query = 'insert into livros(nome, genero, editora, data_de_publicacao, id_autor) values ($1, $2, $3, $4, $5);'
        await pool.query(query, params);
        console.log(query)
        console.log(params)

        const resultado = await pool.query('select * from livros order by id desc limit 1');
        console.log(resultado.rows)
        return res.json(resultado.rows);
    } catch (error) {
        console.error(error.message);
    }
});

app.get('/livros', async (req, res) => {
    try {
        const resultado = await pool.query('select * from livros join autores on autores.id = livros.id_autor;');
        return res.json(resultado.rows);
    } catch (error) {
        console.error(error.message);
    }
});

app.listen(3000, () => {
    console.log('Server ON.');
});