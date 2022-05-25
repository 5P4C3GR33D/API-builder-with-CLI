const functions = require('firebase-functions')
//Please, change route path according to your environment
const route = require('../../utils/RouteHelper')
const DomainController = require('./Domain.controller')

const Controller = new DomainController()

const typeDomain = functions.https.onRequest((request, response) =>
  route(request, response, Controller.typeDomain, {
    method: 'POST',
    checkAuthentication: false
  })
)

module.exports = {
  typeDomain
}