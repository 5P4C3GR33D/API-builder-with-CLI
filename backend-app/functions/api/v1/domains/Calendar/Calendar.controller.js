
const CalendarService = require('./Calendar.service')

/**
 * This Controller has methods that help to work with Calendar.
 *
 * @module Calendar
 */

class CalendarController {
  constructor() {}

  async getCalendarData(request, response) {
    const { id,name,clinicId } = request.body
    if (!id,name,clinicId) {
      /**
       * Handling of errors
       */
      return response
        .status(400)
        .send({
          statusCode: 400,
          error: message
        })
        .end()
    }

    // creating of the response object
    const responseObject = {
      statusCode: 200,
      message: 'Operation was successfully done',
      data: null,
      error: null
    }

    try {
      // Creating new instance of CalendarService.
      const calendarService = new CalendarService()

      //Calling created API
      responseObject.data = await CalendarService.getCalendarData(props)

      // end of function
      return response.status(200).send(responseObject)
    } catch (error) {
      responseObject.statusCode = 500
      responseObject.message =
        'Error occurred'
      responseObject.error = error
      return response.status(500).send(responseObject)
    }
  }
}

module.exports = CalendarController
