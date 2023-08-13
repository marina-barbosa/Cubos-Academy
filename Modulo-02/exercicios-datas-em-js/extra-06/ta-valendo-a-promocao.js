
import { startOfDay, endOfDay } from 'date-fns';


const diaDaSolicitacao = new Date();

function taValendoAPromocao(diaDaSolicitacao) {
    const diaPromocao = new Date(2023, 7, 14);
    return (+diaDaSolicitacao <= startOfDay(+diaPromocao) && +diaDaSolicitacao <= endOfDay(+diaPromocao))
}

const startOfDayDate = startOfDay(new Date('2023-08-13T12:00:00'));


console.log(taValendoAPromocao(diaDaSolicitacao))