import {Grafo} from '../utils/classes/Grafo'
import {Aresta} from '../utils/classes/Aresta'

function geraGrafo(jogadores, tipo){
    var prov_jogadores = []
    var arestas = []
    for(var i=0; i <jogadores.length; i++){
        if(jogadores[i].status == 7){
            prov_jogadores.add(jogadores[i])
        }
    }
    if(tipo == 1){
        for(var j=0; j<prov_jogadores.length; j++){
            for(var k=j+1; k<prov_jogadores.length; k++){
                var a = new Aresta(prov_jogadores[j].id, prov_jogadores[k], prov_jogadores[j].preco + prov_jogadores[k].preco)
                arestas.add(a)
            }
        }
    } else {
        for(var j=0; j<prov_jogadores.length; j++){
            for(var k=j+1; k<prov_jogadores.length; k++){
                var a = new Aresta(prov_jogadores[j].id, prov_jogadores[k], prov_jogadores[j].coef + prov_jogadores[k].coef)
                arestas.add(a)
            }
        }
    }
    var g = new Grafo(prov_jogadores, arestas)
    return g
}