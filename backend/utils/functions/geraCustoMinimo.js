const kruskal = require('./kruskal');
const grafo = require('./grafo');

async function geraCustoMinimo(jogadores, formacao){
    var preds = []
    var suces = []
    var escalacao = await kruskal(jogadores, formacao)
    var custoMinimo = 0

    for(var id of escalacao){
        var jogador = await grafo.getJogador(jogadores, id)
        custoMinimo = custoMinimo + jogador.preco
    }

    return custoMinimo
}

module.exports = geraCustoMinimo