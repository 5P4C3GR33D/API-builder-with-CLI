const fs = require('fs')

const directoryBuilder = (domain) => {
  const home = process.cwd()
  const functions = `${home}/functions`
  const api = `${functions}/api`
  const domains = `${api}/domains`
  const choosenDomain = `${domains}/${domain}`

  if (!fs.existsSync(functions)) {
    fs.mkdirSync(functions)
  }
  if (!fs.existsSync(api)) {
    fs.mkdirSync(api)
  }
  if (!fs.existsSync(domains)) {
    fs.mkdirSync(domains)
  }
  if (!fs.existsSync(choosenDomain)) {
    fs.mkdirSync(choosenDomain)
  }
}

module.exports = directoryBuilder
