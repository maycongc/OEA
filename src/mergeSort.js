const { resolve } = require('path')
const fs = require('fs/promises')

let n = 1;

const writePart = async (array) => {
  const part = mergeSort(array, 6);

  let data = ''
  for(let i = 0; i < part.length; i++) {
    data += `${part[i].logradouro}${part[i].bairro}${part[i].cidade}${part[i].uf}${part[i].sigla}${part[i].cep}${part[i].lixo}`
  }

  await fs.writeFile(resolve(__dirname, '..', `cep-part${n++}.dat`), data, 'binary')
}

const merge = (left, right) => {
  let arr = []

  while (left.length && right.length) {

    if (left[0].cep < right[0].cep) {
        arr.push(left.shift())  
    } else {
        arr.push(right.shift()) 
    }
  }
  
  return [ ...arr, ...left, ...right ]
}

const mergeSort = (array, i) => {
  if(i === 5) {
    writePart(array)
    return []
  }

  const half = array.length / 2
  
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)
  return merge(mergeSort(left, i+1),mergeSort(array, i+1))
}

module.exports = {
  mergeSort,
  merge,
  writePart
}