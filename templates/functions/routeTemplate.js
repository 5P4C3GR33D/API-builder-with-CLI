const template = `
const functions = require('firebase-functions')
const route = require('../../utils/RouteHelper')
const {{domain}}Controller = require('./{{domain}}.controller')

const Controller = new {{domain}}Controller()

const {{apiName}} = functions.https.onRequest((request, response) =>
  route(request, response, Controller.{{apiName}}, {
    method: {{method}},
    checkAuthentication: false
  })
)

module.exports = {
  {{apiName}}
}
`
module.exports = template