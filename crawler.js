const XRay = require('x-ray-crawler')
const pipe = require('ramda/src/pipe')
const addCheerio = require('./filters/addCheerio')

const filters = [addCheerio]
const filterFn = pipe.apply(null, filters)

const crawler = XRay()
  // limit number of requests defaults to INFINITY
  .limit(2)
  // limit timeout on requesting page defaults to INFINITY
  .timeout(30 * 1000)
  // modify request before sending
  // .request((req) => {
  //   req.querystring = '?foo'
  // })

crawler('http://robert.local', function (err, ctx) {
  if (err) { throw err }
  const context = filterFn(ctx)
  console.log(context.cheerio('title').text())
  // console.log(stringify(ctx.children, null, 2))
})
