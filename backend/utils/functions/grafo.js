module.exports = {
    async getVizinhos(grafo, vertice){
        var vizinhos = []
        for(var ar of grafo.arestas){
            if(ar.origem==vertice){
                vizinhos.push(ar.destino)
            }
        }
        return vizinhos
    },

    async getJogador(grafo, id){
        for(var ver of grafo.vertices){
            if(ver.idJogador == id){
                return ver
            }
        }
        return false
    },

    async findEdge(grafo, u, v){
        var peso = false
        for(var ar of grafo.arestas){
            if(ar.origem == u && ar.destino == v){
                peso = ar.peso
            }
        }
        return peso
    }
}