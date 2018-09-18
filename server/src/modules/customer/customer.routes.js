import {Router} from 'express'

import {create} from './customer.controller'

import {customerAuth} from './customer'

const routes = Router()

routes.post('/', create)
routes.get("/test", customerAuth, (req, res) => {
  res.send('this is a test')
})

export default routes
