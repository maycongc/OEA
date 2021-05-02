const { resolve } = require('path')
const load = require('./load')

const main = async () => {

  const dir = resolve(__dirname, '..', process.argv[2])
  console.log('Lendo o arquivo: ' + dir + '\n')
  const arquivo = await load(dir)

  const linhas = arquivo.split('\n'); 
  console.log('Quantidade de linhas: ' + linhas.length)

  const palavras = linhas.reduce((acc, linha) => {
    return acc + linha.split(' ').filter(palavra => palavra != '').length
  }, 0)
  console.log('Quantidade de palavras: ' + palavras)
}

main()
