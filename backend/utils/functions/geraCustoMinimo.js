import {Grafo} from '../utils/classes/Grafo'
import {geraGrafo} from './geraGrafo'
import {kruskal} from './kruskal'

function geraCustoMinimo(jogadores, formacao){
    var preds = []
    var suces = []
    var lista_jogadores = []
    var g = geraGrafo(jogadores, 1)
    var arvore = kruskal(g, formacao)
    var custoMinimo = 0

    for(var i=0; i<jogadores.length; i++){
        var v = arvore.get(jogadores[i].id).pred
        if(v != null){
            preds.add(v)
            suces.add(jogadores[i].id)
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