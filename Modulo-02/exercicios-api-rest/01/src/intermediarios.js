const cursos = require('./bancodedados/cursos.js');
const validaSenha = (req, res, next) => {
    const { senha } = req.query;

    if (senha !== 'cubos123') {
        return res.status(401).json({ mensagem: 'Senha incorreta' });
    }

    next();
}

const validaCurso = (req, res, next) => {
    const { curso } = req.body;

    const valido = cursos.find((item) => {
        return item == curso;
    });

    if (!valido) {
        return res.status(400).json({ mensagem: 'Curso invalido' });
    }
    next();
}

module.exports = { validaSenha, validaCurso };