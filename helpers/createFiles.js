const fs = require('fs')

const createFiles = ({ domain, path }) => {

  const controller = fs.readFileSync(`${process.cwd()}/lib/controller.js`)
  const constants = fs.readFileSync(`${process.cwd()}/lib/constants.js`)
  const service = fs.readFileSync(`${process.cwd()}/lib/service.js`)
  const route = fs.readFileSync(`${process.cwd()}/lib/route.js`)
  const index = fs.readFileSync(`${process.cwd()}/lib/index.js`)

  if (!fs.existsSync(`${path}/${domain}.controller.js`)) {
    fs.writeFileSync(`${path}/${domain}.controller.js`, controller)
  }
  if (!fs.existsSync(`${path}/${domain}.constants.js`)) {
    fs.writeFileSync(`${path}/${domain}.constants.js`, constants)
  }
  if (!fs.existsSync(`${path}/${domain}.service.js`)) {
    fs.writeFileSync(`${path}/${domain}.service.js`, service)
  }
  if (!fs.existsSync(`${path}/${domain}.route.js`)) {
    fs.writeFileSync(`${path}/${domain}.route.js`, route)
  }
  if (!fs.existsSync(`${path}/index.js`)) {
    fs.writeFileSync(`${path}/index.js`, index)
  }

}

module.exports = createFiles
