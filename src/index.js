'use strict'

import logger from '../logger/index.js'
import serviceFactory from './serviceFactory.js';
const { actions } = require('./constants')
const lovelyStayService = require('./services/lovelyStay')

const action = process.argv[2]
if (!action) {
    logger.log('error', 'Missing action')
    process.exit()
}

serviceFactory.init()

switch (action) {
    case actions.USER:
        const user = process.argv[3]
        if (!user) {
            logger.log('error', 'Missing user name')
        }

        try {
            lovelyStayService.getGithubUser()
        } catch (error) {
            logger.log('error', `Some error happened with the following info: ${error}`)
        }

        break
        default:
            logger.log('error', 'Invalid action')

}

process.exit()
