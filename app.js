const Koa = require('koa')
const KoaStatic = require('koa-static')

const PORT = '9999'

const app = new Koa()

app.use(KoaStatic('./www'))

app.listen(PORT)
console.info(`listening on port > ${PORT}`)
