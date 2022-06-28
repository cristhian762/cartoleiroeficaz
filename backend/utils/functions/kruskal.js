import {ArestaKruskal} from '../utils/classes/ArestaKruskal'
import {VD} from '../utils/classes/VD'
import {Jogador} from '../utils/classes/Jogador'

function kruskal(jogadores, formacao){
    var dVertices = []
    var vertices = []
    var arestas = []
    var escalacoes = [(0,3,4,3), (0,3,5,2), (2,2,3,3), (2,2,4,2), (2,2,5,1), (2,3,3,2), (2,3,4,1)]

    var max_goleiros = 1
    var max_treinador = 1
    var max_laterais = escalacoes[formacao][0]
    var max_zagueiros = escalacoes[formacao][1]
    var max_meias = escalacoes[formacao][2]
    var max_atacantes = escalacoes[formacao][3]

    var goleiros = 0
    var treinador = 0
    var zagueiros = 0
    var laterais = 0
    var meias = 0
    var atacantes = 0

    var vs = jogadores.vertices

    for(var i = 0; vs.length; i++){
        var a = new VD(null, 9999999)
        var vd = (vs[i], a)
        dVertices.add(vd)
        vertices.push(vs[i].id)
    }

    for(var j=0; j< vs.length; j++){
        for(var k = 0; k < jogadores.getVizinhos(vs[i].id); k++){
            var b = new ArestaKruskal(vs[j], jogadores.getVizinhos(vs[i].id)[k], jogadores.findEdge(vs[j], jogadores.getVizinhos(vs[i].id)[k]).peso)
            arestas.add(b)
        }
    }

    arestas.sort()

    for(var l=0; l< arestas.length; l++){

        if(dVertices.get(arestas[l].origem).pred == null){
            dVertices.get(arestas[l].origem).pred = arestas[l].destino
        } else if (dVertices.get(arestas[l].destino).pred == null){
            dVertices.get(arestas[l].destino).pred = arestas[l].origem;
        }

        if(dVertices.get(arestas[l].origem).pred == arestas[l].destino && dVertices.get(arestas[l].destino).pred == arestas[l].origem){
            dVertices.get(arestas[l].destino).pred = null;
        }
    }
}