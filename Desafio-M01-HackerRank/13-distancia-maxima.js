
const sampleInput = "3\n0 0\n0 3\n4 0\n"
const sampleInput2 = "5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7\n"
//let distancia = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);


function processData(entrada) {
    //Enter your code here
    entrada = entrada.trim()
    entrada = entrada.split("\n")
    let funcionarios = parseInt(entrada[0])
    let coordenadas = []
    let maiorDistancia = 0
    for (let indice = 1; indice < entrada.length; indice ++) {
        let coo = entrada[indice].split(" ")
        coordenadas.push(
            {
                x: Number(coo[0]),
                y: Number(coo[1])
            }
         )       
    } 
    
    for (let i = 0; i < funcionarios; i ++) {
        for (let j = 0; j < funcionarios; j ++){

            let distancia = Math.sqrt((coordenadas[i].x - coordenadas[j].x)**2 + (coordenadas[i].y - coordenadas[j].y)**2)

            if (distancia > maiorDistancia) {
                maiorDistancia = distancia
            }
            
        }       
        
    } 
    return console.log(maiorDistancia)   
} 

processData(sampleInput)
processData(sampleInput2)

/*
3
0 0
0 3
4 0
R = 5

5
3.56 17
-5.1 36.3
0.0002 -2
5 5
-9.01 -17.7
R = 54.1413
*/