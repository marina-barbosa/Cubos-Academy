const { transportador } = require('../services/nodemailer.js');

const usuarioNoBanco = {
    nome: 'Marina Destino',
    email: 'marina-destino@gmail.com',
    senha: '123abc'
}


const login = async (req, res) => {
    const { email, senha } = req.body;

    if (usuarioNoBanco.email != email || usuarioNoBanco.senha != senha) {
        return res.status(400).json({ mensagem: 'E-mail ou senha invalida.' });
    }

    transportador.sendMail({
        from: process.env.EMAIL_FROM,
        to: usuarioNoBanco.email,
        subject: 'Verificação de Integração',
        text: `        
        Olá,

        Estamos entrando em contato para confirmar um acesso recente à sua conta.
        
        Se você realizou este login, pode ignorar esta mensagem.
        
        Se você não reconhece esta atividade, recomendamos que siga os passos abaixo:
        
        Altere sua senha imediatamente.
        Verifique e atualize suas configurações de segurança.
        Fique atento a qualquer atividade suspeita.
        Estamos aqui para ajudar se precisar de alguma assistência.
        
        Atenciosamente,
        
        [Seu Nome]
        `
    });


    return res.json({ mensagem: 'Login efetuado com sucesso!' });
}


module.exports = login;