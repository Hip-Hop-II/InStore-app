import express from 'express'

import middlewaresConfig from './config/middleware'

// connect mongodb
import './config/db'
import {CustomerRoutes} from './modules'

const app = express()

// use middleware

middlewaresConfig(app)

app.get('/', (req, res) => {
  res.send('<h4>hello world</h4>')
})

app.use('/api/v1/customers', CustomerRoutes)

// listening

app.listen(8888, (error) => {
  if (error) {
    console.error(error)
  }
  console.log('server is running on port 8888')
})
