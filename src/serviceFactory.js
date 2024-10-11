'use strict'

import logger from '../logger/index.js'
import database from './database/index.js'
import apis from './api/index.js'

let apiClients = {}
let databaseConnection = null

const generateApiClients = () => {
  apiClients['github'] = apis.github
}

const initDB = () => {
  database.init()
  databaseConnection = database.connection
}

const serviceFactory = {
    init: () => {
      generateApiClients(),
      initDB()
    },
    getApiClients: () => {
      if (R.isEmpty(apiClients)) {
        console.log("aquiii, não era suposto")
        generateApiClients()
      }
      
      return apiClients
    },
    getDatabaseConnection: () => {
      if (R.isNil(databaseConnection)) {
        initDB()
      }
      
      return databaseConnection
    },
    debug: () => {
      logger.log('debug', `Debug Api Clients: ` +  Object.keys(apiClients))
    },
}

export default serviceFactory