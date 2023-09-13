const bcrypt = require('bcrypt');
const pool = require('../conexao');
const jwt = require('jsonwebtoken');
const senhaJwt = require('../senhaJwt');

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const emailExiste = await pool.query(`select * from usuarios where email = $1`, [email]);

        if (emailExiste.rowCount > 0) {
            return res.status(400).json({ mensagem: 'Email já existe' })
        }
        // metodo hash cria criptografia com base de uma senha
        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const query = `
            insert into usuarios (nome, email, senha)
            values ($1, $2, $3) returning *
        `

        const { rows } = await pool.query(query, [nome, email, senhaCriptografada]);

        const { senha: _, ...usuario } = rows[0];

        return res.status(201).json(usuario);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}
//
//

const login = async (req, res) => {
    const { email, senha } = req.body;
    //TODO: verificar sem email e senha foram passados
    try {
        const { rowCount, rows } = await pool.query(
            `select * from usuarios where email = $1`,
            [email]
        );

        if (rowCount === 0) {
            return res.status(400).json({ mensagem: 'Email ou senha inválida.' });
        }

        const { senha: senhaUsuario, ...usuario } = rows[0]
        //metodo compare() compara a senha com a hash
        const senhaCorreta = await bcrypt.compare(senha, senhaUsuario);

        if (!senhaCorreta) {
            return res.status(400).json({ mensagem: 'Email ou senha inválida.' });
        }

        const token = jwt.sign({ id: usuario.id }, senhaJwt, { expiresIn: '8h' })

        return res.json({
            usuario,
            token,
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor.' });
    }
}





module.exports = {
    cadastrarUsuario,
    login
};