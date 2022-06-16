const template = `
const functions = require('firebase-functions')
const admin = require('firebase-admin')

// extracting of firebase config variables (environment variables)
const firebaseConfig = functions.config().config

// importing fo the service account (private firabase database keys)
const serviceAccount = require('../configs/${firebaseConfig.service_account_config_name}')

class FirebaseApp {
  constructor() {
    // initialization of the firebase-app instance (firebase instance)
    this.defaultProdApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: firebaseConfig.database_url
    })
  }

  /**
   * this method will return the instance of initialized fb app
   * @return {object} - firebase instance
   */
  getFirebaseAppInstance() {
    return this.defaultProdApp || null
  }
}

const defaultProdApp = new FirebaseApp().getFirebaseAppInstance()

module.exports = defaultProdApp
`