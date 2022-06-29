import {Grafo} from '../utils/classes/Grafo'
import {geraGrafo} from './geraGrafo'
import {kruskal} from './kruskal'

function geraEscalacao(jogadores, formacao, preco){
    var preds = []
    var suces = []
    var lista_jogadores = []
    var capitao = 0
    var precoTotal = 0
    var g = geraGrafo(jogadores, 2)
    var arvore = kruskal(g, formacao, preco)

    for(var i=0; i<jogadores.length; i++){
        var v = arvore.get(jogadores[i].id).pred
        if(v != null){
            preds.add(v)
            suces.add(jogadores[i].id)
        }
    }

    var l1 = preds.concat(suces);
    const ids_jogadores = [...l1]

    var maiormedia = -100
    for(var j=0;j<ids_jogadores.length;j++){
        var jogador = jogadores.getJogador(ids_jogadores[j])
        if(jogador.mediaPontos > maiormedia){
            capitao = jogador.id
            maiormedia = jogador.mediaPontos
        }
        precoTotal = precoTotal + jogador.preco
        lista_jogadores.add(jogador)
    }

    return [capitao, precoTotal, lista_jogadores]
}