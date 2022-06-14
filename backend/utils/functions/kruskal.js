import {ArestaKruskal} from '../utils/classes/ArestaKruskal';
import {Aresta} from '../utils/classes/Aresta';
import {Jogador} from '../utils/classes/Jogador';

function kruskal(jogadores){
    var dVertices = []
    var vertices = []
    var arestas = []

    for(var i=0; i<jogadores.length; i++){
        var a = new Aresta(null, 9999999)
        dVertices.add(a)
        vertices.push(jogadores[i].id)
    }

    for(var j=0; j<jogadores.length; i++){
        var a = new Aresta(null, 9999999)
        dVertices.add(a)
        vertices.push(jogadores[i].id)
    }
}