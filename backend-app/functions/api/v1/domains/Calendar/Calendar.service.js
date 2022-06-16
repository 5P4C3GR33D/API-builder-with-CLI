
const BaseService = require('../../utils/Base.service')

const { CALENDARS_COLLECTION } = require('../../constants/collections')

class CalendarService extends BaseService {
  constructor() {
    super()
  }

  async getCalendarData(id,name,clinicId) {
    try {
     /**
      * Type here
      */
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = CalendarService
