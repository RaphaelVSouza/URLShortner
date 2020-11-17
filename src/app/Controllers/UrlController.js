const ShortUrl = require('../models/shortUrl')

class ShortUrlController {
  async index(req, res) {
    const shortUrls = await ShortUrl.find()
    res.render('../public/views/index.ejs', { shortUrls })
  }

  async store(req, res) {
    await ShortUrl.create({ full: req.body.fullUrl })
    return res.redirect('/')
  }

  async redirectLink(req, res) {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) return res.status(404)

    shortUrl.clicks += 1
    shortUrl.save()

    return res.redirect(shortUrl.full)
  }
}

module.exports = new ShortUrlController()
