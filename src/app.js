import express from 'express'
import routes from './routes'
import 'dotenv/config'

import './database'

class App {
  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.urlencoded({ extended: false }))
  }

  routes() {
    this.server.use(routes)
    this.server.set('view engine', 'ejs')
  }
}

export default new App().server
