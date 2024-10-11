'use strict'

import nconf from 'nconf'
import jsonConfiguration from './config.json' assert { type: 'json' };

nconf.use('memory')

nconf.argv().env({
  separator: '__',
  parseValues: true
})

nconf.defaults(jsonConfiguration)

export default nconf