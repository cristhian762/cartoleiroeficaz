const express = require('express')

const StatusMercadoController = require('./controllers/StatusMercadoController')
const EscalacaoController = require('./controllers/StatusMercadoController')

const routes = express.Router()

routes.get('/escalacao', EscalacaoController.generate)
routes.get('/statusMercado', StatusMercadoController.index)

module.exports = routes