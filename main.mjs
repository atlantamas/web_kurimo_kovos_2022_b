import express from 'express'
import controller_handle_prideti_buta from './controllers/controller_handle_prideti_buta.mjs'
import controller_show_view_home from './controllers/controller_show_view_home.mjs'
import controller_show_view_vadybininko_zona from './controllers/controller_show_view_vadybininko_zona.mjs'

const express_1 = express()

// middleware

express_1.use(express.urlencoded())

//

express_1.get("/", controller_show_view_home)
express_1.get("/apartments", controller_show_view_vadybininko_zona)
express_1.post("/apartments", controller_handle_prideti_buta)

//

express_1.listen(80)