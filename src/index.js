const { resolve } = require('path')
const loadEnderecos = require('./loadEnderecos')
const { mergeSort } = require('./mergeSort')
const mergeBlocks = require('./mergeBlocks')

const main = async () => {
  let dir = resolve(__dirname, '..', 'cep.dat')
  const e = await loadEnderecos(dir)
  await mergeSort(e, 1)
  await mergeBlocks(16, 1)
}

main()
