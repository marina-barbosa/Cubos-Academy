const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (!carro.ligado) {
            carro.ligado = true
            carro.status()
        } else {
            console.log("Este carro já está ligado.")
        }
    },
    desligar: function () {
        if (carro.ligado && carro.velocidade == 0) {
            carro.ligado = false
            //carro.velocidade = 0
            carro.status()
        } else if (!carro.ligado) {
            console.log("Este carro já está desligado.")
        } else {
            console.log("Este carro desliga apenas em velocidade 0.")
        }
    },
    acelerar: function () {
        if (carro.ligado) {
            carro.velocidade += 10
            carro.status()
        } else {
            console.log("Não é possível acelerar um carro desligado.")
        }
    },
    desacelerar: function () {
        if (carro.ligado) {
            carro.velocidade -= 10
            carro.status()
        } else {
            console.log("Não é possível desacelerar um carro desligado.")
        }
    },
    status: function () {
        console.log(`Carro ${carro.ligado ? "ligado" : "desligado"}. Velocidade ${carro.velocidade}.`)
    }
}


carro.desligar()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()
carro.desligar()

/*
Este carro já está desligado.
Carro ligado. Velocidade: 0.
Este carro já está ligado.
Carro ligado. Velocidade: 10.
Carro ligado. Velocidade: 20.
Carro ligado. Velocidade: 10.
Carro desligado. Velocidade: 0.
Não é possível acelerar um carro desligado.
Não é possível desacelerar um carro desligado.
*/


//resolução do professor
// const carro = {
//     ligado: false,
//     velocidade: 0,
//     devolveStatusTexto: function () {
//         return this.ligado ? 'ligado' : 'desligado';
//     },
//     imprimeStatusEVelocidade: function () {
//         console.log(`Carro ${this.devolveStatusTexto()}. Velocidade: ${this.velocidade}.`);
//     },
//     ligar: function () {
//         if (this.ligado) {
//             console.log('Este carro já está ligado.');
//         } else {
//             this.ligado = true;
//             this.imprimeStatusEVelocidade();
//         }
//     },
//     desligar: function () {
//         if (!this.ligado) {
//             console.log('Este carro já está desligado.');
//         } else {
//             if (this.velocidade > 0) {
//                 console.log('Não é possível desligar um carro em movimento.');
//             } else {
//                 this.ligado = false;
//                 this.velocidade = 0;
//                 this.imprimeStatusEVelocidade();
//             }
//         }
//     },
//     acelerar: function () {
//         if (!this.ligado) {
//             this.ligado = true;
//         }

//         this.velocidade += 10;
//         this.imprimeStatusEVelocidade();
//     },
//     desacelerar: function () {
//         if (!this.ligado) {
//             console.log('Não é possível desacelerar um carro desligado.');
//         } else {
//             this.velocidade -= 10;
//             if (this.velocidade === 0) {
//                 this.ligado = false;
//             }
//             this.imprimeStatusEVelocidade();
//         }
//     },
// }