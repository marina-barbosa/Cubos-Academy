const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 30_000_00; //emCentavos

//seu código aqui

if (aposentada || portadoraDeDoenca) {
    console.log("isenta")
} else if (totalDeRendimentos <= 28_559_70) {
    console.log("vaza leao")
} else {
    console.log("pega leao")
}



