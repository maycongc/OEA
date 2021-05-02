const { resolve } = require('path')
const loadCandidatos = require('./loadCandidatos')
const verifyCandidatos = require('./verifyCandidatos')
const writeData = require('./writeData')

const main = async () => {
  const candidatos = await loadCandidatos(resolve(__dirname, '..', 'candidatos.dat'))
  
  const candidatos2 = verifyCandidatos(candidatos)
  writeData(candidatos2)
}

main()
