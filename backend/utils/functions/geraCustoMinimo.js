const kruskal = require('./kruskal');

async function geraCustoMinimo(jogadores, formacao){
    var preds = []
    var suces = []
    var arvore = kruskal(jogadores, formacao)
    var custoMinimo = 0

    for(var i=0; i<jogadores.length; i++){
        var v = arvore[jogadores[i].idJogador].pred
        if(v != null){
            preds.push(v)
            suces.push(jogadores[i].idJogador)
        }
    }

    var l1 = preds.concat(suces);
    const ids_jogadores = [...l1]

    for(var j=0;j<ids_jogadores.length;j++){
        var jogador = jogadores.getJogador(ids_jogadores[j])
        custoMinimo = custoMinimo + jogador.preco
    }

    return custoMinimo
}

module.exports = geraCustoMinimo