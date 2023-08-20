const livros = require('../bancodedados/livros.js');

let proximoId = 3;


const listarLivros = (req, res) => {
    return res.json(livros)
}



const consultarLivro = (req, res) => {
    const id = parseInt(req.params.id);


    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }

    const livro = livros.find((item) => {
        return item.id == id
    })

    if (!livro) {
        return res.status(404).json({ "mensagem": "Não existe livro para o ID informado." })
    }

    return res.json(livro)
}



const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo || titulo == "") {
        return res.status(400).json({ mensagem: 'O titulo é obrigatório' });
    }

    if (!autor || autor == "") {
        return res.status(400).json({ mensagem: 'O autor é obrigatório' });
    }
    if (!ano || ano == "") {
        return res.status(400).json({ mensagem: 'O ano é obrigatório' });
    }
    if (!numPaginas || numPaginas == "") {
        return res.status(400).json({ mensagem: 'O numero de paginas é obrigatório' });
    }

    const novoLivro = {
        id: proximoId,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(novoLivro);
    proximoId++
    return res.status(201).json(novoLivro);
}

const substituirLivro = (req, res) => {
    const id = parseInt(req.params.id)
    const { titulo, autor, ano, numPaginas } = req.body;

    const livro = livros.find((item) => {
        return item.id == Number(id)
    })

    if (isNaN(id)) {
        res.status(400).json({ "mensagem": "O valor do parâmetro ID da URL não é um número válido." })
    } else if (!livro) {
        return res.status(404).json({ "mensagem": "Não existe livro a ser substituído para o ID informado." })
    } else if (!titulo || titulo == "") {
        return res.status(400).json({ mensagem: 'O titulo é obrigatório' });
    } else if (!autor || autor == "") {
        return res.status(400).json({ mensagem: 'O autor é obrigatório' });
    } else if (!ano || ano == "") {
        return res.status(400).json({ mensagem: 'O ano é obrigatório' });
    } else if (!numPaginas || numPaginas == "") {
        return res.status(400).json({ mensagem: 'O numero de paginas é obrigatório' });
    } else {
        livro.titulo = titulo;
        livro.autor = autor;
        livro.ano = ano;
        livro.numPaginas = numPaginas;
        return res.json({ "mensagem": "Livro substituído." }).status(204); // <<== ordem importando
    }
}




const editarLivro = (req, res) => {
    const id = parseInt(req.params.id);
    const { titulo, autor, ano, numPaginas } = req.body;

    const livro = livros.find((item) => {
        return item.id == id
    })

    if (isNaN(id)) {
        res.status(400).json({ "mensagem": "O valor do parâmetro ID da URL não é um número válido." })
    }

    if (!livro) {
        return res.status(404).json({ "mensagem": "Não existe livro a ser alterado para o ID informado." })
    }

    if (titulo) {
        livro.titulo = titulo;
    }

    if (autor) {
        livro.autor = autor;
    }

    if (ano) {
        livro.ano = ano;
    }

    if (numPaginas) {
        livro.numPaginas = numPaginas;
    }

    return res.json({ "mensagem": "Livro alterado." })

}

const removerLivro = (req, res) => {
    const id = parseInt(req.params.id);


    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }

    const indice = livros.findIndex((item) => {
        return item.id == id;
    });

    if (indice == -1) {
        return res.status(404).json({ "mensagem": "Não existe livro a ser removido para o ID informado." })

    } else {
        const livroExcluido = livros.splice(indice, 1);
        return res.json({ mensagem: "Livro removido.", livroExcluido }).status(204);
    }

}


module.exports = {
    listarLivros,
    consultarLivro,
    adicionarLivro,
    substituirLivro,
    editarLivro,
    removerLivro
}