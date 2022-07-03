const kruskal = require('./kruskal');
const grafo = require('./grafo');

async function geraEscalacao(jogadores, formacao, preco){
    var preds = []
    var suces = []
    var lista_jogadores = []
    var capitao = 0
    var precoTotal = 0
    var escalacao = await kruskal(jogadores, formacao, preco)


    var maiormedia = -100
    for(var j=0;j<escalacao.length;j++){
        var jogador = await grafo.getJogador(jogadores, escalacao[j])
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