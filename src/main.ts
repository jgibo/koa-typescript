import Koa from "koa"
import Router from "koa-router"

import logger from "koa-logger"
import json from "koa-json"
import bodyParser from "koa-bodyparser"

const app = new Koa()
const router = new Router()

router.get("/", async (ctx, next) => {
   ctx.body = { msg: "Hello world!" }

   await next()
})

// Middlewares
app.use(json())
app.use(logger())
app.use(bodyParser())

// Routes
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(4000, () => {
   console.log("started on http://localhost:4000")
})