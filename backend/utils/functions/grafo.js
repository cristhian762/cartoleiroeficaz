module.exports = {
    async getVizinhos(grafo, vertice){
        var vizinhos = []
        grafo.vertices.forEach(async (ver) => {
            if(ver.pred==vertice){
                vizinhos.push(ver.idJogador)
            }
        });
        return vizinhos
    },

    async getJogador(grafo, id){
        for(var i=0; i<grafo.vertices.length; i++){
            if(vertices[i].idJogador == id){
                return vertices[i]
            }
        }
        return false
    },

    async findEdge(grafo, u,v){
        for(var i=0; i < grafo.arestas.length; i ++){
            if(arestas[i].origem == u && arestas[i].destino == v){
                return arestas[i]
            }
        }
        return false
    }
}