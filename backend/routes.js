const express = require("express");

const StatusMercadoController = require("./controllers/StatusMercadoController");
const EscalacaoController = require("./controllers/EscalacaoController");
const CustoMinimoController = require("./controllers/CustoMinimoController");

const routes = express.Router();

routes.post("/escalacao", EscalacaoController.generate);
routes.post("/statusMercado", StatusMercadoController.index);
routes.get("/custoMinimo", CustoMinimoController.generate);

module.exports = routes;
