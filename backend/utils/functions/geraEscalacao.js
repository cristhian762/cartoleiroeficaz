const kruskal = require('./kruskal');

async function geraEscalacao(jogadores, formacao, preco){
    var preds = []
    var suces = []
    var lista_jogadores = []
    var capitao = 0
    var precoTotal = 0
    var arvore = kruskal(jogadores, formacao, preco)

    for(var i=0; i<jogadores.length; i++){
        var v = arvore[jogadores[i].idJogador].pred
        if(v != null){
            preds.push(v)
            suces.push(jogadores[i].idJogador)
        }
    }

    var l1 = preds.concat(suces);
    const ids_jogadores = [...l1]

    var maiormedia = -100
    for(var j=0;j<ids_jogadores.length;j++){
        var jogador = jogadores.getJogador(ids_jogadores[j])
        if(jogador.mediaPontos > maiormedia){
            capitao = jogador.idJogador
            maiormedia = jogador.mediaPontos
        }
        precoTotal = precoTotal + jogador.preco
        lista_jogadores.add(jogador)
    }

    return [capitao, precoTotal, lista_jogadores]
}

module.exports = geraEscalacao