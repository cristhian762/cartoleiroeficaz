const kruskal = require('./kruskal');
const grafo = require('./grafo');

async function geraCustoMinimo(jogadores, formacao){
    var preds = []
    var suces = []
    var arvore = await kruskal(jogadores, formacao)
    var custoMinimo = 0

    for(var jog of jogadores.vertices){
        var v = arvore[jog.idJogador].pred
        if(v != null){
            preds.push(v)
            suces.push(jog.idJogador)
        }
    }

    var l1 = preds.concat(suces);
    const ids_jogadores = [...new Set(l1)]

    for(var id of ids_jogadores){
        var jogador = await grafo.getJogador(jogadores, id)
        custoMinimo = custoMinimo + jogador.preco
    }

    return custoMinimo
}

module.exports = geraCustoMinimo