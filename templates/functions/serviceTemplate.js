const template = `
const BaseService = require('../../utils/Base.service')

const { {{pluralizeUppercaseDomain}}_COLLECTION } = require('../../constants/collections')

class {{domain}}Service extends BaseService {
  constructor() {
    super()
  }

  async {{apiName}}({{props}}) {
    try {
     /**
      * Type here
      */
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = {{domain}}Service
`
module.exports = template