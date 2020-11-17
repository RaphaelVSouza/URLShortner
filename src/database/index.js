const mongoose = require('mongoose')

class Database {
  constructor() {
    this.mongo()
  }

  mongo() {
    const port = process.env.MONGO_URL

    this.mongoConnection = mongoose.connect(port, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }
}

module.exports = new Database()
