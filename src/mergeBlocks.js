const { resolve } = require('path')
const loadEnderecos = require('./loadEnderecos')
const { merge } = require('./mergeSort')
const write = require('./writeData')

const mergeBlocks = async (total, n) => {
  for(let i = 0; i < total/2; i++) {
    let e1 = await loadEnderecos(resolve(__dirname, '..', `cep-part${n}.dat`))
    let e2 = await loadEnderecos(resolve(__dirname, '..', `cep-part${n+1}.dat`))

    await write(merge(e1, e2), (n + total - i))
    n += 2
  }
  
  if(total > 2)
    mergeBlocks(total/2, n)
}

module.exports = mergeBlocks
