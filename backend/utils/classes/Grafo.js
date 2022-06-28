import {Vertice} from '../utils/classes/Vertice'

class Grafo {
    constructor(vertices=[], arestas=[]) {
      this.vertices = vertices
      this.arestas = arestas
    }

    get vertices(){
        return this.vertices
    }

    get arestas(){
        return this.arestas
    }

    getVizinhos(vertice){
        var vizinhos = []
        for(var i=0;i<this.vertices.length;i++){
            if(this.vertices[i].pred==vertice){
                vizinhos.push(this.vertices[i].id)
            }
        }
        return vizinhos
    }

    getJogador(id){
        for(var i=0; i<this.vertices.length; i++){
            if(vertices[i].id == id){
                return vertices[i]
            }
        }
        return false
    }

    findEdge(u,v){
        for(var i=0; i < this, arestas.length; i ++){
            if(arestas[i].origem == u && arestas[i].destino == v){
                return arestas[i]
            }
        }
        return false
    }
}