const jogadores = [
  {
    "nome": "Herman",
    "jogada": 1
  },
  {
    "nome": "Rhodes",
    "jogada": 1
  },
  {
    "nome": "Beach",
    "jogada": 1
  },
  {
    "nome": "Laurel",
    "jogada": 1
  },
  {
    "nome": "Beatrice",
    "jogada": 1
  },
  {
    "nome": "Alison",
    "jogada": 1
  },
  {
    "nome": "Saundra",
    "jogada": 1
  },
  {
    "nome": "Klein",
    "jogada": 0
  }
]

function solucao(jogadores) {
  //seu codigo aqui
  let um = 0
  let zerinho = 0
  for (let jogador of jogadores) {
    if (jogador.jogada == 1) {
      um++
    } else {
      zerinho++
    }
  }
  if (um == 1) {
    for (let jogador of jogadores) {
      if (jogador.jogada == 1) {
        return console.log(jogador.nome)
        break
      }
    }
  } else if (zerinho == 1) {
    for (let jogador of jogadores) {
      if (jogador.jogada == 0) {
        return console.log(jogador.nome)
        break
      }
    }
  } else {
    return console.log("NINGUEM")
  }



}

solucao(jogadores)  //Herman
  // ou  NINGUEM