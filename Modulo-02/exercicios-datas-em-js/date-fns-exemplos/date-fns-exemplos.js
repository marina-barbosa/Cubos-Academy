// npm init -y
// npm install date-fns --save
import { format, parse, add, addBusinessDays, set, differenceInDays } from 'date-fns';



// format: Converte uma data em uma string formatada.
const dateFormatada = format(new Date('2023-08-13T12:00:00'), 'dd/MM/yyyy HH:mm:ss');
console.log(dateFormatada) // Resultado: "13/08/2023 12:00:00"



// parse: Converte uma string formatada em um objeto de data.
const parsedDate = parse('13/08/2023 12:00:00', 'dd/MM/yyyy HH:mm:ss', new Date());
console.log(parsedDate); // Resultado: Sat Aug 13 2023 12:00:00 GMT+0000 
// (UTC - Coordinated Universal Time)



// add: Adiciona uma quantidade específica de tempo a uma data.
let novoDate = add(new Date('2023-08-13T12:00:00'), { days: 5 });
console.log(novoDate); // Resultado: "2023-08-18T12:00:00"



// addBusinessDays: Adiciona uma quantidade específica de dias úteis (ignorando finais de semana) a uma data.
novoDate = addBusinessDays(new Date('2023-08-13T12:00:00'), 3);
console.log(novoDate); // Resultado: "2023-08-16T12:00:00"



// set: Define uma parte específica de uma data para um valor específico.
novoDate = set(new Date('2023-08-13T12:00:00'), { hours: 9 });
console.log(novoDate); // Resultado: "2023-08-13T09:00:00"



// difference: Calcula a diferença entre duas datas em unidades específicas.
const diffInDays = differenceInDays(new Date('2023-08-18T00:00:00'), new Date('2023-08-13T00:00:00'));
console.log(diffInDays); // Resultado: 5



// isSame, isAfter, isBefore: Verifica se uma data é igual, posterior ou anterior a outra data, respectivamente.
import { isSameDay, isAfter, isBefore } from 'date-fns';

const date1 = new Date('2023-08-13T12:00:00');
const date2 = new Date('2023-08-15T12:00:00');

const sameDay = isSameDay(date1, date2); // false
const after = isAfter(date2, date1);     // true
const before = isBefore(date1, date2);   // true
console.log(sameDay); // false
console.log(after); // true
console.log(before); // true



// startOf, endOf: Define uma data para o início ou o fim de uma unidade de tempo específica.
import { startOfDay, endOfMonth } from 'date-fns';

const startOfDayDate = startOfDay(new Date('2023-08-13T12:00:00'));
console.log(startOfDayDate); // Resultado: "2023-08-13T00:00:00"

const endOfMonthDate = endOfMonth(new Date('2023-08-13T12:00:00'));
console.log(endOfMonthDate); // Resultado: "2023-08-31T23:59:59.999"




