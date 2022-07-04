const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors({
    origin: '*'
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

    console.log("teste");
});

app.use(express.json())
app.use(routes)

module.exports = app;