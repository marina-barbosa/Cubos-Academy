const transportador = require('../conexoes/nodemailer')
const knex = require('../conexoes/postgres')
const compiladorHtml = require('../utils/compiladorHtml')

const cadastrarEmail = async (req, res) => {
	const { nome, email } = req.body

	try {
		await knex('emails').insert({
			nome,
			email,
		})

		return res.status(201).json({ mensagem: 'Cadastro efetuado com sucesso!' })
	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
	}
}

const enviarNewsletter = async (req, res) => {
	const { texto } = req.body

	try {
		const emails = await knex('emails')

		for (const email of emails) {
			const htmlNewsletter = await compiladorHtml(
				'./src/templates/newsletter.html',
				{
					usuario: email.nome,
					texto: texto,
				}
			)

			transportador.sendMail({
				from: 'Guido Cerqueira <euguidocerqueira@gmail.com>',
				to: `${email.nome} <${email.email}>`,
				subject: 'Newsletter Cubos Academy',
				html: htmlNewsletter,
			})
		}

		return res.status(204).send()
	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
	}
}

module.exports = {
	cadastrarEmail,
	enviarNewsletter,
}
