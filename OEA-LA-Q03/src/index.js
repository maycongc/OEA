const { resolve } = require('path')
const loadCandidatos = require('./loadCandidatos')
const verifyCandidatos = require('./verifyCandidatos')

const main = async () => {
  const candidatosA = await loadCandidatos(resolve(__dirname, '..', 'candidatosA.dat'))
  const candidatosB = await loadCandidatos(resolve(__dirname, '..', 'candidatosB.dat'))
  
  verifyCandidatos(candidatosA, candidatosB)
}

main()
