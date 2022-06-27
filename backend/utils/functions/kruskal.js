import {ArestaKruskal} from '../utils/classes/ArestaKruskal'
import {VD} from '../utils/classes/VD'
import {Jogador} from '../utils/classes/Jogador'

function kruskal(jogadores){
    var dVertices = []
    var vertices = []
    var arestas = []

    var vs = jogadores.vertices

    for(var i = 0; vs.length; i++){
        var a = new VD(null, 9999999)
        var vd = (vs[i], a)
        dVertices.add(vd)
        vertices.push(vs[i].id)
    }

    for(var j=0; j< vs.length; j++){
        for(var k = 0; k < jogadores.getVizinhos(vs[i].id); k++){
            var b = new ArestaKruskal(vs[i], vs[j], )
            
        }
    }
}