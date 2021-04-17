const { resolve } = require('path')
const fs = require('fs/promises')
const loadEnderecos = require('./loadEnderecos')
const { merge } = require('./mergeSort')

const mergeBlocks = async () => {

  let dir = []
  for(let i = 0; i < 16; i++) {
    dir[i] = resolve(__dirname, '..', `cep-part${i+1}.dat`)
  }

  let e = []
  for(let i = 0; i < 16; i++) {
    e[i] = await loadEnderecos(dir[i])
  }

  const cepOrd = merge(
                      merge(
                        merge(
                          merge(e[0], e[1]), merge(e[2], e[3])
                        ), merge(
                          merge(e[4], e[5]), merge(e[6], e[7])
                        )
                      ), merge(
                        merge(
                          merge(e[8], e[9]), merge(e[10], e[11])
                        ), merge(
                          merge(e[12], e[13]), merge(e[14], e[15])
                        )
                      )
                    )

  let data = ''
  for(let i = 0; i < cepOrd.length; i++) {
    data += `${cepOrd[i].logradouro}${cepOrd[i].bairro}${cepOrd[i].cidade}${cepOrd[i].uf}${cepOrd[i].sigla}${cepOrd[i].cep}${cepOrd[i].lixo}`
  }

  await fs.writeFile(resolve(__dirname, '..', `cepOrdenado.dat`), data, 'binary')
}

module.exports = mergeBlocks