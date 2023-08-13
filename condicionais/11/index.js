//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 3_000_00;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 10_000_00;

const valorTotalDoCurso = 18_000_00

let parcela


if (mesesDecorridos > 60) {
    console.log("Tempo decorrido de contrato maior que 60 meses, o aluno não deve mais nada.")
} else if (totalJaPagoPeloAluno >= valorTotalDoCurso) {
    console.log("Já quitou a dívida de 18.000,00.")
} else if (rendaMensalEmCentavos >= 200000 && totalJaPagoPeloAluno < valorTotalDoCurso) {
    parcela = rendaMensalEmCentavos / 10000 * 18
    console.log(`O valor da parcela desse mês é R$ ${parcela.toFixed(2)} reais`)
} else if (rendaMensalEmCentavos < 200000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.")
} else {
    console.log("erro")
}