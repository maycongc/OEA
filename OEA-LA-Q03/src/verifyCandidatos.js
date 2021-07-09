const verifyCandidatos = (candidatosA, candidatosB) => {
  for(let i = 0; i < candidatosA.length; i++)
    for(let j = 0; j < candidatosB.length; j++)
      if(candidatosA[i].cpf == candidatosB[j].cpf)
        console.log(candidatosA[i].email)
}

module.exports = verifyCandidatos
