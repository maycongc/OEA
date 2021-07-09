const { resolve } = require('path')
const fs = require('fs/promises')

const write = async (part, n) => {
  let data = ''

  for(let i = 0; i < part.length; i++) {
    data += `${part[i].logradouro}${part[i].bairro}${part[i].cidade}${part[i].uf}${part[i].sigla}${part[i].cep}${part[i].lixo}`
  }

  await fs.writeFile(resolve(__dirname, '..', `cep-part${n}.dat`), data, 'binary')
}

module.exports = write
