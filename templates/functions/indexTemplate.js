const template = `
const {{domain}}Controller = require('./{{domain}}.controller')
const {{domain}}Constants = require('./{{domain}}.constants')
const {{domain}}Service = require('./{{domain}}.service')
const {{domain}}Routes = require('./{{domain}}.route')

module.exports = {
  {{domain}}Controller,
  {{domain}}Constants,
  {{domain}}Service,
  {{domain}}Routes,
}
`
module.exports = template