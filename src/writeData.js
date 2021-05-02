const { resolve } = require('path')
const fs = require('fs/promises')

const write = async (c2) => {
  let data = ''

  for(let i = 0; i < c2.length; i++) {
    data += `${c2[i].id_inscricao}${c2[i].curso}${c2[i].cpf}${c2[i].dataNacimento}${c2[i].sexo}${c2[i].email}${c2[i].opcaoQuadro}\n`
  }

  await fs.writeFile(resolve(__dirname, '..', `candidatos2.dat`), data, 'binary')
}

module.exports = write
