const kruskal = require('./kruskal');
const grafo = require('./grafo');

async function geraEscalacao(jogadores, formacao, preco){
    var preds = []
    var suces = []
    var lista_jogadores = []
    var capitao = 0
    var precoTotal = 0
    var arvore = await kruskal(jogadores, formacao, preco)

    for(var jog of jogadores.vertices){
        var v = arvore[jog.idJogador].pred
        if(v != null){
            preds.push(v)
            suces.push(jog.idJogador)
        }
    }

    var l1 = preds.concat(suces);
    const ids_jogadores = [...new Set(l1)]

    var maiormedia = -100
    for(var j=0;j<ids_jogadores.length;j++){
        var jogador = await grafo.getJogador(jogadores, ids_jogadores[j])
        if(jogador.idPosicao != 6 && jogador.media > maiormedia){
            capitao = jogador.idJogador
            maiormedia = jogador.media
        }
        precoTotal = precoTotal + jogador.preco
        lista_jogadores.push(jogador)
    }

    return [capitao, precoTotal, lista_jogadores]
}

module.exports = geraEscalacao