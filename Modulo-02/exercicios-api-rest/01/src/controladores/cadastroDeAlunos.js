let { alunos } = require('../bancodedados/alunos');

const get = (req, res) => {
    return res.send(alunos).status(200);
}


const getById = (req, res) => {
    const id = Number(req.params.id)

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'O ID deve ser um numero valido' });
    }

    const aluno = alunos.find(elemento => elemento.id == id);

    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno nao encontrado.' });
    }

    return res.json(aluno).status(200);
};


const adicionarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;

    if (!nome || nome.trim() == "") {
        return res.status(400).json({ mensagem: 'O nome é obrigatório' });
    }

    if (!sobrenome || sobrenome.trim() == "") {
        return res.status(400).json({ mensagem: 'O sobrenome é obrigatório' });
    }

    if (!idade || idade < 18) {
        return res.status(400).json({ mensagem: 'Idade nao informada ou o aluno é menor de 18 anos.' });
    }

    if (!curso || curso.trim() == "") {
        return res.status(400).json({ mensagem: 'O curso é obrigatório' });
    }

    const novoAluno = {
        id: alunos.length + 1,
        nome,
        sobrenome,
        idade,
        curso
    }

    alunos.push(novoAluno);

    return res.status(201).json(alunos);
}




const deletarAluno = (req, res) => {
    const id = Number(req.params.id)

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'O ID deve ser um numero valido' });
    }

    const indice = alunos.findIndex((aluno) => {
        return aluno.id == id;
    });

    if (indice !== -1) {
        const alunoExcluido = alunos.splice(indice, 1);
        return res.send(alunoExcluido).status(204);
    } else {
        return res.status(404).send("Aluno não encontrado");
    }
}

const substituirAluno = (req, res) => {
    const id = Number(req.params.id)
    const { nome, sobrenome, idade, curso } = req.body;

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'O ID deve ser um numero valido' });
    }

    const aluno = alunos.find(elemento => elemento.id == id);

    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno nao encontrado.' });
    }

    if (!nome || nome.trim() == "") {
        return res.status(400).json({ mensagem: 'O nome é obrigatório' });
    }

    if (!sobrenome || sobrenome.trim() == "") {
        return res.status(400).json({ mensagem: 'O sobrenome é obrigatório' });
    }

    if (!idade || idade < 18) {
        return res.status(400).json({ mensagem: 'Idade nao informada ou o aluno é menor de 18 anos.' });
    }

    if (!curso || curso.trim() == "") {
        return res.status(400).json({ mensagem: 'O curso é obrigatório' });
    }

    aluno.nome = nome;
    aluno.sobrenome = sobrenome;
    aluno.idade = idade;
    aluno.curso = curso;

    return res.json(aluno);
}

const atualizarAluno = (req, res) => {
    const id = Number(req.params.id)
    const { nome, sobrenome, idade, curso } = req.body;

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: 'O ID deve ser um numero valido' });
    }

    const aluno = alunos.find(elemento => elemento.id == id);

    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno nao encontrado.' });
    }

    if (nome) {
        aluno.nome = nome;
    }

    if (sobrenome) {
        aluno.sobrenome = sobrenome;
    }

    if (idade) {
        aluno.idade = idade;
    }

    if (curso) {
        aluno.curso = curso;
    }

    return res.json(aluno);
}








module.exports = {
    get,
    getById,
    adicionarAluno,
    deletarAluno,
    substituirAluno,
    atualizarAluno
}

