
const functions = require('firebase-functions')
const route = require('../../utils/RouteHelper')
const CalendarController = require('./Calendar.controller')

const Controller = new CalendarController()

const getCalendarData = functions.https.onRequest((request, response) =>
  route(request, response, Controller.getCalendarData, {
    method: POST,
    checkAuthentication: false
  })
)

module.exports = {
  getCalendarData
}
