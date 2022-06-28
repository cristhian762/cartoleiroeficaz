import {Aresta} from '../utils/classes/Aresta'
import {VD} from '../utils/classes/VD'
import {Jogador} from '../utils/classes/Jogador'

function kruskal(jogadores, formacao){
    var dVertices = []
    var vertices = []
    var arestas = []
    var escalacoes = [(0,3,4,3), (0,3,5,2), (2,2,3,3), (2,2,4,2), (2,2,5,1), (2,3,3,2), (2,3,4,1)]

    var maximos = [1,escalacoes[formacao][0],escalacoes[formacao][1],escalacoes[formacao][2],escalacoes[formacao][3],1]
    var quant_posicao = [0,0,0,0,0,0]
    var max_grafo = 12

    var vs = jogadores.vertices

    for(var i = 0; vs.length; i++){
        var a = new VD(null, 9999999)
        var vd = (vs[i], a)
        dVertices.add(vd)
        vertices.push(vs[i].id)
    }

    for(var j=0; j< vs.length; j++){
        for(var k = 0; k < jogadores.getVizinhos(vs[i].id); k++){
            var b = new Aresta(vs[j], jogadores.getVizinhos(vs[i].id)[k], jogadores.findEdge(vs[j], jogadores.getVizinhos(vs[i].id)[k]).peso)
            arestas.add(b)
        }
    }

    arestas.sort()

    for(var l=0; l< arestas.length; l++){
        var posicao = jogadores.getJogador(arestas[l].destino)
        if(l==0){
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
}