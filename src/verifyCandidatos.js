const verifyCandidatos = (candidatos) => {
  let candidatoAntigo = candidatos[0]
  let candidatos2 = []

  for(let i = 0; i < candidatos.length; i++){
    if(candidatos[i].cpf == candidatoAntigo.cpf) {
      if(candidatos[i].id_inscricao > candidatoAntigo.id_inscricao) {
        candidatoAntigo = candidatos[i]
      }
    } else {
      candidatos2.push(candidatoAntigo)
      candidatoAntigo = candidatos[i]
    }
  }

  return candidatos2
}

module.exports = verifyCandidatos
