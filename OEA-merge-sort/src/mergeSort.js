const write = require('./writeData')

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

let n = 1;

const mergeSort = (array, i) => {
  if(i === 5) {
    write(mergeSort(array, 6), n++)
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
  merge
}