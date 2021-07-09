const fs  = require('fs/promises')

module.exports = async (dir) => {
  const fd = await fs.open(dir, 'r')
  const stats = await fs.stat(dir)

  let candidatos = [];
  let buffer = Buffer.alloc(40)
  let total = Math.floor(stats.size / 93)
  let pos = 0

  for(let i = 0; i < total; i++) {
    let x = {}
  
    await fd.read(buffer, 0, 4, pos)
    x.id_inscricao = buffer.toString('utf8', 0, 4)
    pos += 4
  
    await fd.read(buffer, 0, 20, pos)
    x.curso = buffer.toString('utf8', 0, 20)
    pos += 20
  
    await fd.read(buffer, 0, 15, pos)
    x.cpf = buffer.toString('utf8', 0, 15)
    pos += 15
  
    await fd.read(buffer, 0, 11, pos)
    x.dataNacimento = buffer.toString('utf8', 0, 11)
    pos += 11
  
    await fd.read(buffer, 0, 1, pos)
    x.sexo = buffer.toString('utf8', 0, 1)
    pos += 1
  
    await fd.read(buffer, 0, 40, pos)
    x.email = buffer.toString('utf8', 0, 40)
    pos += 40
  
    await fd.read(buffer, 0, 1, pos)
    x.opcaoQuadro = buffer.toString('utf8', 0, 1)
    pos += 2
  
    candidatos[i] = x
  }
  await fd.close()
  return candidatos;
}
