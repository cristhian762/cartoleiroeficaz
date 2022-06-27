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

    findEdge(u,v){
        for(var i=0; i < this,vertices.length; i ++){
            for(var j=0; j < this.vertices.length; j++){
                if(vertices[i].id == u && vertices[j].id == v){
                    
                }
            }
        }
    }
}