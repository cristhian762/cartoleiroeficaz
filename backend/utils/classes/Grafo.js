import {Aresta} from '../utils/classes/Aresta';

class Grafo {
    constructor(elementos) {
      this.elementos = elementos
    }

    get elementos(){
        return this.elementos
    }

    getVizinhos(vertice){
        var vizinhos = []
        for(var i=0;i<this.elementos.length;i++){
            if(elementos[i].pred==vertice){
                vizinhos.push(this.elementos[i].id)
            }
        }
    }
}