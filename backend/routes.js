const express = require('express')

const StatusMercadoController = require('./controllers/StatusMercadoController')
const EscalacaoController = require('./controllers/StatusMercadoController')
const CustoMinimoController = require('./controllers/CustoMinimoController')

const routes = express.Router()

routes.get('/escalacao', EscalacaoController.generate)
routes.get('/statusMercado', StatusMercadoController.index)
routes.get('/custoMinimo', CustoMinimoController.index)

module.exports = routes