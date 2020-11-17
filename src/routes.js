import { Router } from 'express'

const routes = new Router()

const UrlController = require('./app/Controllers/UrlController')

routes.get('/', UrlController.index)

routes.post('/shortUrls', UrlController.store)

routes.get('/:shortUrl', UrlController.redirectLink)

export default routes
