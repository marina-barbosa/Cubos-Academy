const express = require('express');
const pool = require('./conexao.js');

const app = express();

app.use(express.json());

app.post('/autor', async (req, res) => {
    const { nome, idade } = req.body;
    if (!nome) {
        return res.status(400).json({ mensagem: 'o campo nome é obrigatório.' });
    }

    try {

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
    const id = Number(req.params.id);

    try {
        const query = `
            select a.id, a.nome, a.idade, l.id as livro_id, l.nome as livro_nome,
            l.genero as livro_genero, l.editora as livro_editora, 
            l.data_de_publicacao as livro_data_publicacao 
            from autores a left join livros l 
            on a.id = l.id_autor where a.id = $1
        `
        const { rowCount, rows } = await pool.query(query, [id])

        if (rowCount === 0) {
            return res.status(404).json({ mensagem: 'O autor não existe' })
        }

        const livros = rows.map(livro => {
            return {
                id: livro.livro_id,
                nome: livro.livro_nome,
                genero: livro.livro_genero,
                editora: livro.livro_editora,
                data_de_publicacao: livro.livro_data_publicacao,
            }
        })

        const autor = {
            id: rows[0].id,
            nome: rows[0].nome,
            idade: rows[0].idade,
            livros,
        }


        return res.json(autor)
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
});

app.post('/autor/:id/livro', async (req, res) => {
    const id = Number(req.params.id);
    const { nome, genero, editora, data_de_publicacao } = req.body;
    if (!nome) {
        return res.status(400).json({ mensagem: 'o campo nome é obrigatório.' });
    }

    try {

        const { rowCount, rows } = await pool.query('select * from autores where id = $1', [id]);

        if (rowCount === 0) {
            return res.status(404).json({ mensagem: 'O autor não existe' });
        };

        const autor = rows[0];

        const query = 'insert into livros(nome, genero, editora, data_de_publicacao, id_autor) values ($1, $2, $3, $4, $5) returning *'

        const params = [nome, genero, editora, data_de_publicacao, id];

        const livro = await pool.query(query, params);
        return res.status(201).json(livro.rows[0]);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
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