import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import category from './documents/category'
import location from './documents/location'
import product from './documents/product'

// objects
import openningHour from './objects/openningHour'
import hour from './objects/hour'
import timeObject from './objects/timeObject'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([category, hour, location, openningHour, product, timeObject])
})
