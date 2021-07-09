const fs  = require('fs/promises')

module.exports = async (dir) => {
  const fd = await fs.open(dir, 'r')
  const stats = await fs.stat(dir)

  let buffer = Buffer.alloc(stats.size)
  await fd.read(buffer, 0, stats.size, 0)
  const arquivo = buffer.toString('utf8', 0, stats.size)

  await fd.close()
  return arquivo;
}
