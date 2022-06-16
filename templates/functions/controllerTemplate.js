const template = `
const {{domain}}Service = require('./{{domain}}.service')

/**
 * This Controller has methods that help to work with {{domain}}.
 *
 * @module {{domain}}
 */

class {{domain}}Controller {
  constructor() {}

  async {{apiName}}(request, response) {
    const { {{props}} } = request.body
    if (!{{props}}) {
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
      // Creating new instance of {{domain}}Service.
      const {{lowercaseDomain}}Service = new {{domain}}Service()

      //Calling created API
      responseObject.data = await {{domain}}Service.{{apiName}}(props)

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

module.exports = {{domain}}Controller
`
module.exports = template