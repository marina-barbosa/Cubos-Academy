// https://date-fns.org/docs/Getting-Started
// npm install date-fns-tz

const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz');

const agora = new Date();

// CONVERTER PARA UTC
const dataUtc = zonedTimeToUtc(agora, 'America/Sao_Paulo');
console.log(dataUtc);



// CONVERTER DE UTC PARA OUTRO FUSO HORARIO
const dataNoFusoHorario = utcToZonedTime(dataUtc, 'America/Sao_Paulo'); // <- errado, precisa formatar

// FORMATAR PARA FICAR CERTO
const formato = 'dd/MM/yyyy HH:mm:ss.SSS \'GMT\' XXX (z)';
const resultado = format(dataNoFusoHorario, formato, { timeZone: 'America/Sao_Paulo' });


console.log(resultado);




