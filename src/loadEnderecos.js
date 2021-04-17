const fs  = require('fs/promises')

module.exports = async (dir) => {
  const fd = await fs.open(dir, 'r')
  const stats = await fs.stat(dir)

  let e = [];
  let buffer = Buffer.alloc(72)
  let total = Math.floor(stats.size / 300)
  let pos = 0

  for(let i = 0; i < total; i++) {

    let x = {}
  
    await fd.read(buffer, 0, 72, pos)
    x.logradouro = buffer.toString('utf8', 0, 72)
    pos += 72
  
    await fd.read(buffer, 0, 72, pos)
    x.bairro = buffer.toString('utf8', 0, 72)
    pos += 72
  
    await fd.read(buffer, 0, 72, pos)
    x.cidade = buffer.toString('utf8', 0, 72)
    pos += 72
  
    await fd.read(buffer, 0, 72, pos)
    x.uf = buffer.toString('utf8', 0, 72)
    pos += 72
  
    await fd.read(buffer, 0, 2, pos)
    x.sigla = buffer.toString('utf8', 0, 2)
    pos += 2
  
    await fd.read(buffer, 0, 8, pos)
    x.cep = buffer.toString('utf8', 0, 8)
    pos += 8
  
    await fd.read(buffer, 0, 2, pos)
    x.lixo = buffer.toString('utf8', 0, 2)
    pos += 2
  
    e[i] = x
  }
  await fd.close()
  return e;
}