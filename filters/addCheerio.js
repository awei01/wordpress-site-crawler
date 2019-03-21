const cheerio = require('cheerio')

module.exports = function (ctx) {
  ctx.cheerio = cheerio.load(ctx.body)
  return ctx
}
